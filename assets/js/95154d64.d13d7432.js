"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3386],{99278:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(47145),a=n(24736),i=(n(59301),n(99278)),o=["components"],c={title:"\u4e8b\u4ef6\u5904\u7406",order:4},p="\u4e8b\u4ef6\u5904\u7406",l={unversionedId:"guide/concept/event",id:"guide/concept/event",title:"\u4e8b\u4ef6\u5904\u7406",description:"\u4e8b\u4ef6\u5904\u7406\u5728\u7cfb\u7edf\u5f00\u53d1\u4e2d\u5c5e\u4e8e\u6700\u5e38\u89c1\u7684\u903b\u8f91\u5b9e\u73b0\u4e4b\u4e00\uff0c\u5b9c\u642d\u63d0\u4f9b\u901a\u7528\u7684\u7528\u6237\u52a8\u4f5c\u7ed1\u5b9a\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u52a8\u4f5c\u9762\u677f\u7528\u4e8e\u4e66\u5199 JS \u5904\u7406\u903b\u8f91\uff0c\u901a\u5e38\u8981\u5b9e\u73b0\u4e8b\u4ef6\u5904\u7406\u529f\u80fd\u9700\u8981\u4ee5\u4e0b\u4e24\u6b65\uff1a",source:"@site/docs/guide/concept/event.md",sourceDirName:"guide/concept",slug:"/guide/concept/event",permalink:"/developer-site/docs/guide/concept/event",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/guide/concept/event.md",tags:[],version:"current",lastUpdatedBy:"jiushen",lastUpdatedAt:1645298242,formattedLastUpdatedAt:"2022/2/20",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406",order:4},sidebar:"guide",previous:{title:"\u9875\u9762\u751f\u547d\u5468\u671f",permalink:"/developer-site/docs/guide/concept/lifecycle"},next:{title:"\u6761\u4ef6\u6e32\u67d3",permalink:"/developer-site/docs/guide/concept/condition"}},u={},s=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e8b\u4ef6\u5904\u7406"},"\u4e8b\u4ef6\u5904\u7406"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u5728\u7cfb\u7edf\u5f00\u53d1\u4e2d\u5c5e\u4e8e\u6700\u5e38\u89c1\u7684\u903b\u8f91\u5b9e\u73b0\u4e4b\u4e00\uff0c\u5b9c\u642d\u63d0\u4f9b\u901a\u7528\u7684\u7528\u6237\u52a8\u4f5c\u7ed1\u5b9a\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u52a8\u4f5c\u9762\u677f\u7528\u4e8e\u4e66\u5199 JS \u5904\u7406\u903b\u8f91\uff0c\u901a\u5e38\u8981\u5b9e\u73b0\u4e8b\u4ef6\u5904\u7406\u529f\u80fd\u9700\u8981\u4ee5\u4e0b\u4e24\u6b65\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u7ec4\u4ef6\u589e\u52a0\u52a8\u4f5c\u7ed1\u5b9a\u914d\u7f6e\uff08\u51e0\u4e4e\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u63d0\u4f9b\u76f8\u5e94\u7684\u52a8\u4f5c\u7ed1\u5b9a\u9009\u9879\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u52a8\u4f5c\u9762\u677f\u5b9e\u73b0\u52a8\u4f5c\u5904\u7406\u903b\u8f91\uff1b")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01p1gGz020pnC3EK1nn_!!6000000006899-2-tps-3578-2016.png_.webp",alt:null})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u8fdb\u884c\u52a8\u4f5c\u7ed1\u5b9a\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u52a8\u4f5c\u7684\u53c2\u6570\u8bbe\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u8bbe\u7f6e\u7684\u53c2\u6570\u5728\u5904\u7406\u51fd\u6570\u4e2d\u53ef\u4ee5\u901a\u8fc7 this.params.xxx \u8fdb\u884c\u8bfb\u53d6\uff0c\u5176\u4e2d xxx \u4e3a\u7528\u6237\u8bbe\u7f6e\u7684\u53c2\u6570\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01O3TBrZ1rJt3pjTsGN_!!6000000005611-2-tps-3582-2018.png_.webp",alt:null}),"\n\u53c2\u6570\u83b7\u53d6\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export function onClick(){\n  const { name, age } = this.params\n  console.log(name, age);\n}\n")))),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528\u4e8b\u4ef6\u5904\u7406\u7684\u4f8b\u5b50\uff1a\n\u76d1\u542c\u4e00\u4e2a\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\u5e76\u5f39\u6846\u5c55\u793a\u76f8\u5173\u4fe1\u606f\uff0c\u8981\u5b9e\u73b0\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u529f\u80fd\uff0c\u7528\u6237\u9700\u8981\u8fdb\u884c\u4e24\u90e8\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u7ec4\u4ef6\u7ed1\u5b9a\u7528\u6237\u64cd\u4f5c\u4e8b\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u6211\u4eec\u7ed9\u6309\u94ae\u7ec4\u4ef6\u7ed1\u5b9a\u4e00\u4e2a onClick \u4e8b\u4ef6\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u52a8\u4f5c\u9762\u677f\u4e2d\u5b9e\u73b0\u76f8\u5173\u7684\u4e8b\u4ef6\u5904\u7406\u903b\u8f91\uff0c\u5f53\u7528\u6237\u70b9\u51fb\u6309\u94ae\u662f\uff0c\u6211\u4eec\u4f1a\u5f39\u4e00\u4e2a\u6846\u663e\u793a\u95ee\u5019\u8bed (state.name \u662f\u6211\u4eec\u8bbe\u7f6e\u7684\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u521d\u59cb\u503c\u4e3a\uff1a\u201c\u5c0f\u660e\u201d)\uff1b")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01tpgkNk1Uh1uZ9HQqU_!!6000000002548-2-tps-3582-2020.png_.webp",alt:null})),(0,i.kt)("p",null,"\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u9884\u89c8\u6309\u94ae\uff0c\u4fbf\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u9884\u89c8\u6548\u679c\uff0c\u5f53\u7528\u6237\u70b9\u51fb Hello \u6309\u94ae\uff0c\u7a0b\u5e8f\u5f39\u6846\u663e\u793a\u201cHello \u5c0f\u660e\u201d\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01OtrmJ31Y0fkLnVjjr_!!6000000002997-2-tps-3582-2164.png_.webp",alt:null})))}m.isMDXComponent=!0}}]);