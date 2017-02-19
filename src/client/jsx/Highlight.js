/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-19 12:30:25
        Filename: Highlight.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js/lib/highlight.js';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <pre>
                    <code dangerouslySetInnerHTML={{__html : this.props.children}} className={this.props.className}>
                    </code>
                </pre>
            </div>
        );
    }
    componentDidMount() {
        this.highlightCode();
    }
    componentDidUpdate() {
        this.highlightCode();
    }
    highlightCode() {
        if (this.props.className == '') return;
        System
            .import(`highlight.js/lib/languages/${this.props.className}.js`)
            .then(lang => {
                hljs.registerLanguage(this.props.className, lang);
                let dom = ReactDOM.findDOMNode(this);
                let nodes = dom.querySelectorAll('pre code')
                for (let node of nodes)
                    hljs.highlightBlock(node);
            })
            .catch(err => console.log(`Language module import error: ${err}`));
    }
}
