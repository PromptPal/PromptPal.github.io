"use strict";(self.webpackChunkPromptPal_github_io=self.webpackChunkPromptPal_github_io||[]).push([[2869],{7224:(e,t,n)=>{n.d(t,{H:()=>l});var r=n(3579);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.AV(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},3579:(e,t,n)=>{n.d(t,{AV:()=>c,De:()=>o,c$:()=>p,gh:()=>a,nh:()=>d});var r=n(2792),l=n(1863);function o(e,t){return!!e.children(t).length}function a(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.A(n)){var o=n.transition;if(l.A(o))return o(e)}return e}},124:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6554),l=n(7766);const o=(e,t)=>r.A.lang.round(l.A.parse(e)[t])},2869:(e,t,n)=>{n.d(t,{diagram:()=>a});var r=n(6852),l=n(3334),o=n(2286);n(4094),n(9219),n(9982),n(4565),n(7698),n(8488),n(2829);const a={parser:r.p,db:r.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),r.f.clear(),r.f.setGen("gen-2")}}},3334:(e,t,n)=>{n.d(t,{a:()=>f,f:()=>w});var r=n(9219),l=n(4094),o=n(2286),a=n(3383),i=n(7224),s=n(124),c=n(941);const d={},p=async function(e,t,n,r,l,a){const s=r.select(`[id="${n}"]`),c=Object.keys(e);for(const d of c){const n=e[d];let r="default";n.classes.length>0&&(r=n.classes.join(" ")),r+=" flowchart-label";const c=(0,o.k)(n.styles);let p,b=void 0!==n.text?n.text:n.id;if(o.l.info("vertex",n,n.labelType),"markdown"===n.labelType)o.l.info("vertex",n,n.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const e={label:b};p=(0,i.H)(s,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",c.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}p=e}let w=0,f="";switch(n.type){case"round":w=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}const h=await(0,o.r)(b,(0,o.c)());t.setNode(n.id,{labelStyle:c.labelStyle,shape:f,labelText:h,labelType:n.labelType,rx:w,ry:w,class:r,style:c.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:a.db.getTooltip(n.id)||"",domId:a.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:c.labelStyle,labelType:n.labelType,shape:f,labelText:h,rx:w,ry:w,class:r,style:c.style,id:n.id,domId:a.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,o.c)().flowchart.padding})}},b=async function(e,t,n){o.l.info("abc78 edges = ",e);let r,a,i=0,s={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);r=t.style,a=t.labelStyle}for(const c of e){i++;const n="L-"+c.start+"-"+c.end;void 0===s[n]?(s[n]=0,o.l.info("abc78 new entry",n,s[n])):(s[n]++,o.l.info("abc78 new entry",n,s[n]));let p=n+"-"+s[n];o.l.info("abc78 new link id to be used is",n,p,s[n]);const b="LS-"+c.start,w="LE-"+c.end,f={style:"",labelStyle:""};switch(f.minlen=c.length||1,"arrow_open"===c.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",c.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let h="",u="";switch(c.stroke){case"normal":h="fill:none;",void 0!==r&&(h=r),void 0!==a&&(u=a),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==c.style){const e=(0,o.k)(c.style);h=e.style,u=e.labelStyle}f.style=f.style+=h,f.labelStyle=f.labelStyle+=u,void 0!==c.interpolate?f.curve=(0,o.n)(c.interpolate,l.lUB):void 0!==e.defaultInterpolate?f.curve=(0,o.n)(e.defaultInterpolate,l.lUB):f.curve=(0,o.n)(d.curve,l.lUB),void 0===c.text?void 0!==c.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=c.labelType,f.label=await(0,o.r)(c.text.replace(o.e.lineBreakRegex,"\n"),(0,o.c)()),void 0===c.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=p,f.classes="flowchart-link "+b+" "+w,t.setEdge(c.start,c.end,f,i)}},w={setConf:function(e){const t=Object.keys(e);for(const n of t)d[n]=e[n]},addVertices:p,addEdges:b,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,i){o.l.info("Drawing flowchart");let s=i.db.getDirection();void 0===s&&(s="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),w=d.nodeSpacing||50,f=d.rankSpacing||50;let h;"sandbox"===c&&(h=(0,l.Ltv)("#i"+t));const u="sandbox"===c?(0,l.Ltv)(h.nodes()[0].contentDocument.body):(0,l.Ltv)("body"),g="sandbox"===c?h.nodes()[0].contentDocument:document,y=new r.T({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:w,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=i.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let r=x.length-1;r>=0;r--)k=x[r],o.l.info("Subgraph - ",k),i.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=i.db.getVertices(),m=i.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.Ubm)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}await p(v,y,t,u,g,i),await b(m,y);const T=u.select(`[id="${t}"]`),_=u.select("#"+t+" g");if(await(0,a.r)(_,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(T,"flowchartTitleText",d.titleTopMargin,i.db.getDiagramTitle()),(0,o.o)(y,T,d.diagramPadding,d.useMaxWidth),i.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=g.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(v).forEach((function(e){const n=v[e];if(n.link){const r=(0,l.Ltv)("#"+t+' [id="'+e+'"]');if(r){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},f=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .katex path {\n    fill: #000;\n    stroke: #000;\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=s.A,r=n(e,"r"),l=n(e,"g"),o=n(e,"b");return c.A(r,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);