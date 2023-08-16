import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,o as n,f as r,g as t,t as a,h as s,F as g,r as v,n as x,j as y,k as b,l as k,m as w,p as N,q as j,_ as P}from"./index-0419ce1b.js";import{N as S}from"./NoteDisplay-06bdf3c7.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const l=f(()=>y.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),r("div",{id:"page-root",style:x(s(j))},[t("div",V,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(n(!0),r(g,null,v(s(l),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(b)),1),k(" "+a(e==null?void 0:e.title)+" ",1),z])]),w(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(n(),r("hr",F)):N("v-if",!0)]))),128))])],4))}}),R=P(M,[["__file","/home/runner/work/ninja-from-plain-to-framework/ninja-from-plain-to-framework/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
