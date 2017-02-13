/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 01:29:10
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    Container, Panel
} from 'muicss/react';

import Model from '../model/Model.js';
import Animation from './Animation.js';
import CodeEditor from './CodeEditor.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Panel>
                    <h3>CodeFly - A code sharing and running platform</h3>
                </Panel>
                <Panel className='Main'>
                    <Animation />
                    <CodeEditor />
                </Panel>
                <Panel className='footer'>
                    Created by SpringHack
                </Panel>
            </Container>
        );
    }
    componentDidMount() {
        console.log('SpringHack');
    }
}
