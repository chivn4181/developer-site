"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3634],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9652:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(94578),i=n(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,o=t.style,s=t.url;return s?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);s.displayName="bg-iframe"},94313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=n(9652),a=["components"],c={title:"\u4f7f\u7528\u9489\u9489JSAPI",order:4},l="\u4f7f\u7528\u9489\u9489 JSAPI",p={unversionedId:"examples/dingTalkAPI",id:"examples/dingTalkAPI",title:"\u4f7f\u7528\u9489\u9489JSAPI",description:"\u793a\u4f8b\u8bf4\u660e",source:"@site/docs/examples/dingTalkAPI.mdx",sourceDirName:"examples",slug:"/examples/dingTalkAPI",permalink:"/developer-site/docs/examples/dingTalkAPI",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/dingTalkAPI.mdx",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u9489\u9489JSAPI",order:4},sidebar:"examples",previous:{title:"\u5f15\u5165 Apache ECharts",permalink:"/developer-site/docs/examples/introductEcharts"},next:{title:"\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c",permalink:"/developer-site/docs/examples/customGetSum"}},u=[{value:"\u793a\u4f8b\u8bf4\u660e",id:"\u793a\u4f8b\u8bf4\u660e",children:[],level:2},{value:"\u793a\u4f8b\u6f14\u793a",id:"\u793a\u4f8b\u6f14\u793a",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528\u9489\u9489-jsapi"},"\u4f7f\u7528\u9489\u9489 JSAPI"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u8bf4\u660e"},"\u793a\u4f8b\u8bf4\u660e"),(0,o.kt)("p",null,"\u9489\u9489 JS API \u662f\u7531\u9489\u9489\u5bb9\u5668\u63d0\u4f9b\u7684, \u53ef\u4ee5\u7531\u524d\u7aef\u4ee3\u7801\u8c03\u7528\u7684 API, \u7528\u4e8e\u505a\u4e00\u4e9b\u5bfc\u822a, \u9875\u9762\u8df3\u8f6c\u76f8\u5173\u7684\u64cd\u4f5c, \u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e9b\u5728\u5b9c\u642d\u9875\u9762\u7684\u573a\u666f\u4e0b\u4e00\u4e9b\u5e38\u7528\u7684\u4f7f\u7528\u65b9\u6cd5\u5f53\u5728\u9489\u9489\u5185\u6253\u5f00\u5b9c\u642d\u9875\u9762\u65f6, \u9489\u9489\u7684 JS API \u4f1a\u6302\u8f7d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.dd")," \u7684\u5168\u5c40\u53d8\u91cf\u4e0a\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u6f14\u793a"},"\u793a\u4f8b\u6f14\u793a"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/jsapi-demo?isRenderNav=false",mdxType:"Iframe"}))}f.isMDXComponent=!0}}]);