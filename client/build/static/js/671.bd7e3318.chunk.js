"use strict";(self.webpackChunkjfc=self.webpackChunkjfc||[]).push([[671],{8671:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var c=s(2791),i=(s(748),s(7689)),n=s(7892),l=s.n(n),d=s(1243),t=s(1087),m=s(7087),r=(s(9713),s(184));const o=()=>{const[e,a]=(0,c.useState)([]),[s,n]=(0,c.useState)([]),[o,h]=(0,c.useState)([]),[u,v]=(0,c.useState)(!0);(0,i.s0)();(0,c.useEffect)((()=>{(async()=>{try{const{data:e}=await d.Z.get("api/v1/match/get-match");a(e.match),v(!1)}catch(e){console.log(e),v(!1)}})(),(async()=>{try{const{data:e}=await d.Z.get("api/v1/teams/get-teams");n(e.teams)}catch(e){console.log(e)}})(),(async()=>{try{const{data:e}=await d.Z.get("api/v1/league/get-league");h(e.league)}catch(e){console.log(e)}})()}),[]);const j=e.filter((e=>e.done)).length+1;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"schedule-bucket",children:(0,r.jsxs)("div",{className:"schedule-container",children:[(0,r.jsx)("h1",{children:"First Team Schedule"}),u?(0,r.jsx)("div",{className:"flex items-center justify-center mt-2",children:(0,r.jsx)("div",{className:"animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"})}):e.filter((e=>!e.done)).map(((e,a)=>{const c=s.find((a=>a._id===e.home)),i=s.find((a=>a._id===e.away)),n=o.find((a=>a._id===e.league));let d="Jamshedpur FC"===(null===c||void 0===c?void 0:c.teamname)?300+j+a-1:300+j;return(0,r.jsxs)("div",{className:"schedule-slate",children:[(0,r.jsx)("div",{className:"scline"}),(0,r.jsx)("div",{className:"scdate",children:(0,r.jsxs)("div",{className:"scdate-info",children:[(0,r.jsxs)("div",{children:[l()(e.date).format("ddd")," ",l()(e.date).format("DD MMM")," "]}),(0,r.jsxs)("div",{children:[e.time," pm"]})]})}),(0,r.jsx)("div",{className:"scline-mid",children:(0,r.jsx)("div",{className:"scline-mid-break"})}),(0,r.jsx)("div",{className:"sctype",children:(0,r.jsx)(m.LazyLoadImage,{alt:n?n.leaname:"Unknown Team",width:"100%",height:"100%",effect:"blur",src:n?"api/v1/league/league-photo/".concat(n._id):null,placeholderSrc:n?"api/v1/league/league-photo/".concat(n._id):null})}),(0,r.jsx)("div",{className:"scline-mid",children:(0,r.jsx)("div",{className:"scline-mid-break"})}),(0,r.jsx)("div",{className:"scnumber",children:(0,r.jsxs)("div",{className:"scnumber-info",children:[(0,r.jsxs)("div",{className:"scnumber-info-number",children:["Match No.",e.matchday]}),(0,r.jsx)("div",{className:"scnumber-info-stadium",children:e.stadium})]})}),(0,r.jsx)("div",{className:"scline-mid",children:(0,r.jsx)("div",{className:"scline-mid-break"})}),(0,r.jsxs)("div",{className:"scmain",children:[(0,r.jsx)("div",{className:"scmain-home",children:c?c.teamname:"Unknown Team"}),(0,r.jsx)("div",{className:"scmain-homepic",children:(0,r.jsx)(m.LazyLoadImage,{alt:c?c.teamname:"Unknown Team",width:"100%",height:"100%",effect:"blur",src:c?"api/v1/teams/teams-photo/".concat(c._id):null,placeholderSrc:c?"api/v1/teams/teams-photo/".concat(c._id):null})}),(0,r.jsx)("div",{className:"scmain-v",children:"VS"}),(0,r.jsx)("div",{className:"scmain-awaypic",children:(0,r.jsx)(m.LazyLoadImage,{alt:i?i.teamname:"Unknown Team",width:"100%",height:"100%",effect:"blur",src:i?"api/v1/teams/teams-photo/".concat(i._id):null,placeholderSrc:i?"api/v1/teams/teams-photo/".concat(i._id):null})}),(0,r.jsx)("div",{className:"scmain-away",children:i?i.teamname:"Unknown Team"})]}),(0,r.jsx)("div",{className:"scline-mid",children:(0,r.jsx)("div",{className:"scline-mid-break"})}),(0,r.jsx)(t.rU,{className:"scticket",to:"Jamshedpur FC"===(null===c||void 0===c?void 0:c.teamname)?"https://in.ticketgenie.in/SelectStand/jamshedpur-fc-matches-2023-24/".concat(encodeURIComponent(d)):null,target:"Jamshedpur FC"===(null===c||void 0===c?void 0:c.teamname)?"_blank":"_self",children:(0,r.jsx)("div",{className:"Jamshedpur FC"===(null===c||void 0===c?void 0:c.teamname)?"doneTicket":"notdoneTicket",children:"TICKET"})}),(0,r.jsx)("div",{className:"scline"})]},e._id)}))]})})})}}}]);
//# sourceMappingURL=671.bd7e3318.chunk.js.map