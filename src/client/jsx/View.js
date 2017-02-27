/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-23 22:57:24
        Filename: View.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    Container, Divider, Panel, Button, Row, Col
} from 'muicss/react';

import Highlight from './Highlight.js';
import Model from '../model/Model.js';
import Config from '../config/Config.js';
import Header from './Header.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memory_use : 0,
            render_lang : ''
        };
    }
    render() {
        return (
            <Container className='View'>
                <Header />
                <Panel className='Code'>
                    <h6>Code:</h6>
                    <Divider />
                    <Highlight className={this.state.render_lang}>{this.state.code}</Highlight>
                    <Row>
                        <Col md={2}>LANG: {this.state.lang}</Col>
                        <Col md={2}>TIME USE: {this.state.time_use}MS</Col>
                        <Col md={2}>TIME LIMIT: {this.state.time}MS</Col>
                        <Col md={2}>MEMORY USE: {this.state.memory_use.toFixed(3)}MB</Col>
                        <Col md={2}>MEMORY LIMIT: {this.state.memory}MB</Col>
                        <Col md={2}><a href='#' onClick={e => this.fork(e)}>【EDIT THIS CODE】</a></Col>
                    </Row>
                </Panel>
                <Panel className='Output'>
                    <h6>Output:</h6>
                    <Divider />
                    <pre><code>{this.state.output}</code></pre>
                </Panel>
                <Panel className='footer'>
                    Created by SpringHack
                </Panel>
            </Container>
        );
    }
    fork(e) {
        e.preventDefault();
        Model.setState(Object.assign({
            recordID : this.props.params.uuid
        }, this.state));
        location.href = '#';
    }
    componentDidMount() {
        Config.GET(`/api/all.php?uuid=${this.props.params.uuid}`)
        .then(res => res.json())
        .then(json => {
            if (!json.err)
                this.setState({
                    code : json.code,
                    input : json.input,
                    output : json.output,
                    lang : json.lang,
                    time : json.time,
                    memory : json.memory,
                    time_use : json.time_use,
                    memory_use : json.memory_use,
                    render_lang : (json.lang == 'Java')?'java':'cpp'
                });
        })
    }
}
