(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(13),a=n.n(c),i=n(7),s=n(15),b=n(20),d=n(1),l=n(21),u=Object(i.b)({key:"category",default:"To Do"}),j=Object(l.recoilPersist)({key:"toDos",storage:localStorage}).persistAtom,f=Object(i.b)({key:"toDo",default:[],effects_UNSTABLE:[j]}),h=Object(i.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(f),o=t(u);return n.filter((function(e){return e.category===o}))}}),O=Object(i.b)({key:"customCategories",default:["To Do","Doing","Done"]}),g=n(5),p=n(14),m=n(4);var x=function(){var e=Object(i.f)(f),t=Object(i.e)(u),n=Object(p.a)(),o=n.register,r=n.handleSubmit,c=n.setValue;return Object(m.jsxs)("form",{onSubmit:r((function(n){var o=n.toDo;e((function(e){return[{text:o,id:Date.now(),category:t}].concat(Object(g.a)(e))})),c("toDo","")})),children:[Object(m.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(m.jsx)("button",{children:"Add"})]})};var y=function(e){var t=e.text,n=e.category,o=e.id,r=Object(i.f)(f),c=Object(i.e)(O),a=function(e){var n=e.currentTarget.name;r((function(e){var r=e.findIndex((function(e){return e.id===o})),c={text:t,id:o,category:n};return[].concat(Object(g.a)(e.slice(0,r)),[c],Object(g.a)(e.slice(r+1)))}))};return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t}),c.map((function(e){return n!==e&&Object(m.jsx)("button",{name:e,onClick:a,children:e})}))]},o)};var v=function(){var e=Object(i.e)(h);return console.log(e),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"To Dos"}),Object(m.jsx)("hr",{}),Object(m.jsx)(x,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(y,Object(d.a)({},e),e.id)}))]})},k=n(3);var C,D=function(){var e=Object(i.d)(O),t=Object(k.a)(e,2),n=t[0],o=t[1],r=Object(i.d)(u),c=Object(k.a)(r,2),a=c[0],s=c[1],b=Object(p.a)(),l=b.register,j=b.handleSubmit,f=b.setValue;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Custom Category"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{onSubmit:j((function(e){var t=e.addCategory;o((function(e){return[].concat(Object(g.a)(e),[t])})),f("addCategory","")})),children:[Object(m.jsx)("select",{value:a,onInput:function(e){s(e.currentTarget.value)},children:n.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))}),Object(m.jsx)("input",Object(d.a)(Object(d.a)({},l("addCategory")),{},{placeholder:"Write a category to add"})),Object(m.jsx)("button",{children:"Add"})]})]})},S=Object(s.b)(C||(C=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var w=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)(D,{}),Object(m.jsx)("br",{}),Object(m.jsx)(v,{})]})};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(m.jsx)(w,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.95093dec.chunk.js.map