webpackJsonp([49],{695:function(n,e){n.exports=function(n){var e={begin:/[a-z][A-Za-z0-9_]*/,relevance:0},a={className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},s={begin:/\(/,end:/\)/,relevance:0},i={begin:/\[/,end:/\]/},c={className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},_={className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},t={className:"string",begin:/0\'(\\\'|.)/},g={className:"string",begin:/0\'\\s/},b={begin:/:-/},o=[e,a,s,b,i,c,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,_,t,g,n.C_NUMBER_MODE];return s.contains=o,i.contains=o,{contains:o.concat([{begin:/\.$/}])}}}});