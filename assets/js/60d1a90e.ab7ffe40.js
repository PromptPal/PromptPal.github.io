"use strict";(self.webpackChunkPromptPal_github_io=self.webpackChunkPromptPal_github_io||[]).push([[2379],{1741:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(6070),r=n(7468);const s={sidebar_position:2},a=void 0,i={id:"developer-tools/JavaScript",title:"JavaScript",description:"https://jsr.io/@prompt-pal/node-sdk",source:"@site/docs/developer-tools/JavaScript.mdx",sourceDirName:"developer-tools",slug:"/developer-tools/JavaScript",permalink:"/docs/developer-tools/JavaScript",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docs/developer-tools/Go"},next:{title:"security",permalink:"/docs/developer-tools/security"}},p={},d=[{value:"Example",id:"example",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://jsr.io/@prompt-pal/node-sdk",children:"https://jsr.io/@prompt-pal/node-sdk"})}),"\n",(0,t.jsxs)(o.p,{children:["this JS library is compatible with any JS runtime. including ",(0,t.jsx)(o.code,{children:"NodeJS"}),", ",(0,t.jsx)(o.code,{children:"Deno"}),", ",(0,t.jsx)(o.code,{children:"React Native"})," and even browsers"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"deno add @prompt-pal/node-sdk\nnpm i @prompt-pal/node-sdk\npnpm add @prompt-pal/node-sdk\nyarn add @prompt-pal/node-sdk\n"})}),"\n",(0,t.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(o.p,{children:["please make sure you already have ",(0,t.jsx)(o.code,{children:"endpoint"})," and ",(0,t.jsx)(o.code,{children:"token"})," in ",(0,t.jsx)(o.code,{children:"promptpal.yaml"})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:'import PromptPal from "@prompt-pal/node-sdk";\n\nconst client = new PromptPal(endpoint, token);\n\nconst res = await client.execute<PPPrompts, PPPromptEchoVariables>(\n  PPPrompts.Echo,\n  {\n    text: "hello world",\n  }\n);\n\nconsole.log(res);\n'})})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7468:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var t=n(758);const r={},s=t.createContext(r);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);