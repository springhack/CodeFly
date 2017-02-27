/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-27 13:28:25
        Filename: src/client/jsx/Data.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {autorun} from 'mobx';
import {observer} from 'mobx-react';

import Config from '../config/Config.js';
import Model from '../model/Model.js';

export default @observer class extends React.Component {
    dom = null;
    ctx = null;
    baseColor = '#2C3E50';
    lineColor = '#F70C9B';
    actionPoints = [];
    actionDatas = [];
    domPosition = {x : 0, y : 0};
    constructor(props) {
        super(props);
        this.state = {
            width : 700,
            height : 140,
            padding : 10,
            scale : 0.35,
            data : []
        };
    }
    render() {
        return (
            <canvas id='stage' width={this.state.width} height={this.state.height} ref={dom => this.dom = dom} onMouseMove={e => this.mouse(e)} onClick={() => this.click()}
                style={{width : parseInt(this.state.width * this.state.scale), height : parseInt(this.state.height * this.state.scale)}}>
            </canvas>
        );
    }
    componentDidMount() {
        let dom = this.dom;
        this.ctx = this.dom.getContext('2d');
        this.ctx.font = '30px serif';
        this.domPosition.x= dom.offsetLeft;
        this.domPosition.y = dom.offsetTop;
        while (dom.offsetParent != null)
        {
            dom = dom.offsetParent;
            this.domPosition.x += dom.offsetLeft;
            this.domPosition.y += dom.offsetTop;
        }
        Config.GET('/api/rec.php')
        .then(res => res.json())
        .then(json => {
            if (json.err) return;
            this.setState({data : json.rec});
            this.actionDatas = this.dealData();
            this.updateFrame();
            autorun(() => {
                this.ctx.clearRect(0, 0, this.state.width, this.state.height);
                this.updateFrame();
                if (Model.state.focus != -1)
                {
                    this.circle(this.actionPoints[Model.state.focus], this.state.padding);
                    this.ctx.fillText(`${this.actionDatas[Model.state.focus]}`, this.actionPoints[Model.state.focus][0] + this.state.padding, this.actionPoints[Model.state.focus][1] + this.state.padding);
                }
            });
        });
    }
    dealData() {
        let data = Object.assign([], this.state.data);
        let days = [0, 0, 0, 0, 0, 0, 0];
        let last = 0;
        let row = null;
        let time = parseInt((new Date()).getTime()/1000);
        while (data.length && last < 7)
        {
            row = data.shift();
            while (row.timestamp < time - 86400*(last + 1)) ++last;
            days[last]++;
        }
        return days.slice(0, 7);
    }
    updateFrame() {
        this.line([this.state.padding, this.state.padding], [this.state.padding, this.state.height - this.state.padding], this.baseColor);
        this.line([this.state.padding, this.state.padding], [0, this.state.padding*2], this.baseColor);
        this.line([this.state.padding, this.state.padding], [this.state.padding*2, this.state.padding*2], this.baseColor);
        this.line([this.state.padding, this.state.height - this.state.padding], [this.state.width - this.state.padding, this.state.height - this.state.padding], this.baseColor);
        this.line([this.state.width - this.state.padding, this.state.height - this.state.padding], [this.state.width - this.state.padding*2, this.state.height], this.baseColor);
        this.line([this.state.width - this.state.padding, this.state.height - this.state.padding], [this.state.width - this.state.padding*2, this.state.height - this.state.padding*2], this.baseColor);
        this.draw();
    }
    line([x, y], [m, n], color = '#000000') {
        this.ctx.beginPath()
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(m, n);
        this.ctx.stroke();
    }
    circle([x, y], r, color = '#BB99CD') {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }
    draw() {
        let data = this.actionDatas;
        let max = Math.max(...data) || 1;
        let ww = (this.state.width - this.state.padding*2)/7;
        let hh = (this.state.height - this.state.padding*2)/max;
        for (let i=0;i<7;++i)
        {
            let point = [this.state.padding + ww/2 + i*ww, this.state.padding + (max - data[i])*hh];
            this.actionPoints.push(point);
            i && this.line(this.actionPoints[i - 1], this.actionPoints[i], this.lineColor);
        }
    }
    mouse(ev) {
        let x = (ev.clientX - this.domPosition.x)/this.state.scale;
        let y = (ev.clientY - this.domPosition.y)/this.state.scale;
        let p = -1;
        const FF = 20;
        for (let i=0;i<7;++i)
            if (Math.abs(this.actionPoints[i][0] - x) <= FF && Math.abs(this.actionPoints[i][1] - y) <= FF)
                p = i;
        Model.setState({focus : p});
    }
    click() {
        //TODO
    }
}
