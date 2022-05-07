"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[4117],{99278:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(59301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,d=s["".concat(o,".").concat(g)]||s[g]||u[g]||p;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(47145),a=n(24736),p=(n(59301),n(99278)),i=["components"],l={},o="\u6a21\u677f\u4e2d\u5fc3",c={unversionedId:"usage/guide/platform/newApp",id:"usage/guide/platform/newApp",title:"\u6a21\u677f\u4e2d\u5fc3",description:"\u672a\u5347\u7ea7\u5230\u65b0\u7248\u4fe1\u606f\u67b6\u6784\u7684\u7ec4\u7ec7\uff0c\u8bf7 \u70b9\u6b64\u67e5\u770b \u4f7f\u7528\u624b\u518c",source:"@site/docs/usage/guide/platform/newApp.md",sourceDirName:"usage/guide/platform",slug:"/usage/guide/platform/newApp",permalink:"/developer-site/docs/usage/guide/platform/newApp",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/usage/guide/platform/newApp.md",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{}},m={},u=[{value:"1. \u67e5\u770b\u6a21\u677f",id:"1-\u67e5\u770b\u6a21\u677f",level:2},{value:"2. \u6a21\u677f\u9009\u62e9",id:"2-\u6a21\u677f\u9009\u62e9",level:2},{value:"3. \u6a21\u677f\u67e5\u627e",id:"3-\u6a21\u677f\u67e5\u627e",level:2},{value:"4. \u6211\u53d1\u5e03\u7684",id:"4-\u6211\u53d1\u5e03\u7684",level:2},{value:"5. \u7528\u6237\u53cd\u9988",id:"5-\u7528\u6237\u53cd\u9988",level:2},{value:"6. \u4f53\u9a8c\u4e00\u4e0b",id:"6-\u4f53\u9a8c\u4e00\u4e0b",level:2},{value:"7. \u542f\u7528\u6b64\u5e94\u7528",id:"7-\u542f\u7528\u6b64\u5e94\u7528",level:2},{value:"8. \u600e\u4e48\u542f\u7528\u6a21\u677f\u4e2d\u5fc3\u7684\u5e94\u7528",id:"8-\u600e\u4e48\u542f\u7528\u6a21\u677f\u4e2d\u5fc3\u7684\u5e94\u7528",level:2},{value:"9.\u5e38\u89c1\u95ee\u9898",id:"9\u5e38\u89c1\u95ee\u9898",level:2},{value:"9.1 \u600e\u4e48\u4fee\u6539\u6a21\u677f\uff1f",id:"91-\u600e\u4e48\u4fee\u6539\u6a21\u677f",level:3}],s={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u6a21\u677f\u4e2d\u5fc3"},"\u6a21\u677f\u4e2d\u5fc3"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672a\u5347\u7ea7\u5230\u65b0\u7248\u4fe1\u606f\u67b6\u6784\u7684\u7ec4\u7ec7\uff0c\u8bf7 ",(0,p.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/qmf50t"},(0,p.kt)("strong",{parentName:"a"},"\u70b9\u6b64\u67e5\u770b"))," \u4f7f\u7528\u624b\u518c  ")),(0,p.kt)("p",null,"\u4e0d\u6e05\u695a\u5b9c\u642d\u5177\u4f53\u53ef\u4ee5\u5b9e\u73b0\u4ec0\u4e48\u6837\u7684\u529f\u80fd\uff0c\u80fd\u505a\u5230\u4ec0\u4e48\u6837\u7684\u6548\u679c\uff0c\u53ef\u4ee5\u5148\u770b\u6a21\u677f\u4e2d\u5fc3\u63d0\u4f9b\u7684\u6a21\u677f\uff0c\u6a21\u677f\u6765\u6e90\u4e8e\u5b9c\u642d\u56e2\u961f\uff0c\u670d\u52a1\u5546\u4ee5\u53ca\u5b9c\u642d\u5927\u8d5b\u8d21\u732e\u7684\u4f18\u79c0\u6a21\u677f\uff0c\u5e94\u7528\u573a\u666f\u4e5f\u7b26\u5408\u4f01\u4e1a\u65e5\u5e38\u7684\u9700\u6c42\uff0c\u6a21\u4eff\u6a21\u677f\u53bb\u642d\u5efa\u60a8\u9700\u8981\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u66f4\u8f7b\u677e\u4fbf\u6377\u53bb\u5b66\u4e60\u5982\u4f55\u642d\u5efa\u5e94\u7528\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u6a21\u677f\u4e2d\u5fc3\u63d0\u4f9b\u7684\u6a21\u677f\u90fd\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528\u7684\uff0c\u8bf7\u76f4\u63a5\u542f\u7528\u53bb\u642d\u5efa\u54e6")),(0,p.kt)("h2",{id:"1-\u67e5\u770b\u6a21\u677f"},"1. \u67e5\u770b\u6a21\u677f"),(0,p.kt)("p",null,"\u8fdb\u5165\u6a21\u677f\u4e2d\u5fc3\u70b9\u51fb\u5168\u90e8\u5e94\u7528\u53ef\u4ee5\u770b\u5230\u5b9c\u642d\u5e73\u53f0\u63d0\u4f9b\u7684\u6240\u6709\u6a21\u677f\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN012MAZtU1Jg9NaYq4IR_!!6000000001057-2-tps-1046-473.png_.webp",alt:"\u6a21\u677f\u9875\u9762"})),(0,p.kt)("h2",{id:"2-\u6a21\u677f\u9009\u62e9"},"2. \u6a21\u677f\u9009\u62e9"),(0,p.kt)("p",null,"\u6253\u5f00\u6a21\u677f\u4e2d\u5fc3\u4e0b\u6709\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u5168\u90e8\u5e94\u7528\u3001\u4e00\u7c7b\u662f\u6211\u53d1\u5e03\u7684\uff1b\u6253\u5f00\u6a21\u677f\u4e2d\u5fc3\u9ed8\u8ba4\u7684\u662f\u5168\u90e8\u5e94\u7528\uff0c\u5728\u8fd9\u91cc\u60a8\u53ef\u4ee5\u7ed3\u5408\u60a8\u4f01\u4e1a\u9700\u8981\u4f7f\u7528\u5b9c\u642d\u5b9e\u73b0\u7684\u4e1a\u52a1\u573a\u666f\u53bb\u9009\u62e9\u6a21\u677f\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01xbNb8c296IOSrLTd7_!!6000000008018-2-tps-1046-476.png_.webp",alt:"\u9009\u62e9\u6a21\u677f"})),(0,p.kt)("h2",{id:"3-\u6a21\u677f\u67e5\u627e"},"3. \u6a21\u677f\u67e5\u627e"),(0,p.kt)("p",null,"\u4f01\u4e1a\u662f\u505a\u8bbe\u5907\u5de1\u68c0\u65b9\u9762\u7684\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u60a8\u4f01\u4e1a\u5e73\u65f6\u7684\u4e1a\u52a1\u7c7b\u578b\u5728\u641c\u7d22\u6846\u641c\u7d22\u4e1a\u52a1\u7c7b\u578b\u76f8\u5173\u7684\u6a21\u677f\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01p2efkq1ekpM6OBQpc_!!6000000003910-2-tps-1046-480.png_.webp",alt:"\u641c\u7d22\u6a21\u677f"})),(0,p.kt)("h2",{id:"4-\u6211\u53d1\u5e03\u7684"},"4. \u6211\u53d1\u5e03\u7684"),(0,p.kt)("p",null,"\u6a21\u677f\u4e2d\u5fc3\u70b9\u51fb\u300c\u6211\u53d1\u5e03\u7684\u300d\u82e5\u5f53\u524d\u767b\u5f55\u7528\u6237\u4e3a\u5b9c\u642d\u5e73\u53f0\u7ba1\u7406\u5458\u6216\u5e94\u7528\u7ba1\u7406\u5458\uff0c\u8be5\u529f\u80fd\u4f1a\u5c55\u793a\u5b9c\u642d\u5e73\u53f0\u7ba1\u7406\u5458\u6216\u5e94\u7528\u7ba1\u7406\u5458\u4e0a\u67b6\u5230\u6a21\u677f\u4e2d\u5fc3\u7684\u5e94\u7528\uff0c\u82e5\u65e0\u5b9c\u642d\u7ba1\u7406\u6743\u9650\u548c\u4f01\u4e1a\u6ca1\u6709\u4e0a\u67b6\u5e94\u7528\u5230\u6a21\u677f\u4e2d\u5fc3\u5219\u663e\u793a\u7a7a\u767d\u9875\u9762\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01sNGAkm2A8sEh84IrC_!!6000000008159-2-tps-1046-472.png_.webp",alt:"\u6211\u53d1\u5e03\u7684"})),(0,p.kt)("h2",{id:"5-\u7528\u6237\u53cd\u9988"},"5. \u7528\u6237\u53cd\u9988"),(0,p.kt)("p",null,"\u5f53\u60a8\u6ca1\u6709\u5728\u6a21\u677f\u4e2d\u5fc3\u627e\u5230\u9002\u5408\u81ea\u5df1\u9700\u6c42\u7684\u6a21\u677f\u65f6\uff0c\u60a8\u53ef\u70b9\u51fb\u300c",(0,p.kt)("strong",{parentName:"p"},"\u53cd\u9988\u60a8\u7684\u4f53\u9a8c\u611f\u53d7\u6216\u8bc9\u6c42\uff0c",(0,p.kt)("a",{parentName:"strong",href:"https://www.aliwork.com/o/yida_feedback?spm=a1zlco.10384403.0.0.36f89ed3WIouvD"},"\u70b9\u6b64\u53cd\u9988")),"\u300d\u586b\u5199\u60a8\u9700\u8981\u7684\u6a21\u677f\u573a\u666f\u4ee5\u53ca\u60a8\u7684\u9700\u6c42\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN019u7GNJ1L3L36k9ixC_!!6000000001243-2-tps-1046-468.png_.webp",alt:"\u53cd\u9988\u8bc9\u6c42"}),"\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01TPpLfP1Sfzn0gTJJA_!!6000000002275-2-tps-1046-595.png_.webp",alt:"\u4f53\u9a8c\u53cd\u9988\u9875\u9762"})),(0,p.kt)("h2",{id:"6-\u4f53\u9a8c\u4e00\u4e0b"},"6. \u4f53\u9a8c\u4e00\u4e0b"),(0,p.kt)("p",null,"\u67e5\u770b\u5230\u4e86\u5230\u7b26\u5408\u4f01\u4e1a\u9700\u6c42\u7684\u6a21\u677f \u53ef\u4ee5\u70b9\u51fb\u9009\u62e9\u300c\u4f53\u9a8c\u4e00\u4e0b\u300d\u53bb\u9884\u89c8\u8fd9\u4e2a\u6a21\u677f\u6574\u4f53\u754c\u9762\uff0c\u4e0d\u53ef\u4fee\u6539\u6a21\u677f\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01eWX1iJ1wJxCWRSTpq_!!6000000006288-2-tps-1046-499.png_.webp",alt:"\u4f53\u9a8c\u6a21\u677f"}),"\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01OrG9V21XKzhuLqYSS_!!6000000002906-2-tps-1818-777.png_.webp",alt:"\u67e5\u770b\u6a21\u677f\u5e94\u7528\u7684\u8868\u5355"})),(0,p.kt)("h2",{id:"7-\u542f\u7528\u6b64\u5e94\u7528"},"7. \u542f\u7528\u6b64\u5e94\u7528"),(0,p.kt)("p",null,"\u67e5\u770b\u5230\u4e86\u5230\u7b26\u5408\u4f01\u4e1a\u9700\u6c42\u7684\u6a21\u677f\u53ef\u76f4\u63a5\u70b9\u51fb\u300c\u542f\u7528\u6b64\u5e94\u7528\u300d\u53ef\u76f4\u63a5\u4f7f\u7528\u8be5\u6a21\u677f\n\u4fdd\u7559\u793a\u4f8b\u6570\u636e\uff1a\u4f1a\u4fdd\u7559\u6a21\u677f\u521b\u5efa\u4eba\u5458\u63d0\u4ea4\u7684\u6d4b\u8bd5\u6570\u636e\n\u4e0d\u4fdd\u7559\u793a\u4f8b\u6570\u636e\uff1a\u5168\u65b0\u6a21\u677f\uff0c\u6a21\u677f\u5185\u65e0\u4efb\u4f55\u6570\u636e\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN0192ComV1gOxg4hqKQi_!!6000000004133-2-tps-1727-799.png_.webp",alt:"\u542f\u7528\u5e94\u7528"}),"\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01btnaHP1efKbTaFis0_!!6000000003898-2-tps-1749-811.png_.webp",alt:"\u662f\u5426\u4fdd\u7559\u6a21\u677f\u5185\u9057\u7559\u7684\u6570\u636e"})),(0,p.kt)("h2",{id:"8-\u600e\u4e48\u542f\u7528\u6a21\u677f\u4e2d\u5fc3\u7684\u5e94\u7528"},"8. \u600e\u4e48\u542f\u7528\u6a21\u677f\u4e2d\u5fc3\u7684\u5e94\u7528"),(0,p.kt)("p",null,"\u6253\u5f00\u7535\u8111\u9489\u9489 >> \u5de5\u4f5c\u53f0 >> \u5b9c\u642d >> \u6a21\u677f\u4e2d\u5fc3 >> \u67e5\u627e\u5230\u9002\u5408\u81ea\u5df1\u4f01\u4e1a\u7684\u5e94\u7528\u5e76\u70b9\u51fb >> \u9009\u62e9\u542f\u7528\u6b64\u5e94\u7528\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN012jR0261iKxRovZxmv_!!6000000004395-2-tps-1046-484.png_.webp",alt:"\u5e94\u7528\u8be6\u60c5\u9875\u9762"})),(0,p.kt)("h2",{id:"9\u5e38\u89c1\u95ee\u9898"},"9.\u5e38\u89c1\u95ee\u9898"),(0,p.kt)("h3",{id:"91-\u600e\u4e48\u4fee\u6539\u6a21\u677f"},"9.1 \u600e\u4e48\u4fee\u6539\u6a21\u677f\uff1f"),(0,p.kt)("p",null,"\u5728\u4fee\u6539\u6a21\u677f\u4e4b\u524d\u9700\u8981\u5148\u4e86\u89e3\u6a21\u677f\u7684\u5e94\u7528\u8868\u5355\u4e4b\u95f4\u7684\u4e1a\u52a1\u5173\u7cfb\uff0c\u6bd4\u5982\u67e5\u770b\u4e00\u4e0b\u8868\u5355\u4e4b\u95f4\u662f\u5426\u914d\u7f6e\u4e86\u4e1a\u52a1\u5173\u8054\u89c4\u5219\u3001\u6570\u636e\u8054\u52a8\u7b49\u3002"),(0,p.kt)("p",null,"\u4fee\u6539\u6b65\u9aa4\uff1a\u7535\u8111\u7aef\u6253\u5f00\u5df2\u542f\u7528\u7684\u6a21\u677f >> \u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8868\u5355 >> \u53f3\u4e0a\u89d2\u70b9\u51fb\u7f16\u8f91\u6309\u94ae\u5373\u53ef\u8fdb\u5165\u5230\u7f16\u8f91\u8868\u5355/\u6d41\u7a0b\u8868\u5355\u9875\u9762\uff0c\u5373\u53ef\u4fee\u6539\u8868\u5355\u7ec4\u4ef6\u3001\u6dfb\u52a0\u7ec4\u4ef6\u7b49\u5185\u5bb9\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN019JNECx1tXkHIhGO8C_!!6000000005912-2-tps-1834-870.png_.webp",alt:null})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5b9c\u642d\u4e3a\u4e86\u66f4\u597d\u7684\u4f18\u5316\u5b9c\u642d\u4f7f\u7528\u624b\u518c\u5185\u5bb9\u548c\u8d28\u91cf\uff0c\u5360\u7528\u60a83-5\u5206\u949f\u65f6\u95f4\uff0c\u8f9b\u82e6\u586b\u5199\u4e00\u4e0b\u6587\u6863\u53cd\u9988\u95ee\u5377\u3002\u6587\u6863\u53cd\u9988\u95ee\u5377\u662f\u533f\u540d\u63d0\u4ea4\uff0c\u540c\u65f6\u95ee\u5377\u4fe1\u606f\u4ec5\u7528\u4e8e\u5b9c\u642d\u6587\u6863\u4f53\u9a8c\u53cd\u9988\u6536\u96c6\uff0c\u611f\u8c22\u60a8\u5bf9\u5b9c\u642d\u7684\u652f\u6301\uff01\n",(0,p.kt)("a",{parentName:"p",href:"https://www.aliwork.com/o/cesqwekd?ddtab=true"},(0,p.kt)("strong",{parentName:"a"},"\u70b9\u6b64\u94fe\u63a5\u586b\u5199\u8c03\u7814\u95ee\u5377")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"--------------------\u83b7\u53d6\u5b9c\u642d\u6700\u65b0\u4fe1\u606f\uff0c\u6b22\u8fce\u5173\u6ce8\u6211\u4eec--------------------"),"\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01IvxaAW1v1LUeWAQqp_!!6000000006112-2-tps-997-561.png_.webp",alt:"\u5b9c\u642d.jpg"})))}g.isMDXComponent=!0}}]);