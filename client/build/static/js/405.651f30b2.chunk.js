"use strict";(self.webpackChunkjfc=self.webpackChunkjfc||[]).push([[405],{2245:(s,a,e)=>{e.d(a,{Z:()=>i});e(2791);var t=e(1087),c=e(184);const i=()=>(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"dashboard-sidebar",children:[(0,c.jsx)("h1",{className:"dashboard-title",children:"My Dashboard"}),(0,c.jsxs)("ul",{className:"category-list",children:[(0,c.jsx)(t.OL,{className:"category",to:"/admin/news",activeClassName:"active",children:"News"}),(0,c.jsx)(t.OL,{className:"category",to:"/admin/player",activeClassName:"active",children:"Players"}),(0,c.jsx)(t.OL,{className:"category",to:"/admin/teams",activeClassName:"active",children:"Teams"}),(0,c.jsx)(t.OL,{className:"category",to:"/admin/matches",activeClassName:"active",children:"Matches"})]})]})})},3405:(s,a,e)=>{e.r(a),e.d(a,{default:()=>r});var t=e(2791),c=e(7689),i=e(1243),l=e(1087),d=e(2245),n=e(184);const r=()=>{(0,c.s0)();const[s,a]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{try{const{data:s}=await i.Z.get("".concat("http://localhost:8080","/api/v1/news/get-news"));a(s.news)}catch(s){console.log(s)}})()}),[]),(0,n.jsxs)("div",{className:"createNews-container",children:[(0,n.jsx)(d.Z,{}),(0,n.jsxs)("div",{className:"news-container",children:[(0,n.jsx)("div",{className:"news-title",children:"JFC News"}),(0,n.jsx)("div",{className:"news-tiles",children:null===s||void 0===s?void 0:s.map(((s,a)=>(0,n.jsxs)(l.rU,{className:"newsdata-tiles",to:"/admin/news/admin-news/".concat(s.slug),children:[(0,n.jsx)("div",{className:"newsdata-tiles-img",children:(0,n.jsx)("img",{src:"".concat("http://localhost:8080","/api/v1/news/news-photo/").concat(s._id),alt:s.title,height:"100%",width:"100%"})}),(0,n.jsxs)("div",{className:"newsdata-tiles-data",children:[(0,n.jsxs)("text",{className:"newsdata-tiles-title",children:[s.title.split(/\s+/).slice(0,13).join(" ")," ..."]}),(0,n.jsxs)("div",{className:"newsdata-tiles-des",children:[s.desc.split(/\s+/).slice(0,15).join(" ")," ..."]})]}),(0,n.jsxs)("div",{className:"newsdata-tiles-bottom",children:[(0,n.jsxs)("div",{className:"newsdata-team",children:["\ud83d\udd34",s.team," team"]}),(0,n.jsx)("div",{className:"newsdata-date",children:s.date})]})]},a)))})]})]})}}}]);
//# sourceMappingURL=405.651f30b2.chunk.js.map