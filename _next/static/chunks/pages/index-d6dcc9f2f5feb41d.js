(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5451)}])},5451:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(5893),a=r(7294),o=r(2811),s=function(e){var t=e.color,r=e.children,a=Math.floor(30*r.length);return(0,n.jsx)(o.c,{type:"highlight",multiline:!0,padding:[0,2],iterations:1,animationDuration:a,color:t,children:r})};function i(){var e=["#F59E0B","#84CC16","#10B981","#3B82F6"];return(0,n.jsx)("section",{className:"bg-[#F1F1F1] -mt-40 dark:bg-transparent pb-40",children:(0,n.jsx)("div",{className:"flex flex-row justify-center items-start overflow-hidden",children:(0,n.jsx)("div",{className:"w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20",children:(0,n.jsx)(o.m,{show:!0,children:["Back-End.","Front-End.","Hybrid Mobile.","Database.","Docker."].map((function(t,r){return(0,n.jsx)(s,{color:e[r%t.length],children:(0,n.jsx)("h1",{className:"text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-600 my-2",children:t})},r)}))})})})})}var l=r(4051),c=r.n(l),u=r(9669),d=r.n(u);function m(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,a)}var x=function(){var e,t=(e=c().mark((function e(t){var r,n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),e.prev=1,r=t.githubUsername,e.next=5,d().get("https://api.github.com/search/repositories?q=user:".concat(r,"+sort:author-date-asc"));case 5:return n=e.sent,a=n.data.items,o=a.splice(0,6),e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){m(o,n,a,s,i,"next",e)}function i(e){m(o,n,a,s,i,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),h=function(e){var t=e.latestRepo;return(0,n.jsxs)("div",{className:"github-repo",children:[(0,n.jsx)("h1",{className:"font-semibold text-xl dark:text-gray-100 text-gray-700",children:t.name}),(0,n.jsx)("p",{className:"text-base font-normal my-4 text-gray-500 dark:text-gray-400 truncate",children:t.description||(0,n.jsx)("br",{})}),(0,n.jsxs)("a",{href:t.clone_url,className:"font-semibold group flex flex-row space-x-2 w-full items-center",children:[(0,n.jsx)("p",{children:"View Repository "}),(0,n.jsx)("div",{className:"transform group-hover:translate-x-2 transition duration-300",children:"\u2192"})]})]})};function f(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,a)}function p(e){var t=e.username,r=(0,a.useState)(),o=r[0],s=r[1];return(0,a.useEffect)((function(){var e;(e=c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({githubUsername:null!==t&&void 0!==t?t:"domjeff"});case 2:r=e.sent,s(r),console.log(r);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){f(o,n,a,s,i,"next",e)}function i(e){f(o,n,a,s,i,"throw",e)}s(void 0)}))})()}),[]),(0,n.jsxs)("section",{className:"bg-[#F1F1F1] -mt-40 dark:bg-transparent pb-40",children:[(0,n.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10",children:[(0,n.jsx)("h1",{className:"text-6xl lg:text-9xl max-w-lg font-bold text-gray-400 my-20 md:my-0 md:text-gray-400 dark:text-gray-600 text-center lg:text-left",children:"Latest Code"}),(0,n.jsxs)("a",{href:"https://github.com/".concat(t),className:"mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up-right-square",stroke:"4",strokeWidth:"4",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"})}),(0,n.jsx)("p",{children:"View GitHub"})]})]})}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20",children:o&&o.map((function(e,t){return(0,n.jsx)(h,{latestRepo:e},t)}))})]})}var g=r(9008),v=r(381),w=r.n(v),j=r(1163),b=r(425),y=r(5736),k=r.n(y);function N(){var e=(0,j.useRouter)();console.log(e.asPath);var t=(0,b.F)(),r=t.theme,o=t.setTheme,s=(0,a.useState)(!1),i=s[0],l=s[1];return(0,a.useEffect)((function(){l(!0)}),[]),(0,n.jsx)("div",{className:"max-w-6xl mx-auto px-4 py-10 md:py-20",children:(0,n.jsxs)("div",{className:"flex md:flex-row justify-between items-center",children:[(0,n.jsx)("div",{className:k().name,children:"Dominique Jeffrey Alamaro Maximilianus"}),(0,n.jsxs)("div",{className:"space-x-4 flex flex-row items-center",children:[(0,n.jsx)("a",{href:"https://linkedin.com/in/dominique-maximilianus",className:"text-base font-normal text-gray-600 dark:text-gray-300",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin h-5 w-5",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),(0,n.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-10 h-10 p-3 rounded focus:outline-none",onClick:function(){return o("dark"===r?"light":"dark")},children:i&&(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",className:"w-4 h-4 text-yellow-500 dark:text-yellow-500",children:"dark"===r?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]})})}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function M(e){var t=e.children,r=O(e,["children"]),a=(0,j.useRouter)(),o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}({title:"Manu Arora - Developer, Writer, Creator and YouTuber",description:"I've been developing websites for 5 years straight. Get in touch with me to know more.",image:"/avatar.png",type:"website",date:new Date},r);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(g.default,{children:[(0,n.jsx)("title",{children:o.title}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{content:o.description,name:"description"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yourwebsite.com".concat(a.asPath)}),(0,n.jsx)("link",{rel:"canonical",href:"https://yourwebsite.com".concat(a.asPath)}),(0,n.jsx)("meta",{property:"og:type",content:o.type}),(0,n.jsx)("meta",{property:"og:site_name",content:"Manu Arora"}),(0,n.jsx)("meta",{property:"og:description",content:o.description}),(0,n.jsx)("meta",{property:"og:title",content:o.title}),(0,n.jsx)("meta",{property:"og:image",content:o.image}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@mannupaaji"}),(0,n.jsx)("meta",{name:"twitter:title",content:o.title}),(0,n.jsx)("meta",{name:"twitter:description",content:o.description}),(0,n.jsx)("meta",{name:"twitter:image",content:o.image}),o.date&&(0,n.jsx)("meta",{property:"article:published_time",content:w()(o.date).format("YYYY-MM-DD")})]}),(0,n.jsxs)("main",{className:"bg-[#F1F1F1] dark:bg-gray-800 w-full",children:[(0,n.jsx)(N,{}),(0,n.jsx)("div",{children:t})]})]})}function P(){return(0,n.jsx)(M,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)(p,{username:"domjeff"})]})})}},5736:function(e){e.exports={name:"styles_name___6bfi"}}},function(e){e.O(0,[885,86,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);