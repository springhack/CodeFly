'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _mysql = require('mysql2');

var _mysql2 = _interopRequireDefault(_mysql);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _paramsChecker = require('./params-checker.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-19 13:29:18
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
var app = (0, _express2.default)();
var db = _mysql2.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sksks',
    database: 'codefly'
});
var addChecker = ['code', 'input', 'time', 'memory', 'lang'];
var TIMELAST = 7 * 24 * 60 * 60;

app.set('trust proxy', 1);
app.use((0, _cors2.default)({
    origin: function origin(_origin, callback) {
        callback(null, true);
    }
}));

app.use((0, _compression2.default)());
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressSession2.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));

app.post('/api/add.php', function (req, res) {
    if (!(0, _paramsChecker.checker)(req, addChecker) || !(0, _paramsChecker.paramsRange)(req)) return res.end(JSON.stringify({ err: 'params error' }));
    var uuid = (0, _v2.default)();
    db.execute("insert into `record` values (?,?,?,'',?,?,?,0,0,0,?)", [uuid, req.body.code, req.body.input, req.body.time, req.body.memory, req.body.lang, parseInt(new Date().getTime() / 1000)], function (err, rows) {
        if (!(0, _paramsChecker.handler)(err, res)) return;
        res.end(JSON.stringify({ err: null, uuid: uuid }));
    });
});

app.get('/api/get.php', function (req, res) {
    if (!req.query.uuid) return res.end(JSON.stringify({ err: 'no record' }));
    db.execute("select `uuid`,`output`,`judged`,`time_use`,`memory_use` from `record` where `uuid`=?", [req.query.uuid], function (err, rows, cols) {
        if (!(0, _paramsChecker.handler)(err, res)) return;
        if (rows.length < 1) return res.end(JSON.stringify({ err: 'no record' }));
        res.end(JSON.stringify({ err: null, judged: rows[0].judged == 1, output: rows[0].output, time_use: rows[0].time_use, memory_use: rows[0].memory_use.toFixed(3) }));
    });
});

app.get('/api/all.php', function (req, res) {
    if (!req.query.uuid) return res.end(JSON.stringify({ err: 'no record' }));
    db.execute("select `code`,`input`,`output`,`time`,`lang`,`memory`,`time_use`,`memory_use` from `record` where `uuid`=?", [req.query.uuid], function (err, rows, cols) {
        if (!(0, _paramsChecker.handler)(err, res)) return;
        if (rows.length < 1) return res.end(JSON.stringify({ err: 'no record' }));
        res.end(JSON.stringify(Object.assign({ err: null }, rows[0])));
    });
});

app.get('/api/rec.php', function (req, res) {
    db.execute("select `lang`,`timestamp` from `record` where `timestamp`>? order by timestamp desc", [parseInt(new Date() / 1000) - TIMELAST], function (err, rows, cols) {
        if (!(0, _paramsChecker.handler)(err, res)) return;
        if (rows.length < 1) return res.end(JSON.stringify({ err: 'no record' }));
        res.end(JSON.stringify({ err: null, rec: rows }));
    });
});

app.listen(process.env.PORT || 3000);