"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[6159],{99278:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(59301);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(n),k=l,g=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return n?a.createElement(g,r(r({ref:e},c),{},{components:n})):a.createElement(g,r({ref:e},c))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62442:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var a=n(47145),l=n(24736),i=(n(59301),n(99278)),r=["components"],o={title:"\u4e0e\u667a\u80fd\u586b\u8868\u8fdb\u884c\u6570\u636e\u96c6\u6210",order:20},p=void 0,m={unversionedId:"examples/connector/intelligentformFilling",id:"examples/connector/intelligentformFilling",title:"\u4e0e\u667a\u80fd\u586b\u8868\u8fdb\u884c\u6570\u636e\u96c6\u6210",description:"- \u5f53\u524d\u4ec5\u652f\u6301\u83b7\u53d6\u7528\u6237\u521b\u5efa\u7684\u586b\u8868\u6a21\u677f\u3002",source:"@site/docs/examples/connector/intelligentformFilling.mdx",sourceDirName:"examples/connector",slug:"/examples/connector/intelligentformFilling",permalink:"/developer-site/docs/examples/connector/intelligentformFilling",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/connector/intelligentformFilling.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u4e0e\u667a\u80fd\u586b\u8868\u8fdb\u884c\u6570\u636e\u96c6\u6210",order:20},sidebar:"examples",previous:{title:"\u96c6\u6210\u667a\u80fd\u4eba\u4e8b",permalink:"/developer-site/docs/examples/connector/intelligentPersonnel"},next:{title:"\u5220\u9664\u4e1a\u52a1\u89c4\u5219\u63d2\u5165\u76ee\u6807\u8868\u7684\u6570\u636e",permalink:"/developer-site/docs/examples/connector/DeleteTheInsertedData"}},c={},s=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u300c\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u300d\u8868\u5355",id:"\u6b65\u9aa4-1\u521b\u5efa\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u8868\u5355",level:3},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d\u8868\u5355",id:"\u6b65\u9aa4-2\u521b\u5efa\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u8868\u5355",level:3},{value:"\u6b65\u9aa4 3\uff1a\u65b0\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668",id:"\u6b65\u9aa4-3\u65b0\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668",level:3},{value:"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d",id:"\u6b65\u9aa4-4\u914d\u7f6e\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868",level:3},{value:"\u6b65\u9aa4 5\uff1a\u63d0\u4ea4\u8868\u5355\u6570\u636e",id:"\u6b65\u9aa4-5\u63d0\u4ea4\u8868\u5355\u6570\u636e",level:3},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2}],d={toc:s};function k(t){var e=t.components,n=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4ec5\u652f\u6301\u83b7\u53d6\u7528\u6237\u521b\u5efa\u7684\u586b\u8868\u6a21\u677f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u88ab\u67e5\u8be2\u7684\u5458\u5de5\u8981\u5728\u667a\u80fd\u586b\u8868\u4e2d")))),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u300c\u667a\u80fd\u586b\u8868\u300d\u4f5c\u4e3a\u9489\u9489\u63d0\u4f9b\u7684\u4e00\u6b3e\u57fa\u7840\u5e94\u7528\uff0c\u9002\u7528\u4e8e\u95ee\u5377\u8c03\u67e5\u3001\u62a5\u540d\u7edf\u8ba1\u7b49\u573a\u666f\uff0c\u5e76\u652f\u6301\u6570\u636e\u7684\u7edf\u8ba1\u4e0e\u4e0b\u8f7d\u3002\u672c\u6848\u4f8b\u53ef\u5b9e\u73b0\u5728\u5b9c\u642d\u4e0a\u63d0\u4ea4\u8868\u5355\u89e6\u53d1\u8fde\u63a5\u5668\u67e5\u8be2\u67d0\u5458\u5de5\u5728\u667a\u80fd\u586b\u8868\u4e2d\u521b\u5efa\u7684\u6a21\u677f\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,i.kt)("h3",{id:"\u6b65\u9aa4-1\u521b\u5efa\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u8868\u5355"},"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u300c\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u300d\u8868\u5355"),(0,i.kt)("p",null,"\u7528\u4e8e\u89e6\u53d1\u8fde\u63a5\u5668\u8fdb\u884c\u67e5\u8be2\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u300d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u6210\u5458\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u6a21\u677f\u521b\u5efa\u4eba\u300d\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u5fc5\u586b\u9879\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01GaR7VN1ewjesdfexn_!!6000000003936-2-tps-1834-871.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e0b\u62c9\u5355\u9009\u7ec4\u4ef6\uff0c\u5206\u522b\u6dfb\u52a0\u663e\u793a\u503c\u4e3a\u300c\u901a\u7528\u586b\u8868\u300d\uff0c\u9009\u9879\u503c\u4e3a\u300c0\u300d\u4ee5\u53ca\u663e\u793a\u503c\u4e3a\u300c\u6559\u80b2\u586b\u8868\u300d\u9009\u9879\u503c\u4e3a\u300c1\u300d\u7684\u4e24\u4e2a\u81ea\u5b9a\u4e49\u9009\u9879\u3002\u8bbe\u7f6e\u4e3a\u5fc5\u586b\u9879\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01wAFJiU27aPCq2ZWjA_!!6000000007813-2-tps-1908-893.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\uff0c\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"\u6b65\u9aa4-2\u521b\u5efa\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u8868\u5355"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d\u8868\u5355"),(0,i.kt)("p",null,"\u7528\u4e8e\u63a5\u6536\u8fde\u63a5\u5668\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u6570\u636e\u5904\u7406\u540e\u8fdb\u884c\u5c55\u793a\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u591a\u884c\u6587\u672c\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u8fd4\u56de\u7ed3\u679c\u300d\uff0c\u72b6\u6001\u8bbe\u7f6e\u4e3a\u300c\u9690\u85cf\u300d\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01xa3IcI1E8BwK7Mwax_!!6000000000306-2-tps-1830-872.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5b50\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u300d\uff0c\u5e76\u5728\u5b50\u8868\u5355\u7ec4\u4ef6\u5185\u6dfb\u52a0 10 \u4e2a\u5355\u884c\u6587\u672c\u7ec4\u4ef6\uff0c\u5206\u522b\u547d\u540d\u4e3a\u300c\u586b\u8868 code\u300d\u3001\u300c\u586b\u8868\u540d\u79f0\u300d\u3001\u300c\u586b\u8868\u63d0\u793a\u300d\u3001\u300c\u8868\u5355\u7c7b\u578b\u300d\u3001\u300c\u586b\u8868\u5468\u671f\u300d\u3001\u300c\u586b\u8868\u622a\u6b62\u65e5\u671f\u300d\u3001\u300c\u521b\u5efa\u65f6\u95f4\u300d\u3001\u300c\u586b\u8868\u7c7b\u578b\u300d\u3001\u300c\u586b\u8868\u662f\u5426\u7ec8\u6b62\u300d\u4ee5\u53ca\u300c\u586b\u8868\u521b\u5efa\u4eba\u300d\u3002\u6700\u540e\u5c06\u6bcf\u4e2a\u6587\u672c\u7ec4\u4ef6\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a\u300c\u53ea\u8bfb\u300d\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01ZaFK3B24QNgp1RnBo_!!6000000007385-2-tps-1836-871.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\uff0c\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"\u6b65\u9aa4-3\u65b0\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668"},"\u6b65\u9aa4 3\uff1a\u65b0\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fde\u63a5\u5668\u6574\u4f53\u529f\u80fd\u4ecb\u7ecd\u8bf7\u53c2\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/concept/connector"},"\u96c6\u6210&\u81ea\u52a8\u5316-\u8fde\u63a5\u5668")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5e94\u7528\u540e\uff0c\u70b9\u51fb\u4e0a\u65b9\u300c\u96c6\u6210&\u81ea\u52a8\u5316\u300d\uff0c\u70b9\u51fb\u300c\u65b0\u5efa\u96c6\u6210&\u81ea\u52a8\u5316\u300d\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN0103DOZL1lw0KkgEhsy_!!6000000004882-2-tps-1908-878.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5c06\u8fde\u63a5\u5668\u547d\u540d\u4e3a\u300c\u83b7\u53d6\u5458\u5de5\u521b\u5efa\u7684\u667a\u80fd\u586b\u8868\u6a21\u677f\u4fe1\u606f\u300d\uff0c\u9009\u62e9\u300c\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u300d\u5e76\u9009\u62e9\u300c\u53ea\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u300d\u8868\u5355\uff0c\u70b9\u51fb\u300c\u786e\u5b9a\u300d\u6309\u94ae\u3002")),(0,i.kt)("p",null,"\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN016tW8rr1sYpbdFeKaK_!!6000000005779-2-tps-1914-885.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\uff1a\u89e6\u53d1\u4e8b\u4ef6\u9009\u62e9\u300c\u521b\u5efa\u6210\u529f\u300d\uff0c\u6570\u636e\u8fc7\u6ee4\u9009\u62e9\u300c\u5168\u90e8\u6570\u636e\u300d\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u3002")),(0,i.kt)("p",null,"\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01kdy4121gIY8kNWxTV_!!6000000004119-2-tps-1920-951.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8fde\u63a5\u5668\u5e94\u7528\uff1a\u9009\u62e9\u300c\u667a\u80fd\u586b\u8868\u300d\u5e94\u7528\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01KyodNh1wCcrmL740S_!!6000000006272-2-tps-1920-952.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff1a\u9009\u62e9\u300c\u83b7\u53d6\u7528\u6237\u586b\u8868\u6a21\u677f\u300d\uff0c\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01HRpMvO2AC50ueTrpd_!!6000000008166-2-tps-1920-951.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01eX8NYg1k9AURfjnpX_!!6000000004640-2-tps-1920-949.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u65b0\u589e\u6570\u636e\u8282\u70b9\uff1a\u5728\u8fde\u63a5\u5668\u8282\u70b9\u4e0b\u65b9\u6dfb\u52a0\u300c\u65b0\u589e\u6570\u636e\u300d\u8282\u70b9\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01CivfQr26Q2czQ1Jo2_!!6000000007655-2-tps-1920-951.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u65b0\u589e\u6570\u636e\u8282\u70b9\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01b94TU326A0lIIQjf3_!!6000000007620-2-tps-1920-950.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u540e\uff0c\u70b9\u51fb\u300c\u53d1\u5e03\u300d\u6309\u94ae\uff0c\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"\u6b65\u9aa4-4\u914d\u7f6e\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868"},"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u5df2\u5b8c\u6210\u8fde\u63a5\u5668\u7684\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u63a5\u6536\u5230\u8fde\u63a5\u5668\u8fd4\u56de\u7684\u6570\u636e\u3002\u63a5\u4e0b\u6765\uff0c\u5bf9\u8fd4\u56de\u6570\u636e\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u5e76\u5c06\u5904\u7406\u597d\u7684\u6570\u636e\u5206\u522b\u5c55\u793a\u5230\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u300d\u5b50\u8868\u5355\u7ec4\u4ef6\u5185\u7684\u5404\u4e2a\u7ec4\u4ef6\u5185\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a"),"\n\u8868\u5355\u7f16\u8f91\u9875\u9762\uff0c\u5c06\u4e0b\u8ff0\u4ee3\u7801\u590d\u5236\u5230\u60a8\u9875\u9762\u5de6\u4fa7\u7684\u300cJS \u52a8\u4f5c\u9762\u677f\u300d\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"didMount"),"\u51fd\u6570\u5185\u3002\n\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01TFghjK1nNJZQ6iu0o_!!6000000005077-2-tps-1911-893.png_.webp",alt:null}),"\n\u200b"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0b\u8ff0\u5f15\u5165\u7684\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u5728 JS \u9762\u677f\u5185\uff0c\u6ce8\u610f\uff1a\u9700\u8981\u66ff\u6362\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u83b7\u53d6\u8fde\u63a5\u5668\u4f20\u5165\u591a\u884c\u6587\u672c\u4e2d\u7684\u6570\u636e\n//\u5c06textareaField_kwcv17cj \u4e3a\u9875\u9762\u4e2d\u540d\u4e3a\"\u8fd4\u56de\u7ed3\u679c\"\u591a\u884c\u6587\u672c\u7ec4\u4ef6\u7684\u552f\u4e00\u7f16\u7801\u3002\nlet obj = this.$('textareaField_kwcv17cj').getValue();\n//\u56e0\u4e3aobj\u53d8\u91cf\u7684\u503c\u4e3a\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0cJSON.parse()\u65b9\u6cd5\u7528\u4e8e\u5c06obj\u53d8\u91cf\u8f6c\u6362\u4e3a\u5bf9\u8c61\u5f62\u5f0f\u3002\nlet res = JSON.parse(obj);\n//\u521b\u5efa\u4e00\u4e2a\u7a7a\u6570\u7ec4\"arr\"\uff0c\u7528\u4e8e\u5b58\u50a8\u5904\u7406\u5b8c\u6210\u7684\u6570\u636e\u3002\nlet arr = [];\n//\u5bf9res\u53d8\u91cf\u8fdb\u884c\u904d\u5386\nconst data = res.map((item) => {\n  let object = {};\n  //\u9700\u8981\u5c0612~21\u884c\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\"object.\"\u4e0e\"=\"\u4e2d\u95f4\u4ee3\u7801\u5206\u522b\u66ff\u6362\u4e3a\u5b50\u8868\u5355\u5185\u5404\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u3002\n  object.textField_kwcvykby = item.name;\n  object.textField_kwcvykbz = item.memo;\n  object.textField_kwcvykbx = item.form_code;\n  object.textField_kwcvykc0 = item.setting.form_type === 0 ? '\u4e00\u6b21\u6027\u586b\u8868' : '\u5468\u671f\u6027\u586b\u8868';\n  object.textField_kwcvykc3 = item.setting.form_type === 0 ? '\u975e\u5468\u671f\u6027\u586b\u8868' : item.setting.loop_days;\n  object.textField_kwcvykc5 = item.setting.end_time ? item.setting.end_time : '\u672a\u8bbe\u7f6e\u622a\u6b62\u65e5\u671f';\n  object.textField_kwcvykcb = item.setting.create_time;\n  object.textField_kwcvykcc = item.setting.biz_type === 0 ? '\u901a\u7528\u586b\u8868' : '\u6559\u80b2\u7248\u586b\u8868';\n  object.textField_kwcvykcd = item.setting.stop === false ? '\u672a\u7ec8\u6b62' : '\u5df2\u7ec8\u6b62';\n  object.textField_kwcvykce = item.creator;\n  //\u5c06\u5904\u7406\u597d\u7684\u5bf9\u8c61\u6dfb\u52a0\u5230arr\u6570\u7ec4\u4e2d\uff0c\u4e00\u4e2aobject\u5bf9\u8c61\u5c31\u662f\u4e00\u6761\u5b50\u8868\u5355\u6570\u636e\u3002\n  arr.push(object);\n});\n//\u5c06arr\u6570\u7ec4\u6570\u636e\u8d4b\u503c\u7ed9\u5b50\u8868\u5355\u7ec4\u4ef6\n//\u9700\u8981\u5c06tableField_kwd6plxz\u66ff\u6362\u4e3a\u60a8\u8868\u5355\u4e2d\u5b50\u8868\u5355\u7684\u552f\u4e00\u6807\u8bc6\u3002\nthis.$('tableField_kwd6plxz').setValue(arr);\n")),(0,i.kt)("h3",{id:"\u6b65\u9aa4-5\u63d0\u4ea4\u8868\u5355\u6570\u636e"},"\u6b65\u9aa4 5\uff1a\u63d0\u4ea4\u8868\u5355\u6570\u636e"),(0,i.kt)("p",null,"\u586b\u5199\u5e76\u63d0\u4ea4\u300c\u667a\u80fd\u586b\u8868\u6a21\u677f\u67e5\u8be2\u300d\u8868\u5355\u6570\u636e\uff0c\u89e6\u53d1\u8fde\u63a5\u5668\u3002\u5e76\u524d\u5f80\u300c\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868\u300d\u8868\u5355\u7684\u6570\u636e\u7ba1\u7406\u9875\u9762\u67e5\u770b\u8fde\u63a5\u5668\u8fd4\u56de\u7684\u6570\u636e\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01aybbac22ev20b03hf_!!6000000007146-2-tps-1920-951.png_.webp",alt:null})),(0,i.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01dfHegi1LM7IBn5VkB_!!6000000001284-2-tps-1920-951.png_.webp",alt:null})))}k.isMDXComponent=!0}}]);