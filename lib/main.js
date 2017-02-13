'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-01 01:58:07
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
var app = (0, _express2.default)();
var upload = (0, _multer2.default)();

app.set('trust proxy', 1);

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

app.post('/upload', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000);