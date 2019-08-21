(window["webpackJsonpsimple-notes"]=window["webpackJsonpsimple-notes"]||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/create.45b30f6a.svg"},24:function(e,t,n){e.exports=n.p+"static/media/check.235701a7.svg"},30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),c=n.n(o),i=(n(35),n(14)),u=n(12),l=n(2),s=n(7),f=n(27),p=(n(36),n(3)),d=n(11),m=n.n(d);function b(){var e=Object(l.a)(["\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin-right: 10px;\n  background-color: whitesmoke;\n  color: #fff;\n  border-radius: 50px;\n  border: 2px black solid;\n  text-align: center;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n  flex: 1;\n"]);return g=function(){return e},e}function h(){var e=Object(l.a)(["\n  padding: 0 18px;\n  max-height: ",";\n  overflow: hidden;\n  text-align: left;\n  background-color: #474646;\n  color: white;\n"]);return h=function(){return e},e}function x(){var e=Object(l.a)(["\n  display: flex;\n  background-color: #474646;\n  color: white;\n  cursor: pointer;\n  padding: 18px 0 18px 0;\n  width: 100%;\n  border: 1px solid black;\n  text-align: left;\n  outline: none;\n  font-size: 24px;\n"]);return x=function(){return e},e}function v(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return e},e}var O=p.a.div(v()),j=p.a.span(x()),w=p.a.div(h(),function(e){return e.active?"100%":0}),E=p.a.div(g()),y=p.a.button(b());function k(e){var t=e.note,n=e.selected,r=e.editNote;return a.a.createElement(O,null,a.a.createElement(j,null,t.title,a.a.createElement(E,null),a.a.createElement(y,{onClick:function(){return r(t)}},a.a.createElement("img",{src:m.a,height:"20",alt:"pen"}))),a.a.createElement(w,{active:n},a.a.createElement("p",null,t.text)))}function S(){var e=Object(l.a)([""]);return S=function(){return e},e}function N(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n"]);return N=function(){return e},e}var P=p.a.ul(N()),C=p.a.li(S());function D(e){var t=e.notes,n=e.onSelect,r=e.selected,o=e.editNote;return a.a.createElement(P,null,t.map(function(e,t){return a.a.createElement(C,{onClick:function(){return n(t)}},a.a.createElement(k,{key:t,note:e,selected:r===t,editNote:o}))}))}var J=n(24),I=n.n(J);function B(){var e=Object(l.a)(["\n  position: fixed;\n  width: 100px;\n  height: 100px;\n  bottom: 40px;\n  right: 40px;\n  cursor: pointer;\n  background-color: lightgreen;\n  color: #fff;\n  border-radius: 50px;\n  border: 2px black solid;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n"]);return B=function(){return e},e}function T(){var e=Object(l.a)(["\n  display: grid;\n  grid-gap: 10px;\n"]);return T=function(){return e},e}function W(){var e=Object(l.a)(["\n  width: 50vw;\n  margin: auto;\n"]);return W=function(){return e},e}var z=p.a.div(W()),A=p.a.form(T()),F=p.a.button(B());function $(e){var t=e.note,n=e.onSubmit,r=e.onChange;return a.a.createElement(z,null,a.a.createElement(A,{onSubmit:n},a.a.createElement("input",{name:"title",type:"text",value:t.title,placeholder:"Title",onChange:r}),a.a.createElement("textarea",{name:"text",value:t.text,placeholder:"Note",onChange:r}),a.a.createElement(F,{type:"submit"},a.a.createElement("img",{src:I.a,height:"60",alt:"pen"}))))}var q=n(19),G=function(){var e=localStorage.getItem("notes");return e?JSON.parse(e):[]},H={getNotes:G,saveNote:function(e){var t=G();if(e.edit)t.map(function(t){return t.id===e.id?(t.text=e.text,t.title=e.title,t):t}),localStorage.setItem("notes",JSON.stringify(Object(q.a)(t)));else{var n="note-"+(new Date).getTime();e.id=n,localStorage.setItem("notes",JSON.stringify([].concat(Object(q.a)(t),[e])))}}};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function M(){var e=Object(l.a)(["\n  position: fixed;\n  width: 100px;\n  height: 100px;\n  bottom: 40px;\n  right: 40px;\n  cursor: pointer;\n  background-color: whitesmoke;\n  color: #fff;\n  border-radius: 50px;\n  border: 2px black solid;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n"]);return M=function(){return e},e}var Q=p.a.button(M());function R(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(r.useState)(null),f=Object(u.a)(l,2),p=f[0],d=f[1],b=Object(r.useState)({title:"",text:""}),g=Object(u.a)(b,2),h=g[0],x=g[1],v=function(){var e=H.getNotes();c(e)};Object(r.useEffect)(function(){v()},[]);var O=function(e){d(p===e?null:e)},j=function(){e.history.push("/form")},w=function(e){x(L({},h,Object(i.a)({},e.target.name,e.target.value)))},E=function(t){t.preventDefault(),H.saveNote(h),x({title:"",text:""}),v(),e.history.push("/")},y=function(t){var n=L({},t,{edit:!0});x(n),e.history.push("/form")};return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{notes:o,onSelect:O,selected:p,editNote:y}),a.a.createElement(Q,{onClick:j},a.a.createElement("img",{src:m.a,height:"50",alt:"pen"})))}}),a.a.createElement(s.a,{path:"/form",render:function(e){return a.a.createElement($,Object.assign({},e,{onChange:w,note:h,onSubmit:E}))}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(function(){return a.a.createElement(f.a,null,a.a.createElement(s.a,{component:R}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.3c424309.chunk.js.map