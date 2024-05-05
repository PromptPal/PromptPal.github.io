"use strict";(self.webpackChunkPromptPal_github_io=self.webpackChunkPromptPal_github_io||[]).push([[2886],{6968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(6070),i=t(7468),o=t(4473);const r={slug:"promptPal-1-7",title:"PromptPal 1.7 - SSO, Tracking and bugfixes",authors:["annatarhe"],tags:["release"]},s=void 0,l={permalink:"/blog/promptPal-1-7",source:"@site/blog/2024-03-10-release-1-7.mdx",title:"PromptPal 1.7 - SSO, Tracking and bugfixes",description:"<ReleaseHero",date:"2024-03-10T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.11,hasTruncateMarker:!1,authors:[{name:"AnnatarHe",title:"Maintainer of PromptPal",url:"https://github.com/AnnatarHe",imageURL:"https://github.com/annatarhe.png",key:"annatarhe"}],frontMatter:{slug:"promptPal-1-7",title:"PromptPal 1.7 - SSO, Tracking and bugfixes",authors:["annatarhe"],tags:["release"]},unlisted:!1,prevItem:{title:"PromptPal 1.8 - Versions",permalink:"/blog/promptPal-1-8"},nextItem:{title:"PromptPal 1.6 - Gemini Support and UI Revamp!",permalink:"/blog/promptPal-1-6"}},c={authorsImageUrls:[void 0]},p=[{value:"PromptPal 1.7: Single Sign-On, Improved Tracking, and Bug Fixes",id:"promptpal-17-single-sign-on-improved-tracking-and-bug-fixes",level:2},{value:"Single Sign-On (SSO) with Google Login",id:"single-sign-on-sso-with-google-login",level:3},{value:"Enhanced Prompt Tracking",id:"enhanced-prompt-tracking",level:3},{value:"Improvements and Bug Fixes",id:"improvements-and-bug-fixes",level:3},{value:"Important Updates Regarding Database Support",id:"important-updates-regarding-database-support",level:2},{value:"Upgrading to PromptPal 1.7",id:"upgrading-to-promptpal-17",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{version:"1.7",features:["Single Sign-On","Prompt Tracking","More improvements and bugfixes"]}),"\n",(0,a.jsx)(n.h2,{id:"promptpal-17-single-sign-on-improved-tracking-and-bug-fixes",children:"PromptPal 1.7: Single Sign-On, Improved Tracking, and Bug Fixes"}),"\n",(0,a.jsx)(n.p,{children:"We're excited to announce the release of PromptPal 1.7! This update introduces several new features and improvements."}),"\n",(0,a.jsx)(n.h3,{id:"single-sign-on-sso-with-google-login",children:"Single Sign-On (SSO) with Google Login"}),"\n",(0,a.jsxs)(n.p,{children:["PromptPal now supports seamless integration with Google Login. You can easily enable Google Login by configuring your ",(0,a.jsx)(n.code,{children:".env"})," file. Simply follow these steps:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Visit the Google Cloud Console: ",(0,a.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials",children:"https://console.cloud.google.com/apis/credentials"})," to create an OAuth 2.0 client and set up a callback URL."]}),"\n",(0,a.jsxs)(n.li,{children:["Update your PromptPal ",(0,a.jsx)(n.code,{children:".env"})," file with the following details:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'SSO_GOOGLE_CALLBACK_URL="http://localhost:7788/auth/google"\nSSO_GOOGLE_CLIENT_ID="YOUR_CLIENT_ID"\nSSO_GOOGLE_CLIENT_SECRET="YOUR_CLIENT_SECRET"\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Important Note:"})," You can only modify the host portion of the callback URL (",(0,a.jsx)(n.code,{children:"http://localhost:7788"})," in this example). The path (",(0,a.jsx)(n.code,{children:"/auth/google"}),") must remain unchanged."]}),"\n",(0,a.jsx)(n.p,{children:'Once configured, a "Google Login" button will appear on your login page.'}),"\n",(0,a.jsx)(n.h3,{id:"enhanced-prompt-tracking",children:"Enhanced Prompt Tracking"}),"\n",(0,a.jsx)(n.p,{children:"The latest version of PromptPal provides deeper insights into how prompts are being used within your project. You can now view:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The number of times each prompt has been called in the last 7 days."}),"\n",(0,a.jsx)(n.li,{children:"The P50, P90, and P99 response times for each prompt."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"p90-example",src:t(9604).A+"",width:"3136",height:"2260"})}),"\n",(0,a.jsx)(n.h3,{id:"improvements-and-bug-fixes",children:"Improvements and Bug Fixes"}),"\n",(0,a.jsxs)(n.p,{children:["For a detailed list of improvements and bug fixes, please refer to the full changelog: Release 1.7 Changelog: ",(0,a.jsx)(n.a,{href:"https://github.com/PromptPal/PromptPal/releases/tag/v1.7.0",children:"https://github.com/PromptPal/PromptPal/releases/tag/v1.7.0"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"important-updates-regarding-database-support",children:"Important Updates Regarding Database Support"}),"\n",(0,a.jsx)(n.p,{children:"We've made the difficult decision to discontinue support for SQLite in PromptPal 1.7. Here's why:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Reduced Bundle Size:"})," We prioritize keeping the bundle size small, especially for users in regions with limited internet bandwidth. Removing SQLite support significantly reduces the overall size of the package (by approximately 83%)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"cgo Limitations:"})," SQLite relies on cgo, which can introduce challenges in certain environments. You can learn more about these limitations in this article: cgo is not Go: ",(0,a.jsx)(n.a,{href:"https://dave.cheney.net/2016/01/18/cgo-is-not-go",children:"https://dave.cheney.net/2016/01/18/cgo-is-not-go"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Limited Functionality:"})," SQLite offers a restricted set of aggregate functions, hindering our ability to develop certain features."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We recommend migrating your data to PostgreSQL, our officially supported database."}),"\n",(0,a.jsx)(n.h2,{id:"upgrading-to-promptpal-17",children:"Upgrading to PromptPal 1.7"}),"\n",(0,a.jsx)(n.p,{children:"Upgrading is a simple process:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Update the image version:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -v $(pwd)/.env:/usr/app/.env -p 7788:7788 annatarhe/prompt-pal:v1.7.0\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["If you intend to use Google Login, update your ",(0,a.jsx)(n.code,{children:".env"})," file accordingly before starting the server."]}),"\n",(0,a.jsx)(n.li,{children:"Users who were previously using SQLite will need to migrate their data to a different database (such as PostgreSQL)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We appreciate your understanding and patience. We're confident that these changes will enhance the overall performance and functionality of PromptPal. We look forward to your continued use and feedback!"})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4473:(e,n,t)=>{t.d(n,{A:()=>g});const a="container_pLOk",i="logo_HRaL",o="version_xk68",r="features_AgtB",s="feature_cEYN",l="featureText_il9a";var c=t(3526);const p=t.p+"assets/images/logo-6a9d31d05fe1069d8c397ca17a9a393c.png";var d=t(6070);const g=function(e){const{version:n,features:t}=e;return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("img",{src:p,alt:"promptpal logo",className:i}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{className:o,children:["PromptPal ",n]}),(0,d.jsx)("ul",{className:r,children:t.map((e=>(0,d.jsx)("li",{className:(0,c.A)("raycast-tag",s,l),children:e},e)))})]})]})}},9604:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/prompt-p90-1018e4cfa95bd51d20f9fee1569ae89a.jpeg"},7468:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(758);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);