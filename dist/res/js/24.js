webpackJsonp([24],{721:function(e,n){e.exports=function(e){var n="[A-Z_][A-Z0-9_.]*",a={keyword:"HEADER ENDSEC DATA"},s={className:"meta",begin:"ISO-10303-21;",relevance:10},l={className:"meta",begin:"END-ISO-10303-21;",relevance:10};return{aliases:["p21","step","stp"],case_insensitive:!0,lexemes:n,keywords:a,contains:[s,l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*!","\\*/"),e.C_NUMBER_MODE,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"string",begin:"'",end:"'"},{className:"symbol",variants:[{begin:"#",end:"\\d+",illegal:"\\W"}]}]}}}});