(this["webpackJsonpdrap-n-drop"]=this["webpackJsonpdrap-n-drop"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),s=n(5),a=n.n(s),i=(n(17),n(12)),r=n(4),d=(n(18),n(9),n(1)),l=function(e){var t=e.toDo,n=e.setToDo,o=e.handleAdd;return Object(d.jsxs)("form",{className:"input",onSubmit:function(e){return o(e)},children:[Object(d.jsx)("input",{type:"input",placeholder:"Nueva tarjeta",className:"inputBox",value:t,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("button",{className:"inputSubmit",children:"Registrar"})]})},j=n(2),b=n(3),p=n(28),u=function(e){var t=e.index,n=e.toDo,c=e.toDos,s=e.setToDos,a=Object(o.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1],O=Object(o.useState)(n.toDo),x=Object(r.a)(O,2),D=x[0],f=x[1];return Object(d.jsx)(b.b,{draggableId:n.id.toString(),index:t,children:function(e){return Object(d.jsxs)("form",Object(j.a)(Object(j.a)(Object(j.a)({className:"toDoSingle",onSubmit:function(e){return function(e,t){e.preventDefault(),s(c.map((function(e){return e.id===t?Object(j.a)(Object(j.a)({},e),{},{toDo:D}):e}))),u(!1)}(e,n.id)}},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[l?Object(d.jsx)("input",{value:D,onChange:function(e){return f(e.target.value)},className:"todoSingleText"}):(n.state,Object(d.jsx)("span",{className:"todoSingleText",children:n.toDo})),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"icon",onClick:function(){l||u(!l)},children:Object(d.jsx)(p.b,{})}),Object(d.jsx)("span",{className:"icon",onClick:function(){return e=n.id,void s(c.filter((function(t){return t.id!==e})));var e},children:Object(d.jsx)(p.a,{})})]})]}))}})},O=function(e){var t=e.toDos,n=e.setToDos,o=e.doing,c=e.setDoing,s=e.completedToDos,a=e.setcompletedToDos;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b.c,{droppableId:"ToDoList",children:function(e){return Object(d.jsxs)("div",Object(j.a)(Object(j.a)({className:"toDos",ref:e.innerRef},e.droppableProps),{},{children:[Object(d.jsx)("span",{className:"toDosHeading",children:"Por Hacer"}),t.map((function(e,o){return Object(d.jsx)(u,{index:o,toDo:e,toDos:t,setToDos:n},e.id)})),e.placeholder]}))}}),Object(d.jsx)(b.c,{droppableId:"Doing",children:function(e){return Object(d.jsxs)("div",Object(j.a)(Object(j.a)({className:"toDos doing",ref:e.innerRef},e.droppableProps),{},{children:[Object(d.jsx)("span",{className:"toDosHeading",children:"En progreso"}),o.map((function(e,t){return Object(d.jsx)(u,{index:t,toDo:e,toDos:o,setToDos:c},e.id)})),e.placeholder]}))}}),Object(d.jsx)(b.c,{droppableId:"completedToDos",children:function(e){return Object(d.jsxs)("div",Object(j.a)(Object(j.a)({className:"toDos done",ref:e.innerRef},e.droppableProps),{},{children:[Object(d.jsx)("span",{className:"toDosHeading",children:"Terminados"}),s.map((function(e,n){return Object(d.jsx)(u,{index:n,toDo:e,toDos:t,setToDos:a},e.id)})),e.placeholder]}))}})]})},x=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)([]),a=Object(r.a)(s,2),j=a[0],p=a[1],u=Object(o.useState)([]),x=Object(r.a)(u,2),D=x[0],f=x[1],h=Object(o.useState)([]),m=Object(r.a)(h,2),g=m[0],v=m[1];return Object(d.jsx)(b.a,{onDragEnd:function(e){var t=e.source,n=e.destination;if(n&&(n.droppableId!==t.droppableId||n.index!==t.index)){var o,c=j,s=D,a=g;"ToDoList"===t.droppableId?(o=c[t.index],c.splice(t.index,1)):"Doing"===t.droppableId?(o=s[t.index],s.splice(t.index,1)):(o=a[t.index],a.splice(t.index,1)),"ToDoList"===n.droppableId?c.splice(n.index,0,o):"Doing"===n.droppableId?(s.splice(n.index,0,o),console.log("paso por Doing")):a.splice(n.index,0,o),v(a),f(s),p(c)}},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("span",{className:"heading",children:"LeadSales"}),Object(d.jsx)(l,{toDo:n,setToDo:c,handleAdd:function(e){e.preventDefault(),n&&(p([].concat(Object(i.a)(j),[{id:Date.now(),toDo:n,state:"To Do"}])),c(""))}}),Object(d.jsx)(O,{toDos:j,setToDos:p,doing:D,setDoing:f,completedToDos:g,setcompletedToDos:v})]})})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.65b8de16.chunk.js.map