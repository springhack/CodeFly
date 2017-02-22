/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-22 14:44:00
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Config from './config/Config.js';
import Model from './model/Model.js';
import View from './jsx/View.js';
import App from './jsx/App.js';

//Main less
import './less/App.less';

let code =
`#include <iostream>

using namespace std;

int main()
{
    int a, b;
    while (cin >> a >> b)
        cout << a + b << endl;
    return 0;
}
`;

let logo =
`     __________________,.............,    
    /_/_/_/_/_/_/_/_/,-',  ,. -,-,--/|
   /_/_/_/_/_/_/_/,-' //  /-| / /--/ /
  /_/_/_/_/_/_/,-' \`-''--'  \`' '--/ /
 /_/_/_/_/_/_,:................../ /
 |________,'  This is SpringHack |/
          """""""""""""""""""""""'
`;

if (window.localStorage && !window.localStorage.getItem('visit'))
{
    window.localStorage.setItem('visit', 'true');
    window.localStorage.setItem('code', code);
    window.localStorage.setItem('input', '1 2');
}

console.error(logo);

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='code/:uuid' component={View} />
        </Route>
    </Router>
, document.getElementById('app'));

document.addEventListener('dragover', ev => {
    ev.preventDefault();
}, false);

document.addEventListener('dragend', ev => {
    ev.preventDefault();
}, false);

document.addEventListener('drop', ev => {
    ev.preventDefault();
    let file = ev.dataTransfer.files[0];
    let fin = new FileReader();
    fin.onload = () => Model.setState({code : fin.result});
    fin.readAsText(file);
}, false);
