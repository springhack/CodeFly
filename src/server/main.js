/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-19 13:29:18
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import mysql from 'mysql2';
import uuidv4 from 'uuid/v4';
import path from 'path';

import {checker, handler, paramsRange} from './params-checker.js';

const app = express();
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'sksks',
    database : 'codefly'
});
const addChecker = ['code', 'input', 'time', 'memory', 'lang'];
const TIMELAST = 7*24*60*60

app.set('trust proxy', 1);

app.use(compression());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));

app.post('/api/add.php', (req, res) => {
    if (!checker(req, addChecker) || !paramsRange(req)) return res.end(JSON.stringify({err : 'params error'}));
    let uuid = uuidv4();
    db.execute("insert into `record` values (?,?,?,'',?,?,?,0,0,0,?)", 
        [uuid, req.body.code, req.body.input, req.body.time, req.body.memory, req.body.lang, parseInt((new Date()).getTime()/1000)],
        (err, rows) => {
            if (!handler(err, res)) return;
            res.end(JSON.stringify({err : null, uuid : uuid}));
        });
});

app.get('/api/get.php', (req, res) => {
    if (!req.query.uuid) return res.end(JSON.stringify({err : 'no record'}));
    db.execute("select `uuid`,`output`,`judged`,`time_use`,`memory_use` from `record` where `uuid`=?",
        [req.query.uuid],
        (err, rows, cols) => {
            if (!handler(err, res)) return;
            if (rows.length < 1) return res.end(JSON.stringify({err : 'no record'}));
            res.end(JSON.stringify({err : null, judged : (rows[0].judged == 1), output : rows[0].output, time_use : rows[0].time_use, memory_use : rows[0].memory_use.toFixed(3)}));
        });
});

app.get('/api/all.php', (req, res) => {
    if (!req.query.uuid) return res.end(JSON.stringify({err : 'no record'}));
    db.execute("select `code`,`input`,`output`,`time`,`lang`,`memory`,`time_use`,`memory_use` from `record` where `uuid`=?",
        [req.query.uuid],
        (err, rows, cols) => {
            if (!handler(err, res)) return;
            if (rows.length < 1) return res.end(JSON.stringify({err : 'no record'}));
            res.end(JSON.stringify(Object.assign({err : null}, rows[0])));
        });
});

app.get('/api/rec.php', (req, res) => {
    db.execute("select `lang`,`timestamp` from `record` where `timestamp`>? order by timestamp desc",
        [parseInt((new Date())/1000) - TIMELAST],
        (err, rows, cols) => {
            if (!handler(err, res)) return;
            if (rows.length < 1) return res.end(JSON.stringify({err : 'no record'}));
            res.end(JSON.stringify({err : null, rec : rows}));
        });
});

app.listen(process.env.PORT || 3000);
