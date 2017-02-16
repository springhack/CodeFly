/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-16 13:49:10
        Filename: main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Config from './config/Config.js';
import App from './jsx/App.js';
import View from './jsx/View.js';

//Main less
import './less/App.less';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='code/:uuid' component={View} />
        </Route>
    </Router>
, document.getElementById('app'));
