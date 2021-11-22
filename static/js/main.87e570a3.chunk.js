(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(9),o=c.n(s),r=c(7),i=c(2),l=(c(14),c(15),c(3)),d=c(0);var j=function(e){var t=e.addNotes,c=Object(a.useState)(!1),n=Object(i.a)(c,2),s=n[0],o=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"note-color",onClick:function(){return o(!s)},children:[Object(d.jsx)("h3",{children:"Selecciona un Color:"}),Object(d.jsx)(l.a,{className:"color-icon",size:"1.3em"})]}),Object(d.jsx)("div",{className:"note-list-colors ".concat(s?"active":""),children:Object(d.jsx)("ul",{children:["#fe9b72","#fec971"," #00d4fe","#b693fd","#e4ee91","#fe7272","#72b3fe"].map((function(e,c){return Object(d.jsx)("li",{className:"note-list-color",style:{backgroundColor:e},onClick:function(){return t(e)}},c)}))})})]})};var u=function(e){var t=e.handleAddNote,c=e.addNotes,n=e.characterLimit,s=Object(a.useState)(""),o=Object(i.a)(s,2),r=o[0],l=o[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)(j,{addNotes:c}),Object(d.jsx)("textarea",{value:r,onChange:function(e){var t=e.target.value;n-t.length>=0&&l(t)},cols:"10",rows:"8",placeholder:"Escribe Aqu\xed tu Nueva Nota..."}),Object(d.jsxs)("div",{className:"note-save",children:[Object(d.jsxs)("small",{children:[n-r.length," Restantes"]}),Object(d.jsx)("button",{onClick:function(){r.trim().length>0?(t(r),l("")):alert("Debes escribir algo para poder crear tu Nota :D")},className:"save",children:"Save"})]})]})};var b=function(e){var t=e.id,c=e.color,a=e.text,n=e.date,s=e.handleDeleteNote,o=e.updateText,r=e.characterLimit;return Object(d.jsxs)("div",{className:"note",style:{backgroundColor:c},children:[Object(d.jsx)("textarea",{className:"note-text",defaultValue:a,maxLength:r,cols:"4",rows:"9",onChange:function(e){var c=e.target.value;r-c.length>=0&&o(c,t)},placeholder:"Escribe Aqu\xed..."}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("div",{className:"note-words",children:Object(d.jsxs)("p",{children:[r-a.length," Restantes"]})}),Object(d.jsxs)("div",{className:"note-date",children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)(l.b,{className:"delete-icon",size:"1.3em",onClick:function(){return s(t)}})]})]})]},t)};var h=function(e){var t=e.notes,c=e.addNotes,a=e.handleAddNote,n=e.handleDeleteNote,s=e.updateText,o=e.characterLimit;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(b,{handleDeleteNote:n,updateText:s,handleAddNote:a,characterLimit:o,id:e.id,color:e.color,text:e.text,date:e.date},e.id)})),Object(d.jsx)(u,{handleAddNote:a,addNotes:c,characterLimit:o})]})},O=c(4);var x=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(l.c,{className:"search-icons",size:"1.3em"}),Object(d.jsx)("input",{type:"text",placeholder:"Busca tu Nota Aqu\xed...",onChange:function(e){var c=e.target.value;t(c)}})]})},f=(c(17),c.p+"static/media/logo.6ce24c58.svg");var v=function(e){var t=e.handleToggleDarkMode,c=e.theme;return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:f,className:"App-logo",alt:"logo"}),Object(d.jsx)("h3",{children:"Notes App"})]}),Object(d.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:c?"Modo Oscuro":"Modo Claro"})]})})};var N=function(){var e=[{id:Object(O.a)(),text:"",color:"#fe9b72",date:"14/11/2021"},{id:Object(O.a)(),text:"",color:"#fec971",date:"14/11/2021"},{id:Object(O.a)(),text:"",color:"#00d4fe",date:"14/11/2021"}],t=Object(a.useState)(e),c=Object(i.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],u=l[1],b=Object(a.useState)(!1),f=Object(i.a)(b,2),N=f[0],m=f[1],p=n.filter((function(e){return e.text.toLowerCase().includes(j.toLowerCase())}));return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app"));e&&s(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{className:N?"dark-mode":"App",children:[Object(d.jsx)(v,{handleToggleDarkMode:m,theme:N}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{handleSearchNote:u}),Object(d.jsx)(h,{notes:p,addNotes:function(e){var t=Object(r.a)(n),c=new Date;t.push({id:Object(O.a)(),text:"",date:c.toLocaleDateString(),color:e}),s(t)},handleAddNote:function(e){var t=new Date,c={id:Object(O.a)(),text:e,color:"",date:t.toLocaleDateString()},a=[].concat(Object(r.a)(n),[c]);s(a)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));s(t)},updateText:function(e,t){var c=Object(r.a)(n),a=c.findIndex((function(e){return e.id===t}));a<0||(c[a].text=e,s(c))},characterLimit:200})]})]})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.87e570a3.chunk.js.map