"use strict";(self.webpackChunkpharmacy_shop=self.webpackChunkpharmacy_shop||[]).push([[925],{925:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var n=r(420),s=r(202),i=r(580),l="PharmaciesList_allPharmaciesListDiv__GRnVQ",c="PharmaciesList_pharmaciesHlll__oavoJ",a="PharmaciesList_pharmaciesUl__Bzm-Q",u="PharmaciesList_pharmaciesLi__zBPjA",d="Pharmacy_phormasyButton__2Gw6W",o=r(791),f=r(184),h=function(e){var t=e.pharmacy,r=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(r.current){var e=window.innerWidth,t=r.current;t.style.width=e/9.6+"px",t.style.height=e/29+"px",t.style.fontSize=e/103+"px"}})),(0,f.jsx)("button",{ref:r,className:d,children:t.name})},_=function(e){var t=e.realScreenHeight,r=(0,n.v9)(i.OD),s=(0,o.useRef)(null),d=(0,o.useRef)(null),_=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(s.current&&d.current&&_.current){var e=window.innerWidth,r=s.current,n=d.current,i=_.current;r.style.height="".concat(t-200,"px"),n.style.margin="".concat(e/72,"px 0 0 0"),n.style.fontSize="".concat(e/80,"px"),i.style.padding="".concat(e/72,"px ").concat(e/48,"px"),i.style.gap="".concat(e/72,"px")}})),(0,f.jsx)("div",{ref:s,className:l,children:r.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h3",{ref:d,className:c,children:"Pharmacies"}),(0,f.jsx)("ul",{ref:_,className:a,children:r.map((function(e){return(0,f.jsx)("li",{className:u,children:(0,f.jsx)(h,{pharmacy:e})},e.id)}))})]}):(0,f.jsx)("p",{children:"No pharmacies found"})})},x=r(433),p=r(439),m={allDrugsListDiv:"DrugsList_allDrugsListDiv__E4Lwl",drugsUl:"DrugsList_drugsUl__-etsM"},v="Drug_drugLi__Dxa3K",g="Drug_drugDiv__LOWKM",j="Drug_favoriteBut__3I3NY",y="Drug_isFavorite__r6vaN",D="Drug_drugImg__U65Fi",A="Drug_addToBackedBut__vi6OH",L="Drug_divAddToBackedBut__J8JyQ",N="Drug_divDelToBackedBut__hu0aJ",w="Drug_infoDrug__R2Dp6",F="Drug_pInfoDrug__RtNQu",b=r(985),k=function(e){var t=e.drug,r=(0,n.I0)(),s=(0,n.v9)(i.cI),l=(0,n.v9)(i.Jp),c=s.includes(t.id),a=l.includes(t.id),u=(0,o.useRef)(null),d=(0,o.useRef)(null),h=(0,o.useRef)(null),_=(0,o.useRef)(null),x=(0,o.useRef)(null),p=(0,o.useRef)(null),m=(0,o.useRef)(null),k=function(e){c?function(e){r((0,b.Do)(e))}(e):function(e){r((0,b.Vz)(e))}(e)},R=function(e){a?function(e){r((0,b.lH)(e))}(e):function(e){r((0,b.E4)(e))}(e)};return(0,o.useEffect)((function(){if(u.current&&d.current&&h.current&&_.current&&x.current&&p.current&&m.current){var e=window.innerWidth,t=p.current,r=d.current,n=u.current,s=h.current,i=_.current,l=x.current,o=m.current,f=document.querySelector(".drugsUl");if(f){var v=(f.clientWidth-e/45*2-e/29)/2;t.style.width="".concat(v,"px"),t.style.height="".concat(1.176*v,"px")}r.style.fontSize=e/103+"px",t.style.paddingBottom=e/72+"px",n.style.height=e/24+"px",n.style.gap=e/288+"px",n.style.right=e/72+"px",n.style.bottom=e/72+"px",n.style.borderRadius=e/72+"px",n.style.fontSize=e/80+"px",n.style.padding="0 ".concat(e/144,"px 0 ").concat(e/96,"px"),s.style.width=e/48+"px",i.style.width=e/48+"px",i.style.height=e/48+"px",i.style.right=e/72+"px",i.style.top=e/72+"px",l.style.marginLeft=e/72+"px",l.style.gap=e/144+"px",o.style.margin=e/35+"px",c?i.classList.add(y):i.classList.remove(y),a?s.classList.add(N):s.classList.remove(N)}})),(0,f.jsx)("li",{ref:p,className:v,children:(0,f.jsxs)("div",{ref:d,className:g,children:[(0,f.jsx)("button",{ref:_,className:j,onClick:function(){return k(t.id)}}),(0,f.jsx)("img",{ref:m,className:D,src:t.image,alt:t.name}),(0,f.jsxs)("div",{ref:x,className:w,children:[(0,f.jsx)("p",{className:F,children:(0,f.jsx)("b",{children:t.name})}),(0,f.jsxs)("p",{className:F,children:[(0,f.jsx)("b",{children:"Price: "}),t.price," \u20b4"]}),(0,f.jsxs)("p",{className:F,children:[(0,f.jsx)("b",{children:"Manufacturing date:"})," ",t.dataWasAdded]})]}),(0,f.jsxs)("button",{ref:u,className:A,onClick:function(){return R(t.id)},children:[a?(0,f.jsx)("span",{children:"Delete"}):(0,f.jsx)("span",{children:"Add"}),(0,f.jsx)("div",{ref:h,className:L})]})]})})},R=function(e){var t=e.realScreenHeight,r=(0,n.v9)(i.$0),s=(0,n.v9)(i.cI),l=(0,n.v9)(i.AD),c=(0,n.v9)(i.lc),a=(0,o.useState)(r),u=(0,p.Z)(a,2),d=u[0],h=u[1],_=(0,o.useState)([]),v=(0,p.Z)(_,2),g=v[0],j=v[1],y=(0,o.useState)([]),D=(0,p.Z)(y,2),A=D[0],L=D[1],N=(0,o.useRef)(s);(0,o.useEffect)((function(){var e=(0,x.Z)(r);if(e.length>0){switch(c){case"a":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"z":e.sort((function(e,t){return t.name.localeCompare(e.name)}));break;default:e=r}l.length>0?h(e.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))):h(e)}}),[l,r,c]),(0,o.useEffect)((function(){N.current.length>0&&(j(d.filter((function(e){return N.current.includes(e.id)}))),L(d.filter((function(e){return!N.current.includes(e.id)}))))}),[d,l,r,c]);var w=(0,o.useRef)(null),F=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(w.current&&F.current){var e=window.innerWidth,r=w.current,n=F.current;r.style.height="".concat(t-200,"px"),r.style.margin="0 0 0 ".concat(e/72,"px"),n.style.width="".concat(r.clientWidth-e/48*2,"px"),n.style.padding="".concat(e/72,"px ").concat(e/48,"px"),n.style.gap="".concat(e/72,"px ").concat(e/29,"px")}})),(0,f.jsx)("div",{ref:w,className:m.allDrugsListDiv,children:d.length>0?g.length>0?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("ul",{ref:F,className:[m.drugsUl,"drugsUl"].join(" "),children:[g.map((function(e){return(0,f.jsx)(k,{drug:e},e.id)})),A.map((function(e){return(0,f.jsx)(k,{drug:e},e.id)}))]})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{ref:F,className:[m.drugsUl,"drugsUl"].join(" "),children:d.map((function(e){return(0,f.jsx)(k,{drug:e},e.id)}))})}):(0,f.jsx)("p",{children:"No drugs found"})})},C="Shop_allShopDiv__-Okbb",S="Filter_inputFilter__8QMOp",B=r(473),E=function(){var e=(0,n.v9)(i.AD),t=(0,n.I0)(),r=(0,o.useState)(""),s=(0,p.Z)(r,2),l=s[0],c=s[1];return(0,o.useEffect)((function(){var e=window.innerWidth;c(e>465?"Please start typing the desired name":e<=465&&e>370?"Please start typing name":"Type name")}),[]),(0,f.jsx)("input",{value:e,className:S,type:"text",name:"filter",placeholder:l,onChange:function(e){e.preventDefault();var r=e.target.value;t((0,B.Tv)(r))}})},P="FilterAlf_allFiltAlf__idDN7",Z="FilterAlf_secAllDiv__PX7Lw",z="FilterAlf_allButtonFA__sV2Ai",W="FilterAlf_allButtonFAAct__C1yhB",I="FilterAlf_divArrow__fkkZy",U="FilterAlf_divArrowAct__n+tDs",H="FilterAlf_divDrL__vVc+q",J="FilterAlf_divDrLAct__9oLFa",T={ulDrL:"DropListAlf_ulDrL__uJXav",buttonFA:"DropListAlf_buttonFA__gwb2L",firstChild:"DropListAlf_firstChild__q-p2J",lastChild:"DropListAlf_lastChild__7sdw8",divArrow:"DropListAlf_divArrow__0TC+-"},O=function(){var e=(0,n.I0)(),t=function(t){e((0,B.do)(t))};return(0,f.jsxs)("ul",{className:T.ulDrL,children:[(0,f.jsx)("li",{children:(0,f.jsxs)("button",{className:[T.buttonFA,T.firstChild].join(" "),onClick:function(){t("a")},children:[(0,f.jsx)("p",{children:"A to Z"}),(0,f.jsx)("div",{className:T.divArrow})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("button",{className:T.buttonFA,onClick:function(){t("z")},children:[(0,f.jsx)("p",{children:"Z to A"}),(0,f.jsx)("div",{className:T.divArrow})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("button",{className:[T.buttonFA,T.lastChild].join(" "),onClick:function(){t("n")},children:[(0,f.jsx)("p",{children:"Reset"}),(0,f.jsx)("div",{className:T.divArrow})]})})]})},Q=function(){var e=(0,o.useRef)(null),t=(0,o.useRef)(null),r=(0,o.useRef)(null),s=(0,o.useState)(!1),l=(0,p.Z)(s,2),c=l[0],a=l[1],u="A to Z",d=(0,o.useState)(u),h=(0,p.Z)(d,2),_=h[0],x=h[1],m=(0,n.v9)(i.lc);(0,o.useEffect)((function(){if(e.current)switch(m){case"a":x(u),e.current.classList.add(W);break;case"z":x("Z to A"),e.current.classList.add(W);break;default:x(u),e.current.classList.remove(W)}}),[m]);var v=function e(){t.current&&r.current&&(t.current.classList.remove(J),r.current.classList.remove(U),window.removeEventListener("click",e),a(!1))};return(0,f.jsx)("div",{className:P,children:(0,f.jsxs)("div",{className:Z,children:[(0,f.jsxs)("button",{ref:e,className:z,onClick:function(){c?v():t.current&&r.current&&setTimeout((function(){a(!0),t.current.classList.add(J),r.current.classList.add(U),window.addEventListener("click",v)}),0)},children:[(0,f.jsx)("p",{children:_}),(0,f.jsx)("div",{ref:r,className:I})]}),(0,f.jsx)("div",{ref:t,className:H,children:(0,f.jsx)(O,{})})]})})},M="Filters_allFilters__6nONa",V=function(){return(0,f.jsxs)("div",{className:M,children:[(0,f.jsx)(E,{}),(0,f.jsx)(Q,{})]})},q=function(){var e=(0,n.I0)();e((0,s.i)()),e((0,s.Q)());var t=window.innerHeight;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(V,{}),(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)(_,{realScreenHeight:t}),(0,f.jsx)(R,{realScreenHeight:t})]})]})}}}]);
//# sourceMappingURL=925.14fb57a1.chunk.js.map