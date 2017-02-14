/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 14:20:46
        Filename: src/client/jsx/CodeEditor.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import CodeMirror from 'react-codemirror';
import {observer} from 'mobx-react';
import {
    Button, Dropdown, DropdownItem
} from 'muicss/react';

import Config from '../config/Config.js';
import Model from '../model/Model.js';
import 'codemirror/mode/clike/clike.js';

export default observer((props) => {
    let {value, onChange} = props;
    return (
        <section className='MainContainer'>
            <CodeMirror className='CodeMirror' value={Model.state.code} onChange={code => Model.setState({code : code, share : false})} options={Config.CodeMirrorConfig} preserveScrollPosition />
            <div className='Toolbar'>
                <Dropdown label={`Lang: ${Model.state.lang}`}>
                    {['G++', 'GCC', 'Java'].map((e, i) => <DropdownItem key={i} onClick={() => Model.setState({lang : e})}>{e}</DropdownItem>)}
                </Dropdown>
                <Dropdown label={`Time: ${Model.state.time}MS`}>
                    {[...Array(5)].map((e, i) => <DropdownItem onClick={() => Model.setState({time : (i + 1) * 2000})} key={i}>{(i + 1) * 2000 + 'MS'}</DropdownItem>)}
                </Dropdown>
                <Dropdown label={`Memory: ${Model.state.memory}MB`}>
                    {[...Array(5)].map((e, i) => <DropdownItem onClick={() => Model.setState({memory : 2 ** (i + 3)})} key={i}>{2 ** (i + 3) + 'MB'}</DropdownItem>)}
                </Dropdown>
                <Button color='primary' onClick={() => Model.setState({showIO : true, showIOTimeout : true})}>OK</Button>
                <Button onClick={() => Model.resetState()}>RESET</Button>
            </div>
        </section>
    );
});
