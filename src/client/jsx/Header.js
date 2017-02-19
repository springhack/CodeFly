/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-19 12:44:24
        Filename: src/client/jsx/Header.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {Panel} from 'muicss/react';

export default () => {
    return (
        <Panel className='Glass'>
            <a href='/'><h3>CodeFly - Navie code running and sharing platform</h3></a>
            <img src='res/img/glass.png' />
        </Panel>
    );
};
