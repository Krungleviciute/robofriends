(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(3),s=t.n(c),a=t(4),i=t(2),u=t(11),d=t(12),h=(t(22),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),r(e),o(e),c(e),s(e)}))}),l=t(1),b=function(e){var n=e.id,t=e.name,r=e.email;e.username;return Object(l.jsxs)("div",{className:"tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robo profile",src:"https://robohash.org/".concat(n,"?size=200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:r})]})]})},j=function(e){var n=e.robots;return Object(l.jsx)("div",{children:n.map((function(e){return Object(l.jsx)(b,{id:e.id,name:e.name,email:e.email,username:e.username},e.id)}))})},g=function(e){var n=e.searchChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"pa3 ba br3 bg-washed-green",type:"search",placeholder:"Search Robots",onChange:n})})},f=(t(24),t(25),function(e){var n=e.children;return Object(l.jsx)("div",{className:"scroller",style:{overflowY:"scroll",height:"800px"},children:n})}),O="CHANGE_SEARCH_FIELD",p="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",m="REQUEST_ROBOTS_FAILED",x=function(e,n){return!1};function R(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"f2",children:"RoboFriends"})})}var w=o.a.memo(R,x),y=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:O,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:v,payload:n})})).catch((function(n){return e({type:m,payload:n})}))}))}}}))((function(e){var n=e.searchField,t=e.onSearchChange,o=e.robots,c=e.isPending,s=e.onRequestRobots;Object(r.useEffect)((function(){s()}),[]);var a=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return c?Object(l.jsx)("h1",{className:"tc",children:"Loading ..."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)(w,{}),Object(l.jsx)(g,{searchChange:t}),Object(l.jsx)(f,{children:Object(l.jsx)(j,{robots:a})})]})})),S={searchField:""},C={isPending:!1,robots:[],error:""};t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(u.createLogger)(),F=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case O:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case p:return Object.assign({},e,{isPending:!0});case v:return Object.assign({},e,{robots:n.payload,isPending:!1});case m:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),P=Object(i.d)(F,Object(i.a)(d.a,E));s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(a.a,{store:P,children:Object(l.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),h()}},[[27,1,2]]]);
//# sourceMappingURL=main.85d3c2e1.chunk.js.map