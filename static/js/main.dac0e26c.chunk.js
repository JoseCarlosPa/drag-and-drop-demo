(this["webpackJsonpdrap-n-drop"]=this["webpackJsonpdrap-n-drop"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),s=n(8),a=n.n(s),i=(n(14),n(9)),r=n(2),u=(n(15),n(6),n(0)),j=function(t){var e=t.toDo,n=t.setToDo,o=t.handleAdd;return Object(u.jsxs)("form",{className:"input",onSubmit:function(t){return o(t)},children:[Object(u.jsx)("input",{type:"input",placeholder:"Nueva tarjeta",className:"inputBox",value:e,onChange:function(t){return n(t.target.value)}}),Object(u.jsx)("button",{className:"inputSubmit",children:"Registrar"})]})},l=n(7),b=n(19),d=function(t){var e=t.toDo,n=t.toDos,c=t.setToDos,s=Object(o.useState)(!1),a=Object(r.a)(s,2),i=a[0],j=a[1],d=Object(o.useState)(e.toDo),O=Object(r.a)(d,2),p=O[0],D=O[1];return Object(u.jsxs)("form",{className:"toDoSingle",onSubmit:function(t){return function(t,e){t.preventDefault(),c(n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{toDo:p}):t}))),j(!1)}(t,e.id)},children:[i?Object(u.jsx)("input",{value:p,onChange:function(t){return D(t.target.value)},className:"todoSingleText"}):(e.state,Object(u.jsx)("span",{className:"todoSingleText",children:e.toDo})),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"icon",onClick:function(){i||j(!i)},children:Object(u.jsx)(b.b,{})}),Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)(b.a,{})})]})]})},O=function(t){var e=t.toDos,n=t.setToDos;return Object(u.jsx)("div",{className:"toDos",children:e.map((function(t){return Object(u.jsx)(d,{toDo:t,toDos:e,setToDos:n},t.id)}))})},p=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)([]),a=Object(r.a)(s,2),l=a[0],b=a[1];return console.log(n),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("span",{className:"heading",children:"LeadSales"}),Object(u.jsx)(j,{toDo:n,setToDo:c,handleAdd:function(t){t.preventDefault(),n&&(b([].concat(Object(i.a)(l),[{id:Date.now(),toDo:n,state:"To Do"}])),c(""))}}),Object(u.jsx)(O,{toDos:l,setToDos:b})]})};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))},6:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.dac0e26c.chunk.js.map