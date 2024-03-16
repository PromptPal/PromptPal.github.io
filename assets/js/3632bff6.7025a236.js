"use strict";(self.webpackChunkPromptPal_github_io=self.webpackChunkPromptPal_github_io||[]).push([[467],{9455:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(3274),a=s(2333);const o={sidebar_position:1},i="Install",r={id:"basic/install",title:"Install",description:"Basic",source:"@site/docs/basic/install.mdx",sourceDirName:"basic",slug:"/basic/install",permalink:"/docs/basic/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Concepts",permalink:"/docs/basic/concepts"}},l={},c=[{value:"Basic",id:"basic",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,t.jsx)(n.p,{children:"Basically, PromptPal need a Docker image to run and a configuration file. that all. follow the basic knowledge. you can deploy it by yourself and every where."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -v $(pwd)/.env:/usr/app/.env -p 7788:7788 annatarhe/prompt-pal:v1.7.3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["please be remind the ",(0,t.jsx)(n.code,{children:"v1.7.3"})," may not be the latest version, please update it to latest version."]}),"\n",(0,t.jsx)(n.p,{children:"and as you may seen. we also need a config file. like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'JWT_TOKEN_KEY="A_RANDOM_KEY_HERE"\nHASHID_SALT="A_RANDOM_SALT_HERE"\nPUBLIC_DOMAIN="0.0.0.0:7788"\n# uncomment and change next 2 lines for postgres\nDB_TYPE="postgres"\nDB_DSN="host=localhost user=postgres password=PASSWORD port=5432 dbname=promptpal sslmode=disable"\n\n# uncomment and change next 2 lines for mysql\n# DB_TYPE="mysql"\n# DB_DSN="root:pass@tcp(localhost:3306)/promptpal"\n\n# your public address here(from metamask.)\nADMIN_LIST=0x4910c609fBC895434a0A5E3E46B1Eb4b64Cff2B8,0x7E63d899676756711d29DD989bb9F5a868C20e1D\nOPENAI_BASE_URL="https://api.openai.com/v1"\n\n## Optional. SSO with Google if you want.\nSSO_GOOGLE_CALLBACK_URL="http://localhost:7788/auth/google"\nSSO_GOOGLE_CLIENT_ID="YOUR_CLIENT_ID"\nSSO_GOOGLE_CLIENT_SECRET="YOUR_CLIENT_SECRET"\n'})}),"\n",(0,t.jsx)(n.p,{children:"that's all you need."}),"\n",(0,t.jsxs)(n.p,{children:["once the server is running, you can start using it. on ",(0,t.jsx)(n.code,{children:"localhost:7788"})]}),"\n",(0,t.jsx)(n.p,{children:"and you can use it behind reverse proxy. like nginx"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2333:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(9474);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);