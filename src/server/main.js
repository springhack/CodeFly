/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 14:24:45
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
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

app.set('trust proxy', 1);

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
    db.execute("insert into `record` values(?,?,?,'',?,?,?,0,0,0)", 
        [uuid, req.body.code, req.body.input, req.body.time, req.body.memory, req.body.lang],
        (err, rows) => {
            if (!handler(err, res)) return;
            res.end(JSON.stringify({err : null, uuid : uuid}));
        });
});

app.get('/api/get.php/:uuid', (req, res) => {
    db.execute("select `uuid`,`output`,`judged` from `record` where `uuid`=?",
        [req.params.uuid],
        (err, rows, cols) => {
            if (!handler(err, res)) return;
            if (rows.length < 1) return res.end(JSON.stringify({err : 'no record'}));
            res.end(JSON.stringify({err : null, judged : (rows[0].judged == 1), output : rows[0].output}));
        });
});

app.listen(process.env.PORT || 3000);
