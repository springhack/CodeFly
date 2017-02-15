/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-15 20:42:43
        Filename: Config.js
        Description: Created by SpringHack using vim automatically.
**/
export default {
    CodeMirrorConfig : {
        lineNumbers : true,
        matchBrackets : true,
        styleActiveLine : true,
        mode : 'clike',
        theme : 'solarized dark'
    },
    GET : (url) => {
        return fetch(url);
    },
    POST : (url, params = {}) => {
        return fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(params)
        });
    }
};
