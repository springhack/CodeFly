webpackJsonp([78],{666:function(e,n){e.exports=function(e){var n="\\[=*\\[",a="\\]=*\\]",t={begin:n,end:a,contains:["self"]},i=[e.COMMENT("--(?!"+n+")","$"),e.COMMENT("--"+n,a,{contains:[t],relevance:10})];return{lexemes:e.UNDERSCORE_IDENT_RE,keywords:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:n,end:a,contains:[t],relevance:5}])}}}});