"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3334],{99278:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59301);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(47145),i=n(24736),a=(n(59301),n(99278)),o=["components"],l={title:"\u5982\u4f55\u5728\u8868\u5355\u63d0\u4ea4\u65f6\u53d1\u8d77\u6d41\u7a0b",order:6},c=void 0,p={unversionedId:"examples/connector/initiateProcess",id:"examples/connector/initiateProcess",title:"\u5982\u4f55\u5728\u8868\u5355\u63d0\u4ea4\u65f6\u53d1\u8d77\u6d41\u7a0b",description:"\u573a\u666f",source:"@site/docs/examples/connector/initiateProcess.mdx",sourceDirName:"examples/connector",slug:"/examples/connector/initiateProcess",permalink:"/developer-site/docs/examples/connector/initiateProcess",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/connector/initiateProcess.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u5982\u4f55\u5728\u8868\u5355\u63d0\u4ea4\u65f6\u53d1\u8d77\u6d41\u7a0b",order:6},sidebar:"examples",previous:{title:"\u83b7\u53d6\u4f01\u4e1a\u7fa4\u804a\u7edf\u8ba1\u6570\u636e",permalink:"/developer-site/docs/examples/connector/enterpriseGroup"},next:{title:"\u65b0\u5efa\u9489\u76d8\u7a7a\u95f4",permalink:"/developer-site/docs/examples/connector/createDingSpace"}},s={},m=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa41\uff1a \u521b\u5efa\u8868\u5355",id:"\u6b65\u9aa41-\u521b\u5efa\u8868\u5355",level:3},{value:"\u6b65\u9aa42: \u96c6\u6210&amp;\u81ea\u52a8\u5316\u521b\u5efa",id:"\u6b65\u9aa42-\u96c6\u6210\u81ea\u52a8\u5316\u521b\u5efa",level:3},{value:"\u6b65\u9aa43: \u914d\u7f6e\u53d1\u8d77\u6d41\u7a0b",id:"\u6b65\u9aa43-\u914d\u7f6e\u53d1\u8d77\u6d41\u7a0b",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"\u65b0\u5458\u5de5\u5728\u5165\u804c\u65f6\uff0c\u90fd\u9700\u8981\u7533\u8bf7\u5e76\u9886\u53d6\u4e2a\u4eba\u8d44\u4ea7\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u5728\u586b\u5199\u65b0\u5458\u5de5\u4fe1\u606f\u540e\uff0c\u81ea\u52a8\u53d1\u8d77\u4e2a\u4eba\u8d44\u4ea7\u7684\u7533\u9886\u5462\uff1f\n\u8fde\u63a5\u5668\u53ef\u4ee5\u5728\u8868\u5355\u63d0\u4ea4\u65f6\u89e6\u53d1\uff0c\u5e76\u81ea\u52a8\u53d1\u8d77\u65b0\u6d41\u7a0b\uff0c\u90a3\u4e48\u8ba9\u6211\u4eec\u6765\u4e00\u8d77\u770b\u4e00\u4e0b\u5982\u4f55\u5b9e\u73b0\u5427\uff01"),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01j6MAmO1UK879e7ii6_!!6000000002498-1-tps-1381-743.gif",alt:"\u63d0\u4ea4\u8868\u5355\u53d1\u8d77\u65b0\u6d41\u7a0b4\u5b9e\u73b0\u6548\u679c.gif"})),(0,a.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,a.kt)("h3",{id:"\u6b65\u9aa41-\u521b\u5efa\u8868\u5355"},"\u6b65\u9aa41\uff1a \u521b\u5efa\u8868\u5355"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u4ee5\u4e0b\u4e24\u4e2a\u8868\u5355\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5165\u804c\u586b\u8868\uff1a\u8bb0\u5f55\u65b0\u5458\u5de5\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5165\u804c\u8bbe\u5907\u7533\u8bf7\u8868\uff1a\u586b\u5199\u5458\u5de5\u4fe1\u606f\u53ca\u7533\u8bf7\u8d44\u4ea7\u5185\u5bb9\uff0c\u8bbe\u5907\u6e05\u5355\u4e3a\u590d\u9009\u7ec4\u4ef6\uff0c\u53ef\u591a\u9009\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01z2Bj7I1mPm50Gjohn_!!6000000004947-2-tps-2206-1276.png_.webp",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01GM4UCK1gKNirfcK3J_!!6000000004123-2-tps-2232-1288.png_.webp",alt:null})),(0,a.kt)("h3",{id:"\u6b65\u9aa42-\u96c6\u6210\u81ea\u52a8\u5316\u521b\u5efa"},"\u6b65\u9aa42: \u96c6\u6210&\u81ea\u52a8\u5316\u521b\u5efa"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u9700\u8981\u5728\u65b0\u5458\u5de5\u63d0\u4ea4\u5165\u804c\u586b\u62a5\u8868\u540e\u81ea\u52a8\u53d1\u8d77\u8d44\u4ea7\u7533\u8bf7\u6d41\u7a0b\uff0c\u56e0\u6b64\u5728\u9700\u8981\u9009\u62e9\u8fde\u63a5\u5668\u89e6\u53d1\u7c7b\u578b\u4e3a\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u3002\n\u8fde\u63a5\u5668\u529f\u80fd\u4ecb\u7ecd\u53ef\u53c2\u8003\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://img.alicdn.com/imgextra/i3/O1CN01xHp8ei1NWljdNklnr_!!6000000001578-1-tps-1894-863.gif"},"\u96c6\u6210&\u81ea\u52a8\u5316-\u8fde\u63a5\u5668")),(0,a.kt)("h3",{id:"\u6b65\u9aa43-\u914d\u7f6e\u53d1\u8d77\u6d41\u7a0b"},"\u6b65\u9aa43: \u914d\u7f6e\u53d1\u8d77\u6d41\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u89e6\u53d1\u7c7b\u578b\n\u8fdb\u5165\u8fde\u63a5\u5668\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u9009\u62e9\u4e8b\u4ef6\u89e6\u53d1\u7c7b\u578b\u4e3a\u300c\u521b\u5efa\u6210\u529f\u300d\u3002\n",(0,a.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN018Yiack1RKdhwWMdPn_!!6000000002093-2-tps-1940-872.png_.webp",alt:null})),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4eba\u5de5\u8282\u70b9-\u53d1\u8d77\u6d41\u7a0b"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u6dfb\u52a0\u4eba\u5de5\u8282\u70b9-\u53d1\u8d77\u6d41\u7a0b\n",(0,a.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01wusYq71KFsHKnNWfr_!!6000000001135-1-tps-1381-743.gif",alt:"\u63d0\u4ea4\u8868\u5355\u53d1\u8d77\u65b0\u6d41\u7a0b2.gif"})),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u53d1\u8d77\u65b0\u6d41\u7a0b\u5185\u5bb9\n\u70b9\u51fb\u53d1\u8d77\u5ba1\u6279\u8282\u70b9 >> \u9009\u62e9\u9700\u8981\u53d1\u8d77\u7684\u6d41\u7a0b >> \u4f9d\u6b21\u914d\u7f6e\u6d41\u7a0b\u5b57\u6bb5\u503c\u53ca\u53d1\u8d77\u4eba >> \u4fdd\u5b58\u5e76\u53d1\u5e03\n",(0,a.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN0138okrq1yPZIAwNzy4_!!6000000006571-1-tps-1381-743.gif",alt:"\u63d0\u4ea4\u8868\u5355\u53d1\u8d77\u65b0\u6d41\u7a0b3.gif"}))))}d.isMDXComponent=!0}}]);