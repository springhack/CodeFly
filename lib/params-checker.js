'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checker = checker;
exports.handler = handler;
exports.paramsRange = paramsRange;
function checker(request, params) {
    var length = params.length;
    return length == params.filter(function (x) {
        return request.body[x];
    }).length;
};

function handler(err, res) {
    if (!err) return true;
    console.log(err);
    res.end(JSON.stringify({ err: 'system error' }));
    return false;
};

function paramsRange(request) {
    return [2000, 4000, 6000, 8000, 10000].includes(request.body.time) && ['GCC', 'G++', 'Java'].includes(request.body.lang) && [8, 16, 32, 64, 128].includes(request.body.memory);
};