"use strict";(self.webpackChunkocs_docs=self.webpackChunkocs_docs||[]).push([[424],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),i=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=i(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||k[m]||l;return a?r.createElement(u,s(s({ref:e},c),{},{components:a})):r.createElement(u,s({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:n,s[1]=p;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9230:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={title:"\u811a\u672c\u6559\u7a0b",tags:["\u6559\u7a0b","OCS\u811a\u672c"]},s=void 0,p={unversionedId:"script",id:"script",title:"\u811a\u672c\u6559\u7a0b",description:"\u4f7f\u7528\u987b\u77e5",source:"@site/docs/script.md",sourceDirName:".",slug:"/script",permalink:"/docs/script",draft:!1,editUrl:"https://github.com/enncy/ocs-docs/tree/main/docs/script.md",tags:[{label:"\u6559\u7a0b",permalink:"/docs/tags/\u6559\u7a0b"},{label:"OCS\u811a\u672c",permalink:"/docs/tags/ocs\u811a\u672c"}],version:"current",frontMatter:{title:"\u811a\u672c\u6559\u7a0b",tags:["\u6559\u7a0b","OCS\u811a\u672c"]},sidebar:"tutorialSidebar",previous:{title:"\u5173\u4e8eOCS",permalink:"/docs/about"},next:{title:"\u8f6f\u4ef6\u6559\u7a0b",permalink:"/docs/app"}},o={},i=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:3},{value:"\u7b2c\u4e00\u6b65 \u5b89\u88c5 \u811a\u672c\u7ba1\u7406\u5668",id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-\u811a\u672c\u7ba1\u7406\u5668",level:2},{value:"\u811a\u672c\u732b \u5b89\u88c5\u56fe\u6587\u6559\u7a0b\uff1a",id:"\u811a\u672c\u732b-\u5b89\u88c5\u56fe\u6587\u6559\u7a0b",level:3},{value:"Tampermonkey \u5b89\u88c5\u56fe\u6587\u6559\u7a0b\uff1a",id:"tampermonkey-\u5b89\u88c5\u56fe\u6587\u6559\u7a0b",level:3},{value:"\u7b2c\u4e8c\u6b65 \u5b89\u88c5\u811a\u672c",id:"\u7b2c\u4e8c\u6b65-\u5b89\u88c5\u811a\u672c",level:2},{value:"\u7b2c\u4e09\u6b65 \u8fdb\u5165\u7f51\u8bfe\u9875\u9762",id:"\u7b2c\u4e09\u6b65-\u8fdb\u5165\u7f51\u8bfe\u9875\u9762",level:2},{value:"\u7b2c\u56db\u6b65 \u5f00\u542f\u81ea\u52a8\u7b54\u9898",id:"\u7b2c\u56db\u6b65-\u5f00\u542f\u81ea\u52a8\u7b54\u9898",level:2},{value:"\u6700\u540e\u4e00\u6b65 \u5b66\u4e60\u5982\u4f55\u66f4\u65b0/\u7ba1\u7406\u811a\u672c",id:"\u6700\u540e\u4e00\u6b65-\u5b66\u4e60\u5982\u4f55\u66f4\u65b0\u7ba1\u7406\u811a\u672c",level:2}],c={toc:i};function d(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u8bf7\u5173\u95ed\u5176\u4ed6\u811a\u672c\uff0c\u907f\u514d\u811a\u672c\u4e4b\u95f4\u53d1\u751f\u51b2\u7a81\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0d\u517c\u5bb9\u6d4f\u89c8\u5668\uff08\u4e0d\u8981\u4f7f\u7528\uff09\uff1a QQ \u6d4f\u89c8\u5668\u3001360 \u6d4f\u89c8\u5668 \u7b49")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u517c\u5bb9\u6d4f\u89c8\u5668\uff1a"))),(0,n.kt)("div",{style:{display:"flex",alignItems:"center",border:"1px solid #bfbfbf",borderRadius:"12px",margin:"4px 0px"}},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/50533276/166101774-c62bfc5a-89fc-42e2-9638-484847bb0dd7.png",width:"64",height:"64",style:{borderRadius:"12px",marginRight:"24px"}}),(0,n.kt)("span",null,"Edge \u5fae\u8f6f\u6d4f\u89c8\u5668 ",(0,n.kt)("a",{href:"https://www.microsoft.com/zh-cn/edge/download",target:"_blank"}," https://www.microsoft.com/zh-cn/edge/download ")," ")),(0,n.kt)("div",{style:{display:"flex",alignItems:"center",border:"1px solid #bfbfbf",borderRadius:"12px",margin:"4px 0px"}},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/50533276/166101769-cc4cf43a-df3f-479a-bd19-e5d4033961dd.png",width:"64",height:"64",style:{borderRadius:"12px",marginRight:"24px"}}),(0,n.kt)("span",null,"Chrome \u8c37\u6b4c\u6d4f\u89c8\u5668 ",(0,n.kt)("a",{href:"https://www.google.cn/chrome/index.html",target:"_blank"}," https://www.google.cn/chrome/index.html ")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u5b89\u88c5-\u811a\u672c\u7ba1\u7406\u5668"},"\u7b2c\u4e00\u6b65 \u5b89\u88c5 \u811a\u672c\u7ba1\u7406\u5668"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u7ba1\u7406\u5668\u53ea\u9700\u5b89\u88c5\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udf89 \u811a\u672c\u732b\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://blog.icodef.com/"},"\u4e00\u4e4b\u54e5")," \u5f00\u53d1\u7684\u56fd\u4ea7\u811a\u672c\u7ba1\u7406\u5668\u54e6\uff0c\u591a\u591a\u652f\u6301~")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tampermonkey\uff08\u7be1\u6539\u7334/\u6709\u4e9b\u4eba\u4e5f\u53eb\u4ed6\u6cb9\u7334\uff0c\u4f46\u6cb9\u7334\u5176\u5b9e\u662f GreaseMonkey \uff0c \u6700\u65e9\u51fa\u73b0\u7684\u811a\u672c\u7ba1\u7406\u5668\uff09")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\u811a\u672c\u732b"),"\uff1a ",(0,n.kt)("a",{href:"https://docs.scriptcat.org/",target:"_blank"}," ",(0,n.kt)("a",{parentName:"li",href:"https://docs.scriptcat.org"},"https://docs.scriptcat.org")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Tampermonkey"),"\uff1a ",(0,n.kt)("a",{href:"https://www.tampermonkey.net/",target:"_blank"}," ",(0,n.kt)("a",{parentName:"li",href:"https://www.tampermonkey.net/"},"https://www.tampermonkey.net/")))),(0,n.kt)("h3",{id:"\u811a\u672c\u732b-\u5b89\u88c5\u56fe\u6587\u6559\u7a0b"},"\u811a\u672c\u732b \u5b89\u88c5\u56fe\u6587\u6559\u7a0b\uff1a"),(0,n.kt)("div",{width:"600px"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:a(6187).Z,width:"1168",height:"606"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2",src:a(1314).Z,width:"1062",height:"511"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3",src:a(2339).Z,width:"1371",height:"548"}))),(0,n.kt)("div",{style:{margin:"12px 0px"}},"\u70b9\u51fb\u83b7\u53d6\u5373\u53ef\u5b89\u88c5\u3002\u5b89\u88c5\u540e\uff0c\u5373\u53ef\u67e5\u770b\u7b2c\u4e8c\u6b65\u3002"),(0,n.kt)("div",null,(0,n.kt)("h3",{id:"tampermonkey-\u5b89\u88c5\u56fe\u6587\u6559\u7a0b"},"Tampermonkey \u5b89\u88c5\u56fe\u6587\u6559\u7a0b\uff1a")),(0,n.kt)("div",{width:"600px"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:a(2072).Z,width:"1162",height:"1133"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2",src:a(9300).Z,width:"1385",height:"568"}))),(0,n.kt)("p",null,"\u70b9\u51fb\u83b7\u53d6\u5373\u53ef\u5b89\u88c5\u3002\u5b89\u88c5\u540e\uff0c\u5373\u53ef\u67e5\u770b\u7b2c\u4e8c\u6b65\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u5b89\u88c5\u811a\u672c"},"\u7b2c\u4e8c\u6b65 \u5b89\u88c5\u811a\u672c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u70b9\u51fb\u4e0b\u9762\u94fe\u63a5\uff0c\u518d\u70b9\u5b89\u88c5\u6309\u94ae\uff0c\u9875\u9762\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u8fd9\u662f\u6b63\u5e38\u73b0\u8c61")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b89\u88c5\u6765\u6e90"),(0,n.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u732b\u811a\u672c\u7ad9"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://scriptcat.org/script-show-page/367"},"https://scriptcat.org/script-show-page/367")),(0,n.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u732b\u65d7\u4e0b\u7684\u811a\u672c\u6258\u7ba1\u7f51\u7ad9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"greasyfork\uff08\u6cb9\u53c9\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://greasyfork.org/zh-CN/scripts/457151"},"https://greasyfork.org/zh-CN/scripts/457151")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6cb9\u53c9\u662f\u5f53\u4e0b\u6bd4\u8f83\u70ed\u95e8\u7684\u7684\u811a\u672c\u6258\u7ba1\u7f51\u7ad9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"github"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ocsjs/ocsjs/releases/latest/download/ocs.user.js"},"https://github.com/ocsjs/ocsjs/releases/latest/download/ocs.user.js")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7531 Github Action \u81ea\u52a8\u6253\u5305\u751f\u6210\uff08\u6700\u65b0\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b98\u65b9\u5b89\u88c5\u94fe\u63a5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://cdn.ocsjs.com/ocs.user.js"},"https://cdn.ocsjs.com/ocs.user.js")),(0,n.kt)("td",{parentName:"tr",align:null},"OCS \u5b98\u65b9\u811a\u672c\u94fe\u63a5")))),(0,n.kt)("p",null,"\u5176\u4ed6\u7248\u672c\u5b89\u88c5\u8bf7\u770b\uff1a"),(0,n.kt)("p",null,"\u811a\u672c\u732b\u811a\u672c\u7ad9-\u5386\u53f2\u7248\u672c\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://scriptcat.org/script-show-page/367/version"},"https://scriptcat.org/script-show-page/367/version")),(0,n.kt)("p",null,"greasyfork-\u5386\u53f2\u7248\u672c\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://greasyfork.org/zh-CN/scripts/457151/versions"},"https://greasyfork.org/zh-CN/scripts/457151/versions")),(0,n.kt)("p",null,"github-\u5386\u53f2\u7248\u672c\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ocsjs/ocsjs/releases"},"https://github.com/ocsjs/ocsjs/releases")),(0,n.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u8fdb\u5165\u7f51\u8bfe\u9875\u9762"},"\u7b2c\u4e09\u6b65 \u8fdb\u5165\u7f51\u8bfe\u9875\u9762"),(0,n.kt)("p",null,"\u6253\u5f00\u7f51\u8bfe\u5e73\u53f0\uff0c\u7b49\u5f85\u9875\u9762\u4e0a\u51fa\u73b0\u811a\u672c\u7a97\u53e3\uff0c\u6839\u636e\u9762\u677f\u63d0\u793a\u64cd\u4f5c\uff0c\u8fdb\u5165\u89c6\u9891\u5b66\u4e60\uff0c\u4f5c\u4e1a\u8003\u8bd5\u9875\u9762\u5373\u53ef\u81ea\u52a8\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"show_case_cx",src:a(6615).Z,width:"1585",height:"591"}),"\n",(0,n.kt)("img",{alt:"show_case_zhs",src:a(8495).Z,width:"1090",height:"509"})),(0,n.kt)("h2",{id:"\u7b2c\u56db\u6b65-\u5f00\u542f\u81ea\u52a8\u7b54\u9898"},"\u7b2c\u56db\u6b65 \u5f00\u542f\u81ea\u52a8\u7b54\u9898"),(0,n.kt)("p",null,"\u811a\u672c\u9ed8\u8ba4\u5e26\u6709\u89c6\u9891\uff0cppt\uff0c\u7b49\u5b66\u4e60\u529f\u80fd\uff0c\u5982\u679c\u60f3\u5f00\u542f\u81ea\u52a8\u7b54\u9898\u529f\u80fd\uff0c\u8bf7\u67e5\u770b ",(0,n.kt)("a",{parentName:"p",href:"/docs/work"},"\u81ea\u52a8\u7b54\u9898\u6559\u7a0b")),(0,n.kt)("h2",{id:"\u6700\u540e\u4e00\u6b65-\u5b66\u4e60\u5982\u4f55\u66f4\u65b0\u7ba1\u7406\u811a\u672c"},"\u6700\u540e\u4e00\u6b65 \u5b66\u4e60\u5982\u4f55\u66f4\u65b0/\u7ba1\u7406\u811a\u672c"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u66f4\u65b0\u811a\u672c\u6559\u7a0b")),(0,n.kt)("p",null,"\u94fe\u63a5\uff1a ",(0,n.kt)("a",{href:"https://docs.ocsjs.com/docs/update",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://docs.ocsjs.com/docs/update"},"https://docs.ocsjs.com/docs/update"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5173\u95ed\u811a\u672c\u6559\u7a0b")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u6bcf\u4e2a\u811a\u672c\u7ba1\u7406\u5668\u7684\u9875\u9762\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5173\u95ed\u903b\u8f91\u5927\u81f4\u76f8\u540c\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00\u53f3\u4e0a\u89d2\u7684\u811a\u672c\u7ba1\u7406\u5668\uff0c\u70b9\u51fb\u811a\u672c\u7ba1\u7406\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u811a\u672c\u7ba1\u7406",src:a(3942).Z,width:"311",height:"302"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u7136\u540e\u8fdb\u5165\u811a\u672c\u5217\u8868\uff0c\u627e\u5230\u5de6\u8fb9\u5f00\u5173\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u53ef\u5173\u95ed")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u811a\u672c\u5173\u95ed",src:a(2808).Z,width:"2848",height:"96"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5220\u9664\u811a\u672c\u6559\u7a0b")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u6bcf\u4e2a\u811a\u672c\u7ba1\u7406\u5668\u7684\u9875\u9762\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5220\u9664\u903b\u8f91\u5927\u81f4\u76f8\u540c\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00\u53f3\u4e0a\u89d2\u7684\u811a\u672c\u7ba1\u7406\u5668\uff0c\u70b9\u51fb\u811a\u672c\u7ba1\u7406\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u811a\u672c\u7ba1\u7406",src:a(3942).Z,width:"311",height:"302"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u7136\u540e\u8fdb\u5165\u811a\u672c\u5217\u8868\uff0c\u627e\u5230\u53f3\u8fb9\u5220\u9664\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u53ef\u5220\u9664")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u811a\u672c\u5220\u9664",src:a(7686).Z,width:"2518",height:"49"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u7684\u9875\u9762\u6ca1\u6709\u51fa\u73b0\u60ac\u6d6e\u7a97\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff0c\u6216\u8005\u66f4\u6362\u6d4f\u89c8\u5668\uff0c\u8fd8\u4e0d\u884c\u7684\u8bdd\u52a0\u7fa4\u5e26\u7740\u622a\u56fe\u8fdb\u884c\u53cd\u9988\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u662f\u8d85\u661f\u6ca1\u51fa\u73b0\uff0c\u4f46\u662f\u667a\u6167\u6811\u7b49\u5176\u4ed6\u5e73\u53f0\u51fa\u73b0\u4e86\u60ac\u6d6e\u7a97\uff0c\u53ef\u4ee5\u67e5\u770b\u8fd9\u91cc\u7684\u8d85\u661f\u95ee\u9898\uff1a ",(0,n.kt)("a",{parentName:"p",href:"/docs/other/FQA#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%85%E6%98%9F%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%84%9A%E6%9C%AC%E4%BD%86%E5%85%B6%E4%BB%96%E7%BD%91%E8%AF%BE%E6%98%BE%E7%A4%BA"},"#\u4e3a\u4ec0\u4e48\u8d85\u661f\u4e0d\u663e\u793a\u811a\u672c\u4f46\u5176\u4ed6\u7f51\u8bfe\u663e\u793a")))))}d.isMDXComponent=!0},2808:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/script_close-015397c5c8e1f9deb1e913df4160fcd4.png"},7686:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/script_delete-a80d848b72631847fe5fad880dad1999.png"},3942:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/script_manage-ebcd7666f9b1123b6f7c8d99999d26e4.png"},6187:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/scriptcat_download_1-0e65d24f53350a8d22ecab25e62ce343.png"},1314:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/scriptcat_download_2-b34222a9e6cb7255d0bb5ee2c1982ad8.png"},2339:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/scriptcat_download_3-20d842c38ae7ddccfba9ecd013a07888.png"},6615:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/show_case_cx-f8c09ea089a3e94429d7cdcdc8b4ac16.png"},8495:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/show_case_zhs-c48e2541807084a2cbf4e815b0fe5917.png"},2072:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tampermonkey_download_1-7e8ba140f6e9ac951f7175f7d6fee1db.png"},9300:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tampermonkey_download_2-438fbc9cef79e932b55f22837f722192.png"}}]);