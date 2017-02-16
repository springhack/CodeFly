#!/usr/bin/env python
#coding=utf-8
import os
import sys
import time
import json
import Queue
import thread
import codecs
import socket
import config
import MySQLdb
import subprocess
from db import run_sql


reload(sys)
sys.setdefaultencoding('utf-8')


TaskPool = Queue.Queue(maxsize=100)
BaseDir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))))


def SendAndTest(sock, runcfg):
    try:
        client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        client.connect(sock)
        client.send(json.dumps(runcfg))
        ret = json.loads(client.recv(1024))
        client.close()
    except:
        return {'result':11, 'memoryused':0,'timeused':0}
    return ret


def Getter():
    print 'Current getter thread running ...'
    while True:
        TaskPool.join()
        tasks = run_sql('select * from `record` where `judged`=0')
        time.sleep(0.2)
        for task in tasks:
            TaskPool.put(task)


def Worker(id):
    print 'Curnet worker thread id: %d' % id
    while True:
        '''
        if TaskPool.empty():
            print 'Worker thread %d idel' % id
        '''
        task = TaskPool.get() 
        print 'Task uuid: %s' % task[0]
        T_dir = os.path.join(BaseDir, 'daemon/runtime', task[0])
        if task[6] == 'Java':
            T_bin = 'java -cp %s -Xss1M -Xms16M -Xmx%dk -Djava.security.manager -Djava.security.policy==%s -Djava.awt.headless=true Main' % (T_dir,int(task[5] * 1024), os.path.join(BaseDir, 'daemon/java.policy'))
        else:
            T_bin = os.path.join(T_dir, config.bin_name[task[6]])
        T_code = os.path.join(T_dir, config.file_name[task[6]])
        T_stdin = os.path.join(T_dir, 'data.in')
        T_stdout = os.path.join(T_dir, 'data.out')
        T_stderr = os.path.join(T_dir, 'data.err')
        try:
            os.mkdir(T_dir)
            with codecs.open(T_code, 'w', 'utf-8') as f:
                f.write(task[1])
                f.close()
            with codecs.open(T_stdin, 'w', 'utf-8') as f:
                f.write(task[2])
                f.close()
            with codecs.open(T_stdout, 'w', 'utf-8') as f:
                f.write('')
                f.close()
            with codecs.open(T_stderr, 'w', 'utf-8') as f:
                f.write('')
                f.close()
        except:
            pass
        JAVA = 1 if task[6] == 'Java' else 0
        p = subprocess.Popen(os.path.join(BaseDir, 'daemon/bin/compiler %d %s') % (JAVA, config.build_cmd[task[6]]),
            shell=True, cwd=T_dir, stdout=subprocess.PIPE, stderr=subprocess.PIPE, close_fds=True)
        C_out, C_err = p.communicate()
        C_info = 'COMPILER:\n'
        if not C_out.strip() == '':
            C_info += C_out.strip() + '\n'
        if not C_err.strip() == '':
            C_info += C_err.strip() + '\n'
        C_info += '\n'
        if p.returncode == 0:
            R_conf = {
                'args' : T_bin,
                'fd_in' : T_stdin,
                'fd_out' : T_stdout,
                'fd_err' : T_stderr,
                'timelimit' : int(task[4]),
                'memorylimit' : int(task[5]) * 1024,
                'java' : (task[6] == 'Java')
            }
            R_ret = SendAndTest(os.path.join(BaseDir, 'daemon/socket'), R_conf)
            R_out = R_err = ''
            try:
                with codecs.open(T_stdout, 'r', 'utf-8') as f:
                    R_out = f.read()
                    f.close()
                with codecs.open(T_stderr, 'r', 'utf-8') as f:
                    R_err = f.read()
                    f.close()
            except:
                pass
            R_info = 'OUTPUT:\n'
            if not R_out.strip() == '':
                R_info += R_out.strip() + '\n'
            if not R_err.strip() == '':
                R_info += R_err.strip() + '\n'
            R_info += '\n'
            J_info = 'JUDGER:\n%s\n\n' % config.result_string[int(R_ret['result'])]
            run_sql("update record set `judged`=1,`time_use`=%d,`memory_use`=%.3f,`output`='%s' where `uuid`='%s'" %
                (int(R_ret['timeused']), float(R_ret['memoryused'])/1024, MySQLdb.escape_string(R_info + J_info + C_info), task[0]))
        else:
            print 'C Error'
            run_sql("update record set `judged`=1,`output`='%s' where `uuid`='%s'" % (MySQLdb.escape_string(C_info), task[0]))
        TaskPool.task_done()


def main():
    pid = os.fork()
    if pid == 0:
        print 'Runner process starting ...'
        os.execl(os.path.join(BaseDir, 'daemon/bin/runner'), 'runner', os.path.join(BaseDir, 'daemon/socket'))
    thread.start_new_thread(Getter, ())
    for i in range(0,1):
        thread.start_new_thread(Worker, (i,))
    os.wait()


if __name__ == '__main__':
    main()
