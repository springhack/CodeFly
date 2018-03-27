#!/usr/bin/env python
#coding=utf-8

#数据库地址
db_host = '127.0.0.1'
#数据库用户名
db_user = 'root'
#数据库密码
db_password = 'sksks'
#数据库名字
db_name = 'codefly'
#数据库编码
db_charset = 'utf8'

bin_name = {
    'GCC': 'main',
    'G++': 'main',
    'Java': 'Main.class'
}

file_name = {
    'GCC': 'main.c',
    'G++': 'main.cpp',
    'Java': 'Main.java'
}

build_cmd = {
    'GCC': 'gcc main.c -o main -fno-asm --static -Wall -lm -std=c99 -DONLINE_JUDGE',
    'G++': 'g++ main.cpp -o main -fno-asm --static -Wall -lm -std=c++0x -DONLINE_JUDGE',
    'Java': 'javac -J-Xms32m -J-Xmx256m Main.java -encoding UTF8'
}

result_string = {
    0 : 'Accepted',
    1 : 'Presentation Error',
    2 : 'Time Limit Exceeded',
    3 : 'Memory Limit Exceeded',
    4 : 'Wrong Answer',
    5 : 'Runtime Error',
    6 : 'Output Limit Exceeded',
    7 : 'Compile Error',
    8 : 'System Error'
};
