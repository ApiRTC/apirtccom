"use strict";(self.webpackChunkapirtccom=self.webpackChunkapirtccom||[]).push([[377],{377:(Q,O,C)=>{C.r(O),C.d(O,{default:()=>F});const b="[A-Za-z$_][0-9A-Za-z$_]*",v=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],w=["true","false","null","undefined","NaN","Infinity"],M=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],D=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],L=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],U=["arguments","this","super","console","window","document","localStorage","module","global"],x=[].concat(L,M,D);function g(e){return c("(?=",e,")")}function c(...e){return e.map(n=>function(e){return e?"string"==typeof e?e:e.source:null}(n)).join("")}const F=function(e){const o={$pattern:b,keyword:v.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:w,built_in:x.concat(["any","void","number","boolean","string","object","never","enum"]),"variable.language":U},E={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},u=(i,T,p)=>{const l=i.contains.findIndex(m=>m.label===T);if(-1===l)throw new Error("can not find mode to replace");i.contains.splice(l,1,p)},t=function(e){const n=b,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(a,f)=>{const R=a[0].length+a.index,I=a.input[R];"<"!==I?">"===I&&(((a,{after:f})=>{const R="</"+a[0].slice(1);return-1!==a.input.indexOf(R,f)})(a,{after:R})||f.ignoreMatch()):f.ignoreMatch()}},s={$pattern:b,keyword:v,literal:w,built_in:x,"variable.language":U},A="[0-9](_?[0-9])*",o=`\\.(${A})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",u={className:"number",variants:[{begin:`(\\b(${E})((${o})|\\.)?|(${o}))[eE][+-]?(${A})\\b`},{begin:`\\b(${E})\\b((${o})\\b|\\.)?|(${o})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},t={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},S={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"xml"}},i={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"css"}},T={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,t]},l={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,i,T,u,e.REGEXP_MODE];t.contains=m.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(m)});const B=[].concat(l,t.contains),y=B.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(B)}]),d={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:y},G={variants:[{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}},{match:[/extends/,/\s+/,c(n,"(",c(/\./,n),")*")],scope:{1:"keyword",3:"title.class.inherited"}}]},K={relevance:0,match:/\b[A-Z][a-z]+([A-Z][a-z]+)*/,className:"title.class",keywords:{_:[...M,...D]}},z={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[d],illegal:/%/},H={match:c(/\b/,(a=[...L,"super"],c("(?!",a.join("|"),")")),n,g(/\(/)),className:"title.function",relevance:0},X={begin:c(/\./,g(c(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},d]},k="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",V={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,g(k)],className:{1:"keyword",3:"title.function"},contains:[d]};var a;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,i,T,l,u,K,{className:"attr",begin:n+g(":"),relevance:0},V,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[l,e.REGEXP_MODE,{className:"function",begin:k,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:y}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[d,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},X,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[d]},H,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},G,J,{match:/\$[(.]/}]}}(e);return Object.assign(t.keywords,o),t.exports.PARAMS_CONTAINS.push(E),t.contains=t.contains.concat([E,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),u(t,"shebang",e.SHEBANG()),u(t,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),t.contains.find(i=>"func.def"===i.label).relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx"]}),t}}}]);