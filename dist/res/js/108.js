webpackJsonp([108],{636:function(e,a){e.exports=function(e){var a="[A-Z_][A-Z0-9_.]*",n="\\%",i="IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",s={className:"meta",begin:"([O])([0-9]+)"},E=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),e.inherit(e.C_NUMBER_MODE,{begin:"([-+]?([0-9]*\\.?[0-9]+\\.?))|"+e.C_NUMBER_RE}),e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",end:"([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{aliases:["nc"],case_insensitive:!0,lexemes:a,keywords:i,contains:[{className:"meta",begin:n},s].concat(E)}}}});