(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"12+E":function(e,a,l){"use strict";l.r(a);var t=l("q1tI"),m=l.n(t),n=l("Zttt"),s=l("RXmK"),c=l("/d1K"),r=l("Wbzz"),o=l("wx14"),i=l("zLVn"),d=l("TSYQ"),x=l.n(d),u=l("vUet"),E=/-(.)/g;var f=function(e){return e[0].toUpperCase()+(a=e,a.replace(E,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function N(e,a){var l=void 0===a?{}:a,t=l.displayName,n=void 0===t?f(e):t,s=l.Component,c=l.defaultProps,r=m.a.forwardRef((function(a,l){var t=a.className,n=a.bsPrefix,c=a.as,r=void 0===c?s||"div":c,d=Object(i.a)(a,["className","bsPrefix","as"]),E=Object(u.a)(n,e);return m.a.createElement(r,Object(o.a)({ref:l,className:x()(t,E)},d))}));return r.defaultProps=c,r.displayName=n,r}var p=function(e){return m.a.forwardRef((function(a,l){return m.a.createElement("div",Object(o.a)({},a,{ref:l,className:x()(a.className,e)}))}))},b=l("Wzyw"),v=m.a.forwardRef((function(e,a){var l=e.bsPrefix,t=e.className,n=e.variant,s=e.as,c=void 0===s?"img":s,r=Object(i.a)(e,["bsPrefix","className","variant","as"]),d=Object(u.a)(l,"card-img");return m.a.createElement(c,Object(o.a)({ref:a,className:x()(n?d+"-"+n:d,t)},r))}));v.displayName="CardImg",v.defaultProps={variant:null};var g=v,y=p("h5"),j=p("h6"),h=N("card-body"),w=N("card-title",{Component:y}),z=N("card-subtitle",{Component:j}),P=N("card-link",{Component:"a"}),O=N("card-text",{Component:"p"}),S=N("card-header"),R=N("card-footer"),k=N("card-img-overlay"),C=m.a.forwardRef((function(e,a){var l=e.bsPrefix,n=e.className,s=e.bg,c=e.text,r=e.border,d=e.body,E=e.children,f=e.as,N=void 0===f?"div":f,p=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(u.a)(l,"card"),g=Object(t.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return m.a.createElement(b.a.Provider,{value:g},m.a.createElement(N,Object(o.a)({ref:a},p,{className:x()(n,v,s&&"bg-"+s,c&&"text-"+c,r&&"border-"+r)}),d?m.a.createElement(h,null,E):E))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=g,C.Title=w,C.Subtitle=z,C.Body=h,C.Link=P,C.Text=O,C.Header=S,C.Footer=R,C.ImgOverlay=k;var T=C,B=["xl","lg","md","sm","xs"],M=m.a.forwardRef((function(e,a){var l=e.bsPrefix,t=e.className,n=e.noGutters,s=e.as,c=void 0===s?"div":s,r=Object(i.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(u.a)(l,"row"),E=d+"-cols",f=[];return B.forEach((function(e){var a,l=r[e];delete r[e];var t="xs"!==e?"-"+e:"";null!=(a=null!=l&&"object"==typeof l?l.cols:l)&&f.push(""+E+t+"-"+a)})),m.a.createElement(c,Object(o.a)({ref:a},r,{className:x.a.apply(void 0,[t,d,n&&"no-gutters"].concat(f))}))}));M.displayName="Row",M.defaultProps={noGutters:!1};var I=M,J=["xl","lg","md","sm","xs"],U=m.a.forwardRef((function(e,a){var l=e.bsPrefix,t=e.className,n=e.as,s=void 0===n?"div":n,c=Object(i.a)(e,["bsPrefix","className","as"]),r=Object(u.a)(l,"col"),d=[],E=[];return J.forEach((function(e){var a,l,t,m=c[e];if(delete c[e],"object"==typeof m&&null!=m){var n=m.span;a=void 0===n||n,l=m.offset,t=m.order}else a=m;var s="xs"!==e?"-"+e:"";a&&d.push(!0===a?""+r+s:""+r+s+"-"+a),null!=t&&E.push("order"+s+"-"+t),null!=l&&E.push("offset"+s+"-"+l)})),d.length||d.push(r),m.a.createElement(s,Object(o.a)({},c,{ref:a,className:x.a.apply(void 0,[t].concat(d,E))}))}));U.displayName="Col";var W=U,L=l("R77S"),G=l("07K2"),H=l("BiM1");a.default=function(){return m.a.createElement(n.a,null,m.a.createElement(c.a,null),m.a.createElement(s.a,null,m.a.createElement("div",{className:"d-flex align-items-center pb-4"},m.a.createElement("h1",{className:"my-4"},"In a galaxy far away..."),m.a.createElement(r.Link,{to:"resume",className:"mt-3 ml-auto btn-outline-dark btn btn-lg"},m.a.createElement(H.f,null),m.a.createElement("span",{className:"mx-2"},"Resume"))),m.a.createElement(T,{className:"mb-4"},m.a.createElement(T.Header,null,m.a.createElement(H.e,null),m.a.createElement("span",{className:"mx-3"},"Work")),m.a.createElement(T.Body,null,m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"Software Engineer, Appfolio"),m.a.createElement("span",{className:"ml-auto"},"July, 2019 - Now")),m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"Teaching Assistent (CS300), UW-Madison"),m.a.createElement("span",{className:"ml-auto"},"Jan, 2019 - May, 2019 ")),m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"Software Engineer Intern, Markable AI"),m.a.createElement("span",{className:"ml-auto"},"July, 2018 - Sep, 2018 ")))),m.a.createElement(T,{className:"mb-4"},m.a.createElement(T.Header,null,m.a.createElement(H.e,null),m.a.createElement("span",{className:"mx-3"},"Education")),m.a.createElement(T.Body,null,m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"M.S in Computer Science, UW-Madison"),m.a.createElement("span",{className:"ml-auto"},"2016 - 2019")),m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"M.S in Industrial Engineering, UW-Madison"),m.a.createElement("span",{className:"ml-auto"},"2016 - 2019")),m.a.createElement(T.Text,{className:"d-flex"},m.a.createElement("span",{className:"mx-3"},"B.S in Bioenvironmental Systems Engineering, NTU"),m.a.createElement("span",{className:"ml-auto"},"2011 - 2015")))),m.a.createElement(T,null,m.a.createElement(T.Header,null,m.a.createElement(H.j,null),m.a.createElement("span",{className:"mx-3"},"Skills")),m.a.createElement(T.Body,null,m.a.createElement(I,{className:"mx-2 mb-3"},m.a.createElement("li",null,"Web Developement")),m.a.createElement(I,null,m.a.createElement(W,{className:"mx-2 d-flex flex-column align-middle"},m.a.createElement(L.h,{size:"4em"}),m.a.createElement("span",{className:"mx-2"},"React")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.j,{className:"mx-2",size:"4em"}),m.a.createElement("span",{className:"mx-3"},"Rails")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(H.i,{className:"mx-2",size:"4em"}),m.a.createElement("span",{className:"mx-2"},"Node.js")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.a,{className:"mx-2",size:"4em"}),"BootStrap"),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(G.a,{className:"mx-2",size:"4em"}),"GraphQl")),m.a.createElement(I,{className:"mx-2 my-3"},m.a.createElement("li",null,"Programming Languages")),m.a.createElement(I,null,m.a.createElement(W,{className:"mx-2 d-flex flex-column align-middle"},m.a.createElement(L.g,{size:"4em"}),m.a.createElement("span",{className:"mx-2"},"Python")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.d,{size:"4em"}),"Javascript"),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.k,{className:"mx-2",size:"4em"}),m.a.createElement("span",{className:"mx-4"},"Ruby")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.c,{size:"4em"}),m.a.createElement("span",{className:"mx-3"},"Java")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.f,{size:"4em"}),m.a.createElement("span",{className:"mx-3"},"SQL"))),m.a.createElement(I,{className:"mx-2 my-3"},m.a.createElement("li",null,"Tools")),m.a.createElement(I,null,m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.i,{size:"4em"}),m.a.createElement("span",{className:"mx-2"},"Redis")),m.a.createElement(W,{className:"mx-2 d-flex flex-column align-middle"},m.a.createElement(L.l,{size:"4em"}),m.a.createElement("span",{className:"mx-2"},"Spark")),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(H.c,{size:"4em"}),"Docker"),m.a.createElement(W,{className:"mx-2 d-flex flex-column"},m.a.createElement(L.b,{className:"mx-2",size:"4em"}),m.a.createElement("span",{className:"mx-4"},"Git")),m.a.createElement(W,{className:"mx-2"},m.a.createElement(L.e,{className:"mx-2",size:"4em"}),m.a.createElement("span",{className:"mx-4"},"Linux")))))))}}}]);
//# sourceMappingURL=component---src-components-page-about-js-06acae28c7b9b9f6d3d8.js.map