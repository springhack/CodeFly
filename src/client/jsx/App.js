/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 12:53:49
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    Container, Panel
} from 'muicss/react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import IO from './IO.js';
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
                    <ReactCSSTransitionGroup
                        style={{
                            zIndex : (Model.state.showIOTimeout?13:-13)
                        }}
                        className='IOTransition'
                        transitionName='IOWindow'
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={150}>
                        {Model.state.showIO && <IO />}
                    </ReactCSSTransitionGroup>
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
