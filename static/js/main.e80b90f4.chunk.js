(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(10),i=a.n(c),r=a(8),l=a(3),s=a(4),d=a(6),u=a(5),h=a(7),m=a(2),b=a(13),p=a(11),j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo,a=t.completed,n=t.id,c=t.title;return o.a.createElement("div",{className:"todo-items"},o.a.createElement("input",{type:"checkbox",checked:a,className:"checkbox",onChange:function(t){return e.props.handleChange(n)}}),o.a.createElement("li",null,o.a.createElement("span",{style:a?{color:"#cccccc",textDecoration:"line-through"}:null},c)),o.a.createElement(b.a,{icon:p.a,className:"trash-icon",onClick:function(){return e.props.deleteToDo(n)}}))}}]),t}(o.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"list-container"},o.a.createElement("div",{className:"todo-list"},this.props.todos.map(function(t){return o.a.createElement(j,{key:t.id,todo:t,handleChange:e.props.handleChange,deleteToDo:e.props.deleteToDo})})))}}]),t}(o.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header-container"},o.a.createElement("div",{className:"header-content"},o.a.createElement("h1",null,"To Do")))}}]),t}(o.a.Component),v=a(12),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={title:""},a.onChange=a.onChange.bind(Object(m.a)(Object(m.a)(a))),a.onSubmit=a.onSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.addTodo(this.state.title),this.setState({title:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"form-container"},o.a.createElement("form",{className:"form",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"Add To Do",className:"input-text",value:this.state.title,name:"title",onChange:this.onChange})))}}]),t}(n.Component),C=a(30),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={todos:[{id:Object(C.a)(),title:"Setup development environment",completed:!1},{id:Object(C.a)(),title:"Develop website and add content",completed:!1},{id:Object(C.a)(),title:"Deploy to live server",completed:!1}]},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.deleteToDo=a.deleteToDo.bind(Object(m.a)(Object(m.a)(a))),a.addTodo=a.addTodo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addTodo",value:function(e){var t={id:Object(C.a)(),title:e,completed:!1};this.setState({todos:[].concat(Object(r.a)(this.state.todos),[t])})}},{key:"handleChange",value:function(e){this.setState({todos:this.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})}},{key:"deleteToDo",value:function(e){this.setState({todos:Object(r.a)(this.state.todos.filter(function(t){return t.id!==e}))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(E,{addTodo:this.addTodo}),o.a.createElement(O,{todos:this.state.todos,handleChange:this.handleChange,deleteToDo:this.deleteToDo}))}}]),t}(o.a.Component);a(25);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)))}},[[14,2,1]]]);
//# sourceMappingURL=main.e80b90f4.chunk.js.map