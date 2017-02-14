/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 14:23:13
        Filename: src/client/jsx/IO.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import CodeMirror from 'react-codemirror';
import {observer} from 'mobx-react';
import {
    Divider, Button, Panel, Row, Col
} from 'muicss/react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Config from '../config/Config.js';
import Model from '../model/Model.js';
import Loading from './Loading.js';
import 'codemirror/mode/clike/clike.js';

let CodeMirrorOptions = Object.assign({}, Config.CodeMirrorConfig);
CodeMirrorOptions.mode = undefined;

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section className='IO'>
                <Panel>
                    <h4>I/O Config: </h4>
                    <section className='IOWindow'>
                        <div>Stdin:</div>
                        <CodeMirror options={CodeMirrorOptions} value={Model.state.input} onChange={input => Model.setState({input : input, share : false})} preserveScrollPosition />
                        <Divider />
                        <div>Stdout:</div>
                        {Model.state.loading && <Loading /> || <code><pre>{Model.state.output}</pre></code>}
                    </section>
                    <Row className='FooterButtons'>
                        <Col md={4}><Button onClick={() => this.share()} disabled={!Model.state.share} color='danger'>SHARE</Button></Col>
                        <Col md={4}><Button onClick={() => this.submit()} color='primary'>RUN</Button></Col>
                        <Col md={4}><Button onClick={() => this.close()} disabled={Model.state.loading} color='accent'>CLOSE</Button></Col>
                    </Row>
                </Panel>
            </section>
        );
    }
    submit() {
        //TODO
        //Fake operation
        Model.setState({loading : true, share : false});
        setTimeout(() => Model.setState({loading : false, share : true}), 10000);
    }
    close() {
        Model.setState({showIO : false});
        setTimeout(() => Model.setState({showIOTimeout : false}), 150);
    }
    share() {
        //TODO
    }
};

