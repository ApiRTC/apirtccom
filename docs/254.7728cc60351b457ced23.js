"use strict";(self.webpackChunkapirtccom=self.webpackChunkapirtccom||[]).push([[254],{254:(ye,R,C)=>{function O(t){return t?"string"==typeof t?t:t.source:null}function p(t){return e("(?=",t,")")}function e(...t){return t.map(F=>O(F)).join("")}function s(...t){return"("+(function(t){const o=t[t.length-1];return"object"==typeof o&&o.constructor===Object?(t.splice(t.length-1,1),o):{}}(t).capture?"":"?:")+t.map(c=>O(c)).join("|")+")"}C.r(R),C.d(R,{default:()=>Q});const N=t=>e(/\b/,t,/\w$/.test(t)?/\b/:/\B/),z=["Protocol","Type"].map(N),g=["init","self"].map(N),V=["Any","Self"],T=["actor","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],D=["false","nil","true"],Z=["assignment","associativity","higherThan","left","lowerThan","none","right"],q=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],S=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],v=s(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),B=s(v,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),y=e(v,B,"*"),P=s(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),m=s(P,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),a=e(P,m,"*"),w=e(/[A-Z]/,m,"*"),H=["autoclosure",e(/convention\(/,s("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",e(/objc\(/,a,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],X=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"],Q=function(t){const o={match:/\s+/,relevance:0},F=t.COMMENT("/\\*","\\*/",{contains:["self"]}),c=[t.C_LINE_COMMENT_MODE,F],ee={match:[/\./,s(...z,...g)],className:{2:"keyword"}},te={match:e(/\./,s(...T)),relevance:0},ne=T.filter(n=>"string"==typeof n).concat(["_|0"]),ae={variants:[{className:"keyword",match:s(...T.filter(n=>"string"!=typeof n).concat(V).map(N),...g)}]},u={$pattern:s(/\b\w+/,/#\w+/),keyword:ne.concat(q),literal:D},r=[ee,te,ae],I=[{match:e(/\./,s(...S)),relevance:0},{className:"built_in",match:e(/\b/,s(...S),/(?=\()/)}],M={match:/->/,relevance:0},E=[M,{className:"operator",relevance:0,variants:[{match:y},{match:`\\.(\\.|${B})+`}]}],b="([0-9]_*)+",k="([0-9a-fA-F]_*)+",d={className:"number",relevance:0,variants:[{match:`\\b(${b})(\\.(${b}))?([eE][+-]?(${b}))?\\b`},{match:`\\b0x(${k})(\\.(${k}))?([pP][+-]?(${b}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},L=(n="")=>({className:"subst",variants:[{match:e(/\\/,n,/[0\\tnr"']/)},{match:e(/\\/,n,/u\{[0-9a-fA-F]{1,8}\}/)}]}),ue=(n="")=>({className:"subst",match:e(/\\/,n,/[\t ]*(?:[\r\n]|\r\n)/)}),U=(n="")=>({className:"subst",label:"interpol",begin:e(/\\/,n,/\(/),end:/\)/}),f=(n="")=>({begin:e(n,/"""/),end:e(/"""/,n),contains:[L(n),ue(n),U(n)]}),A=(n="")=>({begin:e(n,/"/),end:e(/"/,n),contains:[L(n),U(n)]}),l={className:"string",variants:[f(),f("#"),f("##"),f("###"),A(),A("#"),A("##"),A("###")]},K={match:e(/`/,a,/`/)},_=[K,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${m}+`}],h=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:X,contains:[...E,d,l]}]}},{className:"keyword",match:e(/@/,s(...H))},{className:"meta",match:e(/@/,a)}],i={match:p(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:e(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,m,"+")},{className:"type",match:w,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:e(/\s+&\s+/,p(w)),relevance:0}]},me={begin:/</,end:/>/,keywords:u,contains:[...c,...r,...h,M,i]};i.contains.push(me);const x={begin:/\(/,end:/\)/,relevance:0,keywords:u,contains:["self",{match:e(a,/\s*:/),keywords:"_|0",relevance:0},...c,...r,...I,...E,d,l,..._,...h,i]},W={begin:/</,end:/>/,contains:[...c,i]},$={begin:/\(/,end:/\)/,keywords:u,contains:[{begin:s(p(e(a,/\s*:/)),p(e(a,/\s+/,a,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:a}]},...c,...r,...E,d,l,...h,i,x],endsParent:!0,illegal:/["']/},fe={match:[/func/,/\s+/,s(K.match,a,y)],className:{1:"keyword",3:"title.function"},contains:[W,$,o],illegal:[/\[/,/%/]},Ae={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[W,$,o],illegal:/\[|%/},he={match:[/operator/,/\s+/,y],className:{1:"keyword",3:"title"}},Ne={begin:[/precedencegroup/,/\s+/,w],className:{1:"keyword",3:"title"},contains:[i],keywords:[...Z,...D],end:/}/};for(const n of l.variants){const G=n.contains.find(Te=>"interpol"===Te.label);G.keywords=u;const Y=[...r,...I,...E,d,l,..._];G.contains=[...Y,{begin:/\(/,end:/\)/,contains:["self",...Y]}]}return{name:"Swift",keywords:u,contains:[...c,fe,Ae,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:u,contains:[t.inherit(t.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...r]},he,Ne,{beginKeywords:"import",end:/$/,contains:[...c],relevance:0},...r,...I,...E,d,l,..._,...h,i,x]}}}}]);