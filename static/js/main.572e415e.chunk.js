(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l);t(19);var o=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},s=function(){return r.a.createElement("div",{className:"header text-info py-5 "},r.a.createElement("h1",null,"Employee Directory"))},m=t(2),i=t(13),u=t.n(i),d=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")},b=function(e){var a=e.searchFilter;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search",onChange:function(e){return a(e)}}))))},f=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)("descend"),f=Object(m.a)(u,2),E=f[0],v=f[1],g=Object(n.useState)("descend"),h=Object(m.a)(g,2),p=h[0],y=h[1];Object(n.useEffect)((function(){d().then((function(e){l(e.data.results),i(e.data.results)}))}),[v]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{searchFilter:function(e){var a=e.target.value,n=t.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));i(n),console.log(s)}}),r.a.createElement("table",{className:"table table-hover mt-5"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"Name",r.a.createElement("button",{className:"ml-2"},r.a.createElement("i",{className:"fas fa-sort",onClick:function(){if("descend"===E){var e=t.sort((function(e,a){return e.name.last<a.name.last?-1:e.name.last>a.name.last?1:void 0}));i(e),v("ascend"),console.log(s)}else{var a=t.sort((function(e,a){return e.name.last<a.name.last?1:e.name.last>a.name.last?-1:void 0}));i(a),v("descend")}}}))),r.a.createElement("th",null,"Contact Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Age",r.a.createElement("button",{className:"ml-2"},r.a.createElement("i",{className:"fas fa-sort",onClick:function(){if("descend"===p){var e=t.sort((function(e,a){return e.dob.age<a.dob.age?-1:e.dob.age>a.dob.age?1:void 0}));i(e),y("ascend")}else{var a=t.sort((function(e,a){return e.dob.age<a.dob.age?1:e.dob.age>a.dob.age?-1:void 0}));i(a),y("descend")}}})))),s.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,o=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",null," ",r.a.createElement("img",{src:n.thumbnail,alt:t})),r.a.createElement("td",null,t.first," ",t.last),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,o.age," "))})))))};t(37);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null,r.a.createElement(s,null),r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.572e415e.chunk.js.map