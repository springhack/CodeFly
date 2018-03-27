/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 01:01:18
        Filename: Animation.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';

let gendiv = n => {
    let ret = [];
    for (let i=0;i<n;++i)
        ret.push(<div key={i}></div>);
    return ret;
};

export default () => {
    return (
        <div className='stage'>
            <div className='sun'>
                {gendiv(9)}
            </div>
            <div className='cloud'>
                {gendiv(3)}
            </div>
            <div className='ocean'>
                {gendiv(4)}
            </div>
            <div className='fly'>
                <div className='stage'>
                    <div className='plane'></div>
                </div>
            </div>
        </div>
    );
};
