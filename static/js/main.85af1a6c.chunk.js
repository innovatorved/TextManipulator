(this.webpackJsonpTextManipulator=this.webpackJsonpTextManipulator||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(4),s=n.n(l),r=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," font-link"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"https://www.instagram.com/innovatorved/",target:"_blank",rel:"noopener noreferrer",className:"nav-link",children:e.cont})})]}),Object(o.jsxs)("div",{className:"form-check form-switch ",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"," mx-2"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s={color:"light"===e.mode?"#363845":"#DEE4CE"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:s,children:[Object(o.jsx)("h2",{htmlFor:"mybox",className:"font-link",children:Object(o.jsx)("b",{children:e.heading})}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{style:{backgroundColor:"dark"===e.mode?"#667574":"white",color:"dark"===e.mode?"white":"black"},spellCheck:"false",className:"form-control",value:c,onChange:function(e){l(e.target.value)},id:"mybox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2 ",onClick:function(){l(c.toUpperCase())},children:"Convert to Upper Case"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){l(c.toLowerCase())},children:"Convert to Lower Case"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){var e=c.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)}));l(e.join(" "))},children:"Change into Title Case"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){var e=c.split(/[ ]+/).join(" ");l(e)},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){var e=c.split(/["\n"]+/).join("\n");l(e)},children:"Remove Extra Lines"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text Copied !","success")},title:"Copt Text To ClipBoard",children:"Copy to Clipboard"}),Object(o.jsx)("button",{className:"btn btn-primary me-auto mb-2 mb-lg-0 mx-2",onClick:function(){l(""),e.showAlert("Text Cleared !","warning")},children:"Clear"})]}),Object(o.jsxs)("div",{className:"container my-3 ",style:s,children:[Object(o.jsx)("h2",{className:"font-link",children:"Text Summary"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:c.split(" ").filter((function(e,t,n){return""!==e})).length})," Words | ",Object(o.jsx)("b",{children:c.length})," Characters | ",Object(o.jsx)("b",{children:0===c.length?0:c.split("\n").length})," line"]}),Object(o.jsxs)("p",{children:["Average time to read ",Object(o.jsxs)("b",{children:[0===c.length?0:.008*c.split(" ").length,"m"]})]}),Object(o.jsx)("h3",{className:"font-link",children:"Wanna Read"}),Object(o.jsx)("p",{children:c.length>0?c:"---\x3e Enter something in textbox to Preview"})]})]})}i.defaultProps={cont:"Set-cont-Here",mode:"light"};function m(e){return e.alertMsg&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alertMsg.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[(t=e.alertMsg.type,t.charAt(0).toUpperCase()+t.slice(1))," "]})," ",e.alertMsg.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})});var t}var d=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),s=Object(r.a)(l,2),d=s[0],j=s[1],h=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextManipulator",cont:"Contact",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#32383e",h("Dark Mode is Enable","success")):(c("light"),document.body.style.backgroundColor="#eef2e4",h("Bright Mode is Enable","success"))}}),Object(o.jsx)(m,{alertMsg:d}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter the text to analyze below ",mode:n,showAlert:h})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.85af1a6c.chunk.js.map