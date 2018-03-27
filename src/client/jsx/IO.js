/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-16 14:51:00
        Filename: IO.js
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
                        <div>Result:</div>
                        {Model.state.loading && <Loading /> || <pre className='out'><code>{`${Model.state.output}Time Used: ${Model.state.time_use}MS    Memory Used: ${Model.state.memory_use}MB`}</code></pre>}
                    </section>
                    <Row className='FooterButtons'>
                        <Col md={4}><Button onClick={() => this.share()} disabled={!Model.state.share} color='danger'>SHARE</Button></Col>
                        <Col md={4}><Button onClick={() => this.submit()} disabled={Model.state.loading} color='primary'>RUN</Button></Col>
                        <Col md={4}><Button onClick={() => this.close()} disabled={Model.state.loading} color='accent'>CLOSE</Button></Col>
                    </Row>
                </Panel>
            </section>
        );
    }
    submit() {
        Model.setState({loading : true, share : false});
        Config.POST('/api/add.php', {
            code : Model.state.code,
            time : Model.state.time,
            lang : Model.state.lang,
            input : Model.state.input,
            memory : Model.state.memory
        })
        .then(res => res.json())
        .then(json => {
            if (json.err)
                Model.setState({loading : false, share : false});
            else
                this.check(json.uuid);
        });
    }
    check(uuid) {
        Config.GET(`/api/get.php?uuid=${uuid}`)
        .then(res => res.json())
        .then(json => {
            if (json.err)
                Model.setState({loading : false, share : false});
            else {
                if (json.judged)
                    Model.setState({loading : false, share : true, recordID : uuid, output : json.output, time_use : json.time_use, memory_use : json.memory_use});
                else
                    setTimeout(() => this.check(uuid), 3000);
            }
        });
    }
    close() {
        Model.setState({showIO : false});
        setTimeout(() => Model.setState({showIOTimeout : false}), 150);
    }
    share() {
        location.href = `#/code/${Model.state.recordID}`;
    }
};

