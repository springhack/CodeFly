webpackJsonp([159],{586:function(e,n){e.exports=function(e){return{aliases:["adoc"],contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10}),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",relevance:10,variants:[{begin:"^(={1,5}) .+?( \\1)?$"},{begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},{className:"bullet",begin:"^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"},{className:"symbol",begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},{className:"strong",begin:"\\B\\*(?![\\*\\s])",end:"(\\n{2}|\\*)",contains:[{begin:"\\\\*\\w",relevance:0}]},{className:"emphasis",begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0}],relevance:0},{className:"emphasis",begin:"_(?![_\\s])",end:"(\\n{2}|_)",relevance:0},{className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{className:"code",begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",end:"$",relevance:0},{begin:"^'{3,}[ \\t]*$",relevance:10},{begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]}}}});