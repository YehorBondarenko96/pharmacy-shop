"use strict";(self.webpackChunkpharmacy_shop=self.webpackChunkpharmacy_shop||[]).push([[488],{488:function(e,t,r){r.r(t),r.d(t,{default:function(){return K}});var n=r(420),s=r(202),i=r(580),l="PharmaciesList_allPharmaciesListDiv__GRnVQ",c="PharmaciesList_pharmaciesHlll__oavoJ",a="PharmaciesList_pharmaciesUl__Bzm-Q",u="PharmaciesList_pharmaciesLi__zBPjA",d="PharmaciesList_phormasyButton__ryQfU",o="PharmaciesList_phormasyButtonAct__bK8h8",f=r(791),h=r(473),_=r(184),p=function(e){var t=e.pharmacy,r=(0,n.I0)(),s=(0,n.v9)(i.W6),l=(0,f.useRef)(null);return(0,f.useEffect)((function(){if(l.current){var e=window.innerWidth,r=l.current;r.style.width=e/9.6+"px",r.style.height=e/29+"px",r.style.fontSize=e/103+"px",t.id===s?r.classList.add(o):r.classList.remove(o)}})),(0,_.jsx)("button",{ref:l,className:d,type:"button",onClick:function(){return e=t.id,void r((0,h._s)(e));var e},children:t.name})},x=function(e){var t=e.realScreenHeight,r=(0,n.v9)(i.OD),s=(0,n.I0)(),x=(0,n.v9)(i.W6),m=(0,f.useRef)(null),v=(0,f.useRef)(null),g=(0,f.useRef)(null),j=(0,f.useRef)(null);return(0,f.useEffect)((function(){var e=r.map((function(e){return e.id}));if(m.current&&v.current&&g.current&&j.current){var n=window.innerWidth,s=m.current,i=v.current,l=g.current;s.style.height="".concat(t-200,"px"),i.style.margin="".concat(n/72,"px 0 0 0"),i.style.fontSize="".concat(n/80,"px"),l.style.padding="".concat(n/72,"px ").concat(n/48,"px"),l.style.gap="".concat(n/72,"px");var c=j.current;c.style.width=n/9.6+"px",c.style.height=n/29+"px",c.style.fontSize=n/103+"px",e.includes(x)?c.classList.remove(o):c.classList.add(o)}})),(0,_.jsx)("div",{ref:m,className:l,children:r.length>0?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h3",{ref:v,className:c,children:"Pharmacies"}),(0,_.jsxs)("ul",{ref:g,className:a,children:[(0,_.jsx)("li",{className:u,children:(0,_.jsx)("button",{ref:j,className:d,type:"button",onClick:function(){s((0,h._s)(""))},children:"All pharmacies"})}),r.map((function(e){return(0,_.jsx)("li",{className:u,children:(0,_.jsx)(p,{pharmacy:e})},e.id)}))]})]}):(0,_.jsx)("p",{children:"No pharmacies found"})})},m=r(433),v=r(439),g={allDrugsListDiv:"DrugsList_allDrugsListDiv__E4Lwl",drugsUl:"DrugsList_drugsUl__-etsM"},j="Drug_drugLi__Dxa3K",y="Drug_drugDiv__LOWKM",L="Drug_favoriteBut__3I3NY",D="Drug_isFavorite__r6vaN",A="Drug_drugImg__U65Fi",N="Drug_addToBackedBut__vi6OH",w="Drug_divAddToBackedBut__J8JyQ",b="Drug_divDelToBackedBut__hu0aJ",F="Drug_infoDrug__R2Dp6",k="Drug_pInfoDrug__RtNQu",C=r(985),R=function(e){var t=e.drug,r=(0,n.I0)(),s=(0,n.v9)(i.cI),l=(0,n.v9)(i.Jp),c=s.includes(t.id),a=l.some((function(e){return e.id===t.id})),u=(0,f.useRef)(null),d=(0,f.useRef)(null),o=(0,f.useRef)(null),h=(0,f.useRef)(null),p=(0,f.useRef)(null),x=(0,f.useRef)(null),m=(0,f.useRef)(null),v=function(e){c?function(e){r((0,C.Do)(e))}(e):function(e){r((0,C.Vz)(e))}(e)},g=function(e){a?function(e){r((0,C.lH)(e))}(e):function(e){r((0,C.E4)(e))}(e)};return(0,f.useEffect)((function(){if(u.current&&d.current&&o.current&&h.current&&p.current&&x.current&&m.current){var e=window.innerWidth,t=x.current,r=d.current,n=u.current,s=o.current,i=h.current,l=p.current,f=m.current,_=document.querySelector(".drugsUl");if(_){var v=(_.clientWidth-e/45*2-e/29)/2;t.style.width="".concat(v,"px"),t.style.height="".concat(1.176*v,"px")}r.style.fontSize=e/103+"px",t.style.paddingBottom=e/72+"px",n.style.height=e/24+"px",n.style.gap=e/288+"px",n.style.right=e/72+"px",n.style.bottom=e/72+"px",n.style.borderRadius=e/72+"px",n.style.fontSize=e/80+"px",n.style.padding="0 ".concat(e/144,"px 0 ").concat(e/96,"px"),s.style.width=e/48+"px",i.style.width=e/48+"px",i.style.height=e/48+"px",i.style.right=e/72+"px",i.style.top=e/72+"px",l.style.marginLeft=e/72+"px",l.style.gap=e/144+"px",f.style.margin=e/35+"px",c?i.classList.add(D):i.classList.remove(D),a?s.classList.add(b):s.classList.remove(b)}})),(0,_.jsx)("li",{ref:x,className:j,children:(0,_.jsxs)("div",{ref:d,className:y,children:[(0,_.jsx)("button",{ref:h,className:L,onClick:function(){return v(t.id)}}),(0,_.jsx)("img",{ref:m,className:A,src:t.image,alt:t.name}),(0,_.jsxs)("div",{ref:p,className:F,children:[(0,_.jsx)("p",{className:k,children:(0,_.jsx)("b",{children:t.name})}),(0,_.jsxs)("p",{className:k,children:[(0,_.jsx)("b",{children:"Price: "}),t.price," \u20b4"]}),(0,_.jsxs)("p",{className:k,children:[(0,_.jsx)("b",{children:"Manufacturing date:"})," ",t.dataWasAdded]})]}),(0,_.jsxs)("button",{ref:u,className:N,onClick:function(){return g(t)},children:[a?(0,_.jsx)("span",{children:"Delete"}):(0,_.jsx)("span",{children:"Add"}),(0,_.jsx)("div",{ref:o,className:w})]})]})})},S=function(e){var t=e.realScreenHeight,r=(0,n.v9)(i.$0),s=(0,n.v9)(i.cI),l=(0,n.v9)(i.AD),c=(0,n.v9)(i.lc),a=(0,n.v9)(i.OD),u=(0,n.v9)(i.W6),d=(0,f.useState)(r),o=(0,v.Z)(d,2),h=o[0],p=o[1],x=(0,f.useState)([]),j=(0,v.Z)(x,2),y=j[0],L=j[1],D=(0,f.useState)([]),A=(0,v.Z)(D,2),N=A[0],w=A[1],b=(0,f.useRef)(s);(0,f.useEffect)((function(){var e=(0,m.Z)(r);if(""!==u){var t=a.find((function(e){return e.id===u}));e=(0,m.Z)(t.available)}if(e.length>0){switch(c){case"a":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"z":e.sort((function(e,t){return t.name.localeCompare(e.name)}))}l.length>0?p(e.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))):p(e)}}),[l,r,c,u,a]),(0,f.useEffect)((function(){b.current.length>0&&(L(h.filter((function(e){return b.current.includes(e.id)}))),w(h.filter((function(e){return!b.current.includes(e.id)}))))}),[h,l,r,c]);var F=(0,f.useRef)(null),k=(0,f.useRef)(null);return(0,f.useEffect)((function(){if(F.current&&k.current){var e=window.innerWidth,r=F.current,n=k.current;r.style.height="".concat(t-200,"px"),r.style.margin="0 0 0 ".concat(e/72,"px"),n.style.width="".concat(r.clientWidth-e/48*2,"px"),n.style.padding="".concat(e/72,"px ").concat(e/48,"px"),n.style.gap="".concat(e/72,"px ").concat(e/29,"px")}})),(0,_.jsx)("div",{ref:F,className:g.allDrugsListDiv,children:h.length>0?y.length>0?(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("ul",{ref:k,className:[g.drugsUl,"drugsUl"].join(" "),children:[y.map((function(e){return(0,_.jsx)(R,{drug:e},e.id+1e9*Math.random())})),N.map((function(e){return(0,_.jsx)(R,{drug:e},e.id+1e9*Math.random())}))]})}):(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ul",{ref:k,className:[g.drugsUl,"drugsUl"].join(" "),children:h.map((function(e){return(0,_.jsx)(R,{drug:e},e.id+1e9*Math.random())}))})}):(0,_.jsx)("p",{children:"No drugs found"})})},B="Shop_allShopDiv__-Okbb",P="Filter_inputFilter__8QMOp",Z=function(){var e=(0,n.v9)(i.AD),t=(0,n.I0)(),r=(0,f.useState)(""),s=(0,v.Z)(r,2),l=s[0],c=s[1];return(0,f.useEffect)((function(){var e=window.innerWidth;c(e>465?"Please start typing the desired name":e<=465&&e>370?"Please start typing name":"Type name")}),[]),(0,_.jsx)("input",{value:e,className:P,type:"text",name:"filter",placeholder:l,onChange:function(e){e.preventDefault();var r=e.target.value;t((0,h.Tv)(r))}})},E="FilterAlf_allFiltAlf__idDN7",W="FilterAlf_secAllDiv__PX7Lw",z="FilterAlf_allButtonFA__sV2Ai",I="FilterAlf_allButtonFAAct__C1yhB",U="FilterAlf_divArrow__fkkZy",H="FilterAlf_divArrowAct__n+tDs",J="FilterAlf_divDrL__vVc+q",M="FilterAlf_divDrLAct__9oLFa",O={ulDrL:"DropListAlf_ulDrL__uJXav",buttonFA:"DropListAlf_buttonFA__gwb2L",firstChild:"DropListAlf_firstChild__q-p2J",lastChild:"DropListAlf_lastChild__7sdw8",divArrow:"DropListAlf_divArrow__0TC+-"},Q=function(){var e=(0,n.I0)(),t=function(t){e((0,h.do)(t))};return(0,_.jsxs)("ul",{className:O.ulDrL,children:[(0,_.jsx)("li",{children:(0,_.jsxs)("button",{className:[O.buttonFA,O.firstChild].join(" "),onClick:function(){t("a")},children:[(0,_.jsx)("p",{children:"A to Z"}),(0,_.jsx)("div",{className:O.divArrow})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("button",{className:O.buttonFA,onClick:function(){t("z")},children:[(0,_.jsx)("p",{children:"Z to A"}),(0,_.jsx)("div",{className:O.divArrow})]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("button",{className:[O.buttonFA,O.lastChild].join(" "),onClick:function(){t("n")},children:[(0,_.jsx)("p",{children:"Reset"}),(0,_.jsx)("div",{className:O.divArrow})]})})]})},T=function(){var e=(0,f.useRef)(null),t=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useState)(!1),l=(0,v.Z)(s,2),c=l[0],a=l[1],u="A to Z",d=(0,f.useState)(u),o=(0,v.Z)(d,2),h=o[0],p=o[1],x=(0,n.v9)(i.lc);(0,f.useEffect)((function(){if(e.current)switch(x){case"a":p(u),e.current.classList.add(I);break;case"z":p("Z to A"),e.current.classList.add(I);break;default:p(u),e.current.classList.remove(I)}}),[x]);var m=function e(){t.current&&r.current&&(t.current.classList.remove(M),r.current.classList.remove(H),window.removeEventListener("click",e),a(!1))};return(0,_.jsx)("div",{className:E,children:(0,_.jsxs)("div",{className:W,children:[(0,_.jsxs)("button",{ref:e,className:z,onClick:function(){c?m():t.current&&r.current&&setTimeout((function(){a(!0),t.current.classList.add(M),r.current.classList.add(H),window.addEventListener("click",m)}),0)},children:[(0,_.jsx)("p",{children:h}),(0,_.jsx)("div",{ref:r,className:U})]}),(0,_.jsx)("div",{ref:t,className:J,children:(0,_.jsx)(Q,{})})]})})},V="Filters_allFilters__6nONa",q=function(){return(0,_.jsxs)("div",{className:V,children:[(0,_.jsx)(Z,{}),(0,_.jsx)(T,{})]})},K=function(){var e=(0,n.I0)();e((0,s.iB)()),e((0,s.QB)());var t=window.innerHeight;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(q,{}),(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)(x,{realScreenHeight:t}),(0,_.jsx)(S,{realScreenHeight:t})]})]})}}}]);
//# sourceMappingURL=488.b09069a9.chunk.js.map