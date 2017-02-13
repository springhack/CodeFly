/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-14 02:25:13
        Filename: src/client/model/Model.js
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
        code : window.localStorage && window.localStorage.getItem('code') || '',
        input : window.localStorage && window.localStorage.getItem('input') || '',
        output : window.localStorage && window.localStorage.getItem('output') || '',
        time : 2000,
        lang : 'G++',
        memory : 128
    };

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
