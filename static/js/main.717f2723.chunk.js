(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),s=n(10),i=n.n(s),r=(n(21),n(22),n(23),function(){return Object(o.jsx)("header",{className:"Header",children:Object(o.jsx)("h1",{children:"What will you do today?"})})}),d=n(2),a=n(8),l=n(32),u=(n(24),n(25),function(e){return e.todos.map((function(t,n){return Object(o.jsxs)("li",{className:"\n          TodoItem \n          ".concat(t.isCompleted&&"TodoItem--isCompleted"," \n          ").concat(t.isImportant&&"TodoItem--isImportant","\n      "),children:[Object(o.jsx)("checkbox",{title:"Mark as completed",tabindex:"0",className:"TodoItem__checkBox",onClick:function(){return e.handleTodoIsChecked(n)},onKeyDown:function(t){return"Enter"===t.key&&e.handleTodoIsChecked(n)},children:t.isCompleted&&Object(o.jsx)("span",{children:"\u2713"})}),Object(o.jsx)("input",{title:"Text for to-do-item",type:"text",placeholder:"new to-do",value:t.content,onChange:function(t){return e.handleTodoIsChanged(t,n)},onKeyDown:function(t){return function(t,n){"Enter"===t.key&&""!==e.todos[n].content?(e.createTodoAtIndex(n),setTimeout((function(){document.forms[0].elements[n+1].focus()}),0)):"Backspace"===t.key&&""===e.todos[n].content&&(e.handleTodoIsDeleted(n),setTimeout((function(){e.todos.length>1&&document.forms[0].elements[n-1].focus()}),0))}(t,n)}}),Object(o.jsx)("checkbox",{title:"Mark as important",tabindex:"0",className:"TodoItem__importantBtn",onClick:function(){return e.handleTodoIsImportant(n)},onKeyDown:function(t){return"Enter"===t.key&&e.handleTodoIsImportant(n)},children:Object(o.jsx)("span",{children:"!"})}),Object(o.jsx)("div",{title:"Remove item",tabindex:"0",role:"button",className:"TodoItem__removeBtn",onClick:function(){return e.handleTodoIsDeleted(n)},onKeyDown:function(t){return"Enter"===t.key&&e.handleTodoIsDeleted(n)},children:Object(o.jsx)("span",{children:"\u2715"})})]},t.key)}))}),j=function(e){return Object(o.jsxs)("div",{className:"AddNewTodo",children:[Object(o.jsx)("input",{title:"Text for to-do-item",for:"add-new-todo",placeholder:"add new to-do",type:"text",value:e.input,onChange:function(t){return e.setInput(t.target.value)},onKeyDown:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return"Enter"===t.key&&e.input?e.createTodoAtIndex(n):null}}),Object(o.jsx)("button",{type:"submit",tabindex:"0",className:"AddNewTodo__addBtn",onClick:e.input?e.createTodoAtIndex:null,children:Object(o.jsx)("span",{children:"\uff0b"})})]})},h=n(11),m=n(12);function b(){var e=Object(h.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    margin: 1rem;\n    padding: 0.5em;\n    border: 2px solid ","; \n    border-radius: 0.5em;\n    width: 100%;\n    min-width: 330px;\n    max-width: 500px;\n  "]);return b=function(){return e},e}var p=function(e){var t=e.todos.filter((function(e){return!1===e.isCompleted})),n=e.todos.filter((function(e){return!0===e.isCompleted})),c=0===t.length,s=m.a.div(b(),c?"rgb(43, 164, 37)":"rgb(226, 73, 55)");return Object(o.jsxs)(s,{children:[Object(o.jsx)("div",{children:c?"All caught up \ud83d\udd25":"Pending: ".concat(t.length)}),Object(o.jsxs)("div",{children:["Completed: ",n.length]})]})},f=(n(28),function(e){return Object(o.jsx)("button",{className:"ClearAllTodosButton",onClick:function(){return e.setTodos([])},children:Object(o.jsx)("span",{children:"Clear all"})})}),x=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),r=Object(a.a)(i,2),h=r[0],m=r[1];Object(c.useEffect)((function(){var e=localStorage.getItem("todo-list");e&&s(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todo-list",JSON.stringify(n))}),[n]);var b=function(e){var t=Object(d.a)(n);t.splice(e+1,0,{key:Object(l.a)(),content:h||"",isCompleted:!1,isImportant:!1}),s(t),m("")};return Object(o.jsxs)("main",{className:"Main",children:[Object(o.jsx)("div",{className:"newTodoSection",role:"form",name:"add-new-todo",children:Object(o.jsx)(j,{todos:n,setTodos:s,input:h,setInput:m,createTodoAtIndex:b})}),Object(o.jsxs)("form",{className:"todoListSection",name:"todo-list",children:[Object(o.jsx)("h2",{children:"\ud83d\udcc4Tasks"}),Object(o.jsx)(p,{todos:n}),Object(o.jsx)("ul",{className:"todoList",children:Object(o.jsx)(u,{todos:n,setTodos:s,createTodoAtIndex:b,handleTodoIsDeleted:function(e){var t=Object(d.a)(n);t.splice(e,1),s(t)},handleTodoIsChanged:function(e,t){var o=Object(d.a)(n);o[t].content=e.target.value,s(o)},handleTodoIsChecked:function(e){var t=Object(d.a)(n);t[e].isCompleted=!t[e].isCompleted,t[e].isCompleted&&t.push(t.splice(e,1)[0]),s(t)},handleTodoIsImportant:function(e){var t=Object(d.a)(n);t[e].isImportant=!t[e].isImportant,t[e].isImportant&&!t[e].isCompleted&&t.unshift(t.splice(e,1)[0]),s(t)}})})]}),Object(o.jsx)(f,{todos:n,setTodos:s})]})},O=(n(29),function(){return Object(o.jsxs)("footer",{className:"Footer",children:[Object(o.jsxs)("article",{className:"howTo",children:[Object(o.jsx)("h3",{children:"How to use:"}),Object(o.jsx)("li",{children:"Press 'enter' in any of the boxes to create a new to-do-item"}),Object(o.jsx)("li",{children:"Complete the item by checking the left circle"}),Object(o.jsx)("li",{children:"Mark an item as important by checking the '!'-icon"}),Object(o.jsx)("li",{children:"Delete an item by deleting its content or clicking the x-symbol on the right"})]}),Object(o.jsxs)("article",{className:"credits",children:[Object(o.jsx)("h3",{children:"Credits"}),Object(o.jsxs)("p",{children:["Created with ",Object(o.jsx)("a",{href:"https://reactjs.org/",children:"React.js"})," \ud83d\udca5"]})]})]})});var T=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(x,{}),Object(o.jsx)(O,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(T,{}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.717f2723.chunk.js.map