"use strict";(self.webpackChunkpharmacy_shop=self.webpackChunkpharmacy_shop||[]).push([[974],{9974:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});var r,s,i,l,c,a=n(4420),u=n(2202),o=n(2580),d={allPharmaciesListDiv:"PharmaciesList_allPharmaciesListDiv__GRnVQ",pharmaciesHlll:"PharmaciesList_pharmaciesHlll__oavoJ",pharmaciesUl:"PharmaciesList_pharmaciesUl__Bzm-Q",pharmaciesLi:"PharmaciesList_pharmaciesLi__zBPjA",phormasyButton:"PharmaciesList_phormasyButton__ryQfU",phormasyButtonAct:"PharmaciesList_phormasyButtonAct__bK8h8"},f=n(2791),p=n(1473),h=n(184),x=function(e){var t=e.pharmacy,n=(0,a.I0)(),r=(0,a.v9)(o.W6),s=(0,a.v9)(o.aD),i=(0,f.useRef)(null);return(0,f.useEffect)((function(){if(i.current){var e=i.current;e.style.width=s/9.6+"px",e.style.height=s/29+"px",e.style.fontSize=s/103+"px",t.id===r?e.classList.add(d.phormasyButtonAct):e.classList.remove(d.phormasyButtonAct)}})),(0,h.jsx)("button",{ref:i,className:d.phormasyButton,type:"button",onClick:function(){return e=t.id,void n((0,p._s)(e));var e},children:t.name})},v=function(){var e=(0,a.v9)(o.OD),t=(0,a.I0)(),n=(0,a.v9)(o.W6),r=(0,a.v9)(o.aD),s=(0,a.v9)(o.OL),i=(0,f.useRef)(null),l=(0,f.useRef)(null),c=(0,f.useRef)(null),u=(0,f.useRef)(null);return(0,f.useEffect)((function(){var t=e.map((function(e){return e.id}));if(i.current&&l.current&&c.current&&u.current){var a=i.current,o=l.current,f=c.current;a.style.height="".concat(s-s/3,"px"),o.style.margin="".concat(r/72,"px 0 0 0"),o.style.fontSize="".concat(r/80,"px"),f.style.padding="".concat(r/72,"px ").concat(r/48,"px"),f.style.gap="".concat(r/72,"px");var p=u.current;p.style.width=r/9.6+"px",p.style.height=r/29+"px",p.style.fontSize=r/103+"px",t.includes(n)?p.classList.remove(d.phormasyButtonAct):p.classList.add(d.phormasyButtonAct)}})),(0,h.jsx)("div",{ref:i,className:[d.allPharmaciesListDiv,"allPharmaciesListDiv"].join(" "),children:e.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{ref:l,className:d.pharmaciesHlll,children:"Pharmacies"}),(0,h.jsxs)("ul",{ref:c,className:d.pharmaciesUl,children:[(0,h.jsx)("li",{className:d.pharmaciesLi,children:(0,h.jsx)("button",{ref:u,className:d.phormasyButton,type:"button",onClick:function(){t((0,p._s)(""))},children:"All pharmacies"})}),e.map((function(e){return(0,h.jsx)("li",{className:d.pharmaciesLi,children:(0,h.jsx)(x,{pharmacy:e})},e.id)}))]})]}):(0,h.jsx)("p",{children:"No pharmacies found"})})},m=n(3433),y=n(9439),_={allDrugsListDiv:"DrugsList_allDrugsListDiv__E4Lwl",drugsUl:"DrugsList_drugsUl__-etsM"},j="Drug_drugLi__Dxa3K",g="Drug_drugDiv__LOWKM",A="Drug_favoriteBut__3I3NY",b="Drug_isFavorite__r6vaN",L="Drug_drugImg__U65Fi",w="Drug_addToBackedBut__vi6OH",D="Drug_divAddToBackedBut__J8JyQ",F="Drug_divDelToBackedBut__hu0aJ",N="Drug_infoDrug__R2Dp6",R="Drug_pInfoDrug__RtNQu",k=n(2985),S=function(e){var t=e.drug,n=(0,a.I0)(),r=(0,a.v9)(o.cI),s=(0,a.v9)(o.Jp),i=(0,a.v9)(o.aD),l=r.includes(t.id),c=s.some((function(e){return e.id===t.id})),u=(0,f.useRef)(null),d=(0,f.useRef)(null),p=(0,f.useRef)(null),x=(0,f.useRef)(null),v=(0,f.useRef)(null),m=(0,f.useRef)(null),y=(0,f.useRef)(null),_=function(e){l?function(e){n((0,k.Do)(e))}(e):function(e){n((0,k.Vz)(e))}(e)},S=function(e){c?function(e){n((0,k.lH)(e))}(e):function(e){n((0,k.E4)(e))}(e)};return(0,f.useEffect)((function(){if(u.current&&d.current&&p.current&&x.current&&v.current&&m.current&&y.current){var e=m.current,t=d.current,n=u.current,r=p.current,s=x.current,a=v.current,o=y.current,f=document.querySelector(".drugsUl");if(f){var h=(f.clientWidth-i/45*2-i/29)/2;console.log("realScreenWidth: ",i),console.log("drugsUl.clientWidth: ",f.clientWidth),console.log("widthSize: ",h),e.style.width="".concat(h,"px"),e.style.height="".concat(1.176*h,"px")}t.style.fontSize=i/103+"px",e.style.paddingBottom=i/72+"px",n.style.height=i/24+"px",n.style.gap=i/288+"px",n.style.right=i/72+"px",n.style.bottom=i/72+"px",n.style.borderRadius=i/72+"px",n.style.fontSize=i/80+"px",n.style.padding="0 ".concat(i/144,"px 0 ").concat(i/96,"px"),r.style.width=i/48+"px",s.style.width=i/48+"px",s.style.height=i/48+"px",s.style.right=i/72+"px",s.style.top=i/72+"px",a.style.marginLeft=i/72+"px",a.style.gap=i/144+"px",o.style.margin=i/35+"px",l?s.classList.add(b):s.classList.remove(b),c?r.classList.add(F):r.classList.remove(F)}})),(0,h.jsx)("li",{ref:m,className:j,children:(0,h.jsxs)("div",{ref:d,className:g,children:[(0,h.jsx)("button",{type:"button",ref:x,className:A,onClick:function(){return _(t.id)}}),(0,h.jsx)("img",{ref:y,className:L,src:t.image,alt:t.name}),(0,h.jsxs)("div",{ref:v,className:N,children:[(0,h.jsx)("p",{className:R,children:(0,h.jsx)("b",{children:t.name})}),(0,h.jsxs)("p",{className:R,children:[(0,h.jsx)("b",{children:"Price: "}),t.price," \u20b4"]}),(0,h.jsxs)("p",{className:R,children:[(0,h.jsx)("b",{children:"Manufacturing date:"})," ",t.dataWasAdded]})]}),(0,h.jsxs)("button",{type:"button",ref:u,className:w,onClick:function(){return S(t)},children:[c?(0,h.jsx)("span",{children:"Delete"}):(0,h.jsx)("span",{children:"Add"}),(0,h.jsx)("div",{ref:p,className:D})]})]})})},P=n(168),C=n(7924),E=(0,C.F4)(r||(r=(0,P.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),B=C.ZP.div(s||(s=(0,P.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),Z=C.ZP.div(i||(i=(0,P.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),z=C.ZP.div(l||(l=(0,P.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),E),U=(0,C.ZP)(z)(c||(c=(0,P.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),I=function(){return(0,h.jsx)(B,{children:(0,h.jsx)(Z,{children:(0,m.Z)(Array(8)).map((function(e,t){return(0,h.jsx)(U,{},t)}))})})},W=function(){var e=(0,a.v9)(o.$0),t=(0,a.v9)(o.cI),n=(0,a.v9)(o.AD),r=(0,a.v9)(o.lc),s=(0,a.v9)(o.ro),i=(0,a.v9)(o.S6),l=(0,a.v9)(o.OD),c=(0,a.v9)(o.W6),u=(0,a.v9)(o.xU),d=(0,a.v9)(o.OL),p=(0,a.v9)(o.aD),x=(0,f.useState)(e),v=(0,y.Z)(x,2),j=v[0],g=v[1],A=(0,f.useState)([]),b=(0,y.Z)(A,2),L=b[0],w=b[1],D=(0,f.useState)([]),F=(0,y.Z)(D,2),N=F[0],R=F[1],k=(0,f.useRef)(t),P=(0,f.useRef)(null);(0,f.useEffect)((function(){var t=(0,m.Z)(e);if(""!==c){var a=l.find((function(e){return e.id===c}));t=(0,m.Z)(a.available)}if(t.length>0){var u=function(e){var t=e.split(".");return new Date(t[2],t[1]-1,t[0])};switch(r){case"a":t.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"z":t.sort((function(e,t){return t.name.localeCompare(e.name)}))}switch(s){case"l":t.sort((function(e,t){return parseFloat(e.price.replace(",","."))-parseFloat(t.price.replace(",","."))}));break;case"h":t.sort((function(e,t){return parseFloat(t.price.replace(",","."))-parseFloat(e.price.replace(",","."))}))}switch(i){case"w":t.sort((function(e,t){return u(t.dataWasAdded)-u(e.dataWasAdded)}));break;case"o":t.sort((function(e,t){return u(e.dataWasAdded)-u(t.dataWasAdded)}))}n.length>0?g(t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))):g(t)}}),[n,e,r,s,i,c,l]),(0,f.useEffect)((function(){k.current.length>0&&(w(j.filter((function(e){return k.current.includes(e.id)}))),R(j.filter((function(e){return!k.current.includes(e.id)}))))}),[j,n,e,r]);var C=(0,f.useRef)(null),E=(0,f.useRef)(null);return(0,f.useEffect)((function(){if(C.current){var e=document.querySelector(".allPharmaciesListDiv"),t=C.current;if(t.style.height="".concat(d-d/3,"px"),e&&(t.style.width="".concat(p-e.clientWidth-40,"px")),t.style.margin="0 0 0 ".concat(p/72,"px"),E.current){var n=E.current;n.style.width="".concat(t.clientWidth-p/48*2,"px"),n.style.padding="".concat(p/72,"px ").concat(p/48,"px"),n.style.gap="".concat(p/72,"px ").concat(p/29,"px")}}P.current&&(P.current.style.fontSize=p/42+"px")})),(0,h.jsx)("div",{ref:C,className:_.allDrugsListDiv,children:u?(0,h.jsx)(I,{}):j.length>0?L.length>0?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("ul",{ref:E,className:[_.drugsUl,"drugsUl"].join(" "),children:[L.map((function(e){return(0,h.jsx)(S,{drug:e},e.id+1e9*Math.random())})),N.map((function(e){return(0,h.jsx)(S,{drug:e},e.id+1e9*Math.random())}))]})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{ref:E,className:[_.drugsUl,"drugsUl"].join(" "),children:j.map((function(e){return(0,h.jsx)(S,{drug:e},e.id+1e9*Math.random())}))})}):(0,h.jsx)("p",{ref:P,children:"No drugs found"})})},O="Shop_allShopDiv__-Okbb",q="Filter_inputFilter__8QMOp",H=function(){var e=(0,a.v9)(o.AD),t=(0,a.v9)(o.aD),n=(0,a.I0)(),r=(0,f.useState)(""),s=(0,y.Z)(r,2),i=s[0],l=s[1],c=(0,f.useRef)(null);return(0,f.useEffect)((function(){if(l(t>465?"Please start typing the desired name":t<=465&&t>370?"Please start typing name":"Type name"),c.current){var e=c.current;e.style.borderRadius=t/100+"px",e.style.width=t/2+"px",e.style.height=t/25+"px",e.style.padding="0 ".concat(t/100,"px"),e.style.margin="".concat(t/50,"px 0"),e.style.fontSize="".concat(t/71,"px")}}),[t]),(0,h.jsx)("input",{ref:c,value:e,className:q,type:"text",name:"filter",placeholder:i,onChange:function(e){e.preventDefault();var t=e.target.value;n((0,p.Tv)(t))}})},J="FilterAlf_allFiltAlf__idDN7",M="FilterAlf_secAllDiv__PX7Lw",T="FilterAlf_allButtonFA__sV2Ai",V="FilterAlf_allButtonFAAct__C1yhB",G="FilterAlf_divArrow__fkkZy",Q="FilterAlf_divArrowAct__n+tDs",K="FilterAlf_divDrL__vVc+q",X="FilterAlf_divDrLAct__9oLFa",Y={ulDrL:"DropListAlf_ulDrL__uJXav",buttonFA:"DropListAlf_buttonFA__gwb2L"},$=function(){var e=(0,a.I0)(),t=(0,a.v9)(o.aD),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=function(t){e((0,p.do)(t)),e((0,p.i_)("n")),e((0,p.GS)("n"))};return(0,f.useEffect)((function(){if(n.current&&r.current&&s.current){var e=n.current,i=r.current,l=s.current,c=document.querySelectorAll(".buttonFA"),a=document.querySelectorAll(".divArrow");e.style.width=t/10+"px",e.style.borderRadius=t/100+"px",i.style.borderRadius="".concat(t/111,"px ").concat(t/111,"px 0 0"),l.style.borderRadius="0 0 ".concat(t/111,"px ").concat(t/111,"px"),c&&c.forEach((function(e){e.style.width=t/10+"px",e.style.fontSize=t/71+"px",e.style.height=t/24+"px",e.style.gap=t/66.67+"px",e.style.paddingLeft=t/200+"px"})),a&&a.forEach((function(e){e.style.width=t/50+"px",e.style.height=t/50+"px"}))}})),(0,h.jsxs)("ul",{ref:n,className:Y.ulDrL,children:[(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:r,className:[Y.buttonFA,Y.firstChild,"buttonFA"].join(" "),onClick:function(){i("a")},children:[(0,h.jsx)("p",{children:"A to Z"}),(0,h.jsx)("div",{className:[Y.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",className:[Y.buttonFA,"buttonFA"].join(" "),onClick:function(){i("z")},children:[(0,h.jsx)("p",{children:"Z to A"}),(0,h.jsx)("div",{className:[Y.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:s,className:[Y.buttonFA,Y.lastChild,"buttonFA"].join(" "),onClick:function(){i("n")},children:[(0,h.jsx)("p",{children:"Reset"}),(0,h.jsx)("div",{className:[Y.divArrow,"divArrow"].join(" ")})]})})]})},ee=function(){var e=(0,f.useRef)(null),t=(0,f.useRef)(null),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=(0,a.v9)(o.aD),l=(0,a.v9)(o.lc),c=(0,f.useState)(!1),u=(0,y.Z)(c,2),d=u[0],p=u[1],x="A to Z",v=(0,f.useState)(x),m=(0,y.Z)(v,2),_=m[0],j=m[1];(0,f.useEffect)((function(){if(n.current)switch(l){case"a":j(x),n.current.classList.add(V);break;case"z":j("Z to A"),n.current.classList.add(V);break;default:j(x),n.current.classList.remove(V)}}),[l]),(0,f.useEffect)((function(){if(e.current&&t.current&&n.current&&s.current&&r.current){var l=e.current,c=t.current,a=n.current,u=s.current,o=r.current;l.style.height=i/24+"px",l.style.width=i/10+"px",c.style.height=i/5+"px",c.style.width=i/9.1+"px",a.style.fontSize=i/71+"px",a.style.width=i/10+"px",a.style.height=i/24+"px",a.style.gap=i/66.67+"px",a.style.paddingLeft=i/200+"px",a.style.borderRadius=i/100+"px",u.style.height=i/50+"px",u.style.width=i/50+"px",o.style.borderRadius=i/100+"px"}}));var g=function e(){r.current&&s.current&&(r.current.classList.remove(X),s.current.classList.remove(Q),window.removeEventListener("click",e),p(!1))};return(0,h.jsx)("div",{ref:e,className:J,children:(0,h.jsxs)("div",{ref:t,className:M,children:[(0,h.jsxs)("button",{type:"button",ref:n,className:T,onClick:function(){d?g():r.current&&s.current&&setTimeout((function(){p(!0),r.current.classList.add(X),s.current.classList.add(Q),window.addEventListener("click",g)}),0)},children:[(0,h.jsx)("p",{children:_}),(0,h.jsx)("div",{ref:s,className:G})]}),(0,h.jsx)("div",{ref:r,className:K,children:(0,h.jsx)($,{})})]})})},te="FilterPrice_allFiltAlf__co4LR",ne="FilterPrice_secAllDiv__YmL13",re="FilterPrice_allButtonFA__G+XRt",se="FilterPrice_allButtonFAAct__+vu-C",ie="FilterPrice_divArrow__hIrJ5",le="FilterPrice_divArrowAct__NYeVm",ce="FilterPrice_divDrL__3zg+G",ae="FilterPrice_divDrLAct__IkK3P",ue={ulDrL:"DropListPrice_ulDrL__rDk-S",buttonFA:"DropListPrice_buttonFA__6P-H4"},oe=function(){var e=(0,a.I0)(),t=(0,a.v9)(o.aD),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=function(t){e((0,p.i_)(t)),e((0,p.do)("n")),e((0,p.GS)("n"))};return(0,f.useEffect)((function(){if(n.current&&r.current&&s.current){var e=n.current,i=r.current,l=s.current,c=document.querySelectorAll(".buttonFA"),a=document.querySelectorAll(".divArrow");e.style.width=t/10+"px",e.style.borderRadius=t/100+"px",i.style.borderRadius="".concat(t/111,"px ").concat(t/111,"px 0 0"),l.style.borderRadius="0 0 ".concat(t/111,"px ").concat(t/111,"px"),c&&c.forEach((function(e){e.style.width=t/10+"px",e.style.fontSize=t/71+"px",e.style.height=t/24+"px",e.style.gap=t/66.67+"px",e.style.paddingLeft=t/200+"px"})),a&&a.forEach((function(e){e.style.width=t/50+"px",e.style.height=t/50+"px"}))}})),(0,h.jsxs)("ul",{ref:n,className:ue.ulDrL,children:[(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:r,className:[ue.buttonFA,ue.firstChild,"buttonFA"].join(" "),onClick:function(){i("l")},children:[(0,h.jsx)("p",{children:"L to H"}),(0,h.jsx)("div",{className:[ue.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",className:[ue.buttonFA,"buttonFA"].join(" "),onClick:function(){i("h")},children:[(0,h.jsx)("p",{children:"H to L"}),(0,h.jsx)("div",{className:[ue.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:s,className:[ue.buttonFA,ue.lastChild,"buttonFA"].join(" "),onClick:function(){i("n")},children:[(0,h.jsx)("p",{children:"Reset"}),(0,h.jsx)("div",{className:[ue.divArrow,"divArrow"].join(" ")})]})})]})},de=function(){var e=(0,f.useRef)(null),t=(0,f.useRef)(null),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=(0,f.useState)(!1),l=(0,y.Z)(i,2),c=l[0],u=l[1],d="L to H",p=(0,f.useState)(d),x=(0,y.Z)(p,2),v=x[0],m=x[1],_=(0,a.v9)(o.ro),j=(0,a.v9)(o.aD);(0,f.useEffect)((function(){if(n.current)switch(_){case"l":m(d),n.current.classList.add(se);break;case"h":m("H to L"),n.current.classList.add(se);break;default:m(d),n.current.classList.remove(se)}}),[_]),(0,f.useEffect)((function(){if(e.current&&t.current&&n.current&&s.current&&r.current){var i=e.current,l=t.current,c=n.current,a=s.current,u=r.current;i.style.height=j/24+"px",i.style.width=j/10+"px",l.style.height=j/5+"px",l.style.width=j/9.1+"px",c.style.fontSize=j/71+"px",c.style.width=j/10+"px",c.style.height=j/24+"px",c.style.gap=j/66.67+"px",c.style.paddingLeft=j/200+"px",c.style.borderRadius=j/100+"px",a.style.height=j/50+"px",a.style.width=j/50+"px",u.style.borderRadius=j/100+"px"}}));var g=function e(){r.current&&s.current&&(r.current.classList.remove(ae),s.current.classList.remove(le),window.removeEventListener("click",e),u(!1))};return(0,h.jsx)("div",{ref:e,className:te,children:(0,h.jsxs)("div",{ref:t,className:ne,children:[(0,h.jsxs)("button",{type:"button",ref:n,className:re,onClick:function(){c?g():r.current&&s.current&&setTimeout((function(){u(!0),r.current.classList.add(ae),s.current.classList.add(le),window.addEventListener("click",g)}),0)},children:[(0,h.jsx)("p",{children:v}),(0,h.jsx)("div",{ref:s,className:ie})]}),(0,h.jsx)("div",{ref:r,className:ce,children:(0,h.jsx)(oe,{})})]})})},fe="FilterDate_allFiltAlf__bF5bg",pe="FilterDate_secAllDiv__v2VGg",he="FilterDate_allButtonFA__AXd1R",xe="FilterDate_allButtonFAAct__b92rs",ve="FilterDate_divArrow__VFZMu",me="FilterDate_divArrowAct__UUKUR",ye="FilterDate_divDrL__ekd30",_e="FilterDate_divDrLAct__pJ9Vm",je={ulDrL:"DropListDate_ulDrL__6FRpr",buttonFA:"DropListDate_buttonFA__yAJq4"},ge=function(){var e=(0,a.I0)(),t=(0,a.v9)(o.aD),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=function(t){e((0,p.GS)(t)),e((0,p.do)("n")),e((0,p.i_)("n"))};return(0,f.useEffect)((function(){if(n.current&&r.current&&s.current){var e=n.current,i=r.current,l=s.current,c=document.querySelectorAll(".buttonFA"),a=document.querySelectorAll(".divArrow");e.style.width=t/10+"px",e.style.borderRadius=t/100+"px",i.style.borderRadius="".concat(t/111,"px ").concat(t/111,"px 0 0"),l.style.borderRadius="0 0 ".concat(t/111,"px ").concat(t/111,"px"),c&&c.forEach((function(e){e.style.width=t/10+"px",e.style.fontSize=t/71+"px",e.style.height=t/24+"px",e.style.gap=t/66.67+"px",e.style.paddingLeft=t/200+"px"})),a&&a.forEach((function(e){e.style.width=t/50+"px",e.style.height=t/50+"px"}))}})),(0,h.jsxs)("ul",{ref:n,className:je.ulDrL,children:[(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:r,className:[je.buttonFA,je.firstChild,"buttonFA"].join(" "),onClick:function(){i("w")},children:[(0,h.jsx)("p",{children:"N to O"}),(0,h.jsx)("div",{className:[je.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",className:[je.buttonFA,"buttonFA"].join(" "),onClick:function(){i("o")},children:[(0,h.jsx)("p",{children:"O to N"}),(0,h.jsx)("div",{className:[je.divArrow,"divArrow"].join(" ")})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{type:"button",ref:s,className:[je.buttonFA,je.lastChild,"buttonFA"].join(" "),onClick:function(){i("n")},children:[(0,h.jsx)("p",{children:"Reset"}),(0,h.jsx)("div",{className:[je.divArrow,"divArrow"].join(" ")})]})})]})},Ae=function(){var e=(0,f.useRef)(null),t=(0,f.useRef)(null),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),i=(0,f.useState)(!1),l=(0,y.Z)(i,2),c=l[0],u=l[1],d="N to O",p=(0,f.useState)(d),x=(0,y.Z)(p,2),v=x[0],m=x[1],_=(0,a.v9)(o.S6),j=(0,a.v9)(o.aD);(0,f.useEffect)((function(){if(n.current)switch(_){case"w":m(d),n.current.classList.add(xe);break;case"o":m("O to N"),n.current.classList.add(xe);break;default:m(d),n.current.classList.remove(xe)}}),[_]),(0,f.useEffect)((function(){if(e.current&&t.current&&n.current&&s.current&&r.current){var i=e.current,l=t.current,c=n.current,a=s.current,u=r.current;i.style.height=j/24+"px",i.style.width=j/10+"px",l.style.height=j/5+"px",l.style.width=j/9.1+"px",c.style.fontSize=j/71+"px",c.style.width=j/10+"px",c.style.height=j/24+"px",c.style.gap=j/66.67+"px",c.style.paddingLeft=j/200+"px",c.style.borderRadius=j/100+"px",a.style.height=j/50+"px",a.style.width=j/50+"px",u.style.borderRadius=j/100+"px"}}));var g=function e(){r.current&&s.current&&(r.current.classList.remove(_e),s.current.classList.remove(me),window.removeEventListener("click",e),u(!1))};return(0,h.jsx)("div",{ref:e,className:fe,children:(0,h.jsxs)("div",{ref:t,className:pe,children:[(0,h.jsxs)("button",{type:"button",ref:n,className:he,onClick:function(){c?g():r.current&&s.current&&setTimeout((function(){u(!0),r.current.classList.add(_e),s.current.classList.add(me),window.addEventListener("click",g)}),0)},children:[(0,h.jsx)("p",{children:v}),(0,h.jsx)("div",{ref:s,className:ve})]}),(0,h.jsx)("div",{ref:r,className:ye,children:(0,h.jsx)(ge,{})})]})})},be="Filters_allFilters__6nONa",Le=function(){var e=(0,f.useRef)(null),t=(0,a.v9)(o.aD);return(0,f.useEffect)((function(){e.current&&(e.current.style.gap=t/100+"px")})),(0,h.jsxs)("div",{ref:e,className:be,children:[(0,h.jsx)(H,{}),(0,h.jsx)(ee,{}),(0,h.jsx)(de,{}),(0,h.jsx)(Ae,{})]})},we=function(){var e=(0,a.I0)();return e((0,u.iB)()),e((0,u.QB)()),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Le,{}),(0,h.jsxs)("div",{className:O,children:[(0,h.jsx)(v,{}),(0,h.jsx)(W,{})]})]})}}}]);
//# sourceMappingURL=974.48517d34.chunk.js.map