"use strict";(self.webpackChunkjfc=self.webpackChunkjfc||[]).push([[102],{2245:(a,s,e)=>{e.d(s,{Z:()=>i});e(2791);var c=e(1087),t=e(184);const i=()=>(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"dashboard-sidebar",children:[(0,t.jsx)("h1",{className:"dashboard-title",children:"My Dashboard"}),(0,t.jsxs)("ul",{className:"category-list",children:[(0,t.jsx)(c.OL,{className:"category",to:"/admin/news",activeClassName:"active",children:"News"}),(0,t.jsx)(c.OL,{className:"category",to:"/admin/player",activeClassName:"active",children:"Players"}),(0,t.jsx)(c.OL,{className:"category",to:"/admin/teams",activeClassName:"active",children:"Teams"}),(0,t.jsx)(c.OL,{className:"category",to:"/admin/matches",activeClassName:"active",children:"Matches"})]})]})})},5102:(a,s,e)=>{e.r(s),e.d(s,{default:()=>n});var c=e(2791),t=e(1087),i=e(1243),l=e(2245),m=e(184);const n=()=>{const[a,s]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async()=>{try{const{data:a}=await i.Z.get("".concat("http://localhost:8080","/api/v1/teams/get-teams"));s(a.teams)}catch(a){console.log(a)}})()}),[]),(0,m.jsxs)("div",{className:"createNews-container",children:[(0,m.jsx)(l.Z,{}),(0,m.jsxs)("div",{className:"news-container",children:[(0,m.jsx)("div",{className:"news-title",children:"Teams"}),(0,m.jsx)("div",{className:"news-tiles",children:null===a||void 0===a?void 0:a.map((a=>(0,m.jsxs)(t.rU,{className:"teams-cards",to:"/admin/teams/admin-teams/".concat(a.slug),children:[(0,m.jsx)("div",{className:"teams-cards-img",children:(0,m.jsx)("img",{src:"".concat("http://localhost:8080","/api/v1/teams/teams-photo/").concat(a._id),alt:a.name})}),(0,m.jsx)("div",{className:"teams-cards-topback"}),(0,m.jsxs)("div",{className:"teams-info",children:[(0,m.jsxs)("div",{className:"teams-info-top",children:[(0,m.jsx)("div",{className:"teams-info-number",children:a.number}),(0,m.jsx)("div",{className:"teams-info-name",children:a.teamname})]}),(0,m.jsx)("div",{className:"teams-info-position",children:a.stadium}),(0,m.jsx)("div",{className:"teams-info-back",children:a.teamname.split(" ")[0].length>2?a.teamname.split(" ")[0]:a.teamname.split(" ")[1]})]}),(0,m.jsx)("div",{className:"teams-extra",children:(0,m.jsx)("div",{className:"teams-extra-goals",children:(0,m.jsx)("div",{className:"teams-extra-goals-number",children:a.shortname})})})]},a._id)))})]})]})}}}]);
//# sourceMappingURL=102.f00e1b0b.chunk.js.map