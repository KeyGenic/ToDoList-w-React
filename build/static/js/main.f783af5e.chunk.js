(this.webpackJsonptodolisttt=this.webpackJsonptodolisttt||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),o=(n(16),n(5)),r=n(7),l=n(8),u=n(11),d=n(9),j=(n(17),n(10)),f=(n(18),n(0)),b=function(t){var e=Object(a.useState)(""),n=Object(j.a)(e,2),c=n[0],s=n[1];return Object(f.jsxs)("form",{id:"field-form",onSubmit:function(e){if(""===c)e.preventDefault(),alert("add a task plz");else{e.preventDefault();var n=Math.floor(1e4*Math.random());t.onSubmit({list:c,id:n}),s("")}},children:[Object(f.jsx)("input",{type:"text",className:"add-field",name:c,value:c,placeholder:"Add Something",onChange:function(t){t.preventDefault(),s(t.target.value)}}),Object(f.jsx)("button",{className:"add-btn",children:Object(f.jsx)("i",{class:"fas fa-plus"})})]})},m=(n(20),function(t){var e=t.task,n=t.complete,a=t.remove;return Object(f.jsxs)("div",{className:"list-container",children:[Object(f.jsx)("h5",{children:e}),Object(f.jsxs)("div",{className:"list-action",children:[n,a]})]})});n(21);function p(t){var e=t.props,n=t.task;return Object(f.jsx)("i",{class:"fas fa-check check",onClick:e,name:n})}n(22);var v=function(t){var e=t.task;return Object(f.jsxs)("div",{className:"completed-task-container",children:[Object(f.jsx)("h5",{children:e}),Object(f.jsx)("i",{class:"fas fa-check complete-check"})]})};n(23);function h(t){var e=t.props,n=t.id;return Object(f.jsx)("i",{class:"fas fa-times remove",onClick:e,id:n})}var O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={toDoList:[],completedTask:[]},t.addList=function(e){e&&t.setState((function(t){return{toDoList:[].concat(Object(o.a)(t.toDoList),[e])}}))},t.remove=function(e){var n=e.target.getAttribute("id");t.setState({toDoList:t.state.toDoList.filter((function(t){return t.id!=n}))})},t.handleClick=function(e){var n=e.target.getAttribute("name");t.setState({toDoList:t.state.toDoList.filter((function(t){return t.list!==n}))}),t.setState((function(t){return{completedTask:[].concat(Object(o.a)(t.completedTask),[n])}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{className:"app",children:Object(f.jsxs)("div",{className:"to-do-list-container",children:[Object(f.jsx)(b,{onSubmit:this.addList}),this.state.toDoList.map((function(e){var n=e.list,a=e.id;return Object(f.jsx)(m,{task:n,complete:Object(f.jsx)(p,{props:t.handleClick,task:n}),remove:Object(f.jsx)(h,{props:t.remove,id:a})},a)})),Object(f.jsx)("div",{className:"line-block"}),this.state.completedTask.map((function(t){return Object(f.jsx)(v,{task:t})}))]})})}}]),n}(c.a.Component),k=O;i.a.render(Object(f.jsx)(k,{}),document.querySelector(".root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f783af5e.chunk.js.map