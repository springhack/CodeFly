webpackJsonp([83],{662:function(e,n){e.exports=function(e){var n="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",a="\\|[^]*?\\|",i="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",s={className:"meta",begin:"^#!",end:"$"},b={className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},g=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),t=e.COMMENT(";","$",{relevance:0}),c={begin:"\\*",end:"\\*"},r={className:"symbol",begin:"[:&]"+n},d={begin:n,relevance:0},o={begin:a},m={begin:"\\(",end:"\\)",contains:["self",b,g,l,d]},v={contains:[l,g,c,r,m,d],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},u={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},N={begin:"\\(\\s*",end:"\\)"},f={endsWithParent:!0,relevance:0};return N.contains=[{className:"name",variants:[{begin:n},{begin:a}]},f],f.contains=[v,u,N,b,l,g,t,c,r,o,d],{illegal:/\S/,contains:[l,s,b,g,t,v,u,N,d]}}}});