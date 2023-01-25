(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),s=c(2),r=(c(21),c(22),c(23),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.navItems;return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"navbar-brand",children:t.map((function(e){return Object(i.jsx)(a.c,{to:e.link,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:e.name},e.link)}))})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{navItems:[{link:"/",name:"Home"},{link:"people",name:"People"}]}),Object(i.jsx)(s.b,{})]})},b=function(){return Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})})},h=c(8),d=c(9),O=c(12),x=c(4),m=c(1),u=(c(25),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});var p=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(){var e=Object(m.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(m.useState)(!0),r=Object(x.a)(a,2),l=r[0],o=r[1],b=Object(m.useState)(!1),f=Object(x.a)(b,2),v=f[0],g=f[1],N=Object(s.h)("/people/:slug");return Object(m.useEffect)((function(){o(!0);var e=function(){var e=Object(O.a)(Object(h.a)().mark((function e(){var t,c;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 3:t=e.sent,c=t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(!0);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.jsx)("main",{className:"section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[l&&Object(i.jsx)(u,{}),v&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!v&&!l&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===(null===N||void 0===N?void 0:N.params.slug)}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.mother?Object(i.jsx)(p,{person:e.mother}):e.motherName||"-"}),Object(i.jsx)("td",{children:e.father?Object(i.jsx)(p,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})]})})]})})},v=function(){return Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.c,{path:":slug",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(v,{})})]})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2fa259ff.chunk.js.map