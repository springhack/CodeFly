/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-27 14:09:47
        Filename: Model.js
        Description: Created by SpringHack using vim automatically.
**/
import {useStrict, action, observable} from 'mobx'

useStrict(true);


class Model {

    ConstPool = {
        code : Symbol(),
        input : Symbol(),
        output : Symbol()
    };

    @observable
    state = {
        recordID : '',
        code : window.localStorage && window.localStorage.getItem('code') || '',
        input : window.localStorage && window.localStorage.getItem('input') || '',
        output : window.localStorage && window.localStorage.getItem('output') || '',
        share : false,
        showIO : false,
        loading : false,
        showIOTimeout : false,
        time : 2000,
        lang : 'G++',
        focus : -1,
        memory : 128,
        time_use : 0,
        memory_use : 0,
    };

    constructor() {
        //DEBUG Only !!!
        if (process.env.NODE_ENV != 'production') window.MobX_Model = this;
    }

    @action
    resetState() {
        this.setState({
            recordID : '',
            code : '',
            input : '',
            output : '',
            share : false,
            showIO : false,
            loading : false,
            showIOTimeout : false,
            time : 2000,
            lang : 'G++',
            memory : 128
        });
    }

    @action
    setState(o) {
        for (let k in o)
        {
            this.state[k] = o[k];
            (k in this.ConstPool) && window.localStorage.setItem(k, o[k]);
        }
    }

}

export default new Model();
