/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-24 00:19:53
        Filename: src/client/jsx/Header.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {Panel} from 'muicss/react';

import Data from './Data.js';

export default () => {
    return (
        <Panel className='Glass'>
            <a href='/'><h3>CodeFly - Navie code running and sharing platform</h3></a>
            <Data />
            <img src='res/img/glass.png' />
        </Panel>
    );
};
