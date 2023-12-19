import{d as y,c as i,b as m,F as C,a as g}from"./chunks/index.d314dea3.js";import{d as I,f as c,A as f,c as S,C as n,y as r,v as s,M as w,o as V,b as l,K as k,L as x,a,_ as q}from"./chunks/framework.14c5a59b.js";import{F as _}from"./chunks/index.70ae4281.js";const p=D=>(k("data-v-db6c35f9"),D=D(),x(),D),P=w('<h1 id="swap-切换" tabindex="-1" data-v-db6c35f9>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-db6c35f9>​</a></h1><p data-v-db6c35f9>精致的切换组件</p><ul data-v-db6c35f9><li data-v-db6c35f9><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-db6c35f9>源代码</a></li><li data-v-db6c35f9><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-db6c35f9>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-db6c35f9>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-db6c35f9>​</a></h2><p data-v-db6c35f9>需要使用 <code data-v-db6c35f9>v-model</code> 绑定一个值</p><p data-v-db6c35f9><code data-v-db6c35f9>icon-on</code> 和 <code data-v-db6c35f9>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FIconMoon"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),U=p(()=>s("h2",{id:"不同尺寸",tabindex:"-1"},[a("不同尺寸 "),s("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),T=p(()=>s("p",null,[s("code",null,"size"),a(" 属性可配置不同的尺寸")],-1)),z=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value5"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":size"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"50"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value6"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"size"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"30px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconEyeSlash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value3 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value4 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),N=p(()=>s("h2",{id:"不同动画",tabindex:"-1"},[a("不同动画 "),s("a",{class:"header-anchor",href:"#不同动画","aria-label":'Permalink to "不同动画"'},"​")],-1)),J=p(()=>s("p",null,[s("code",null,"type"),a(" 属性可以配置不同的动画类型")],-1)),K=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value5"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value6"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"sound"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value7"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"swap"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"FIconEyeSlash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value5 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value6 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," value7 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#BABED8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=w('<h2 id="attributes" tabindex="-1" data-v-db6c35f9>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-db6c35f9>​</a></h2><div class="vp-table__container" data-v-db6c35f9><table data-v-db6c35f9><thead data-v-db6c35f9><tr data-v-db6c35f9><th data-v-db6c35f9>参数</th><th data-v-db6c35f9>说明</th><th data-v-db6c35f9>类型</th><th data-v-db6c35f9>可选值</th><th data-v-db6c35f9>默认值</th></tr></thead><tbody data-v-db6c35f9><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>v-model</code></td><td data-v-db6c35f9>绑定值</td><td data-v-db6c35f9>boolean</td><td data-v-db6c35f9>——</td><td data-v-db6c35f9>false</td></tr><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>size</code></td><td data-v-db6c35f9>组件尺寸</td><td data-v-db6c35f9>string / number</td><td data-v-db6c35f9>——</td><td data-v-db6c35f9>40</td></tr><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>type</code></td><td data-v-db6c35f9>动画类型</td><td data-v-db6c35f9><a href="#swaptype" data-v-db6c35f9>SwapType</a></td><td data-v-db6c35f9><code data-v-db6c35f9>sound</code> <code data-v-db6c35f9>swap</code></td><td data-v-db6c35f9>——</td></tr><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>icon-on</code></td><td data-v-db6c35f9>打开展示的图标</td><td data-v-db6c35f9><a href="/components/interface.html#fightingicon" data-v-db6c35f9>FightingIcon</a></td><td data-v-db6c35f9>——</td><td data-v-db6c35f9>——</td></tr><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>icon-off</code></td><td data-v-db6c35f9>关闭展示的图标</td><td data-v-db6c35f9><a href="/components/interface.html#fightingicon" data-v-db6c35f9>FightingIcon</a></td><td data-v-db6c35f9>——</td><td data-v-db6c35f9>——</td></tr><tr data-v-db6c35f9><td data-v-db6c35f9><code data-v-db6c35f9>on-change</code></td><td data-v-db6c35f9>当绑定值发生改变时触发的回调</td><td data-v-db6c35f9><a href="#swapchange" data-v-db6c35f9>SwapChange</a></td><td data-v-db6c35f9>——</td><td data-v-db6c35f9>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-db6c35f9>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-db6c35f9>​</a></h2><p data-v-db6c35f9>组件导出以下类型定义：</p><div class="language-ts" data-v-db6c35f9><button title="Copy Code" class="copy" data-v-db6c35f9></button><span class="lang" data-v-db6c35f9>ts</span><pre class="shiki material-theme-palenight" data-v-db6c35f9><code data-v-db6c35f9><span class="line" data-v-db6c35f9><span style="color:#89DDFF;font-style:italic;" data-v-db6c35f9>import</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;font-style:italic;" data-v-db6c35f9>type</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>{</span><span style="color:#F07178;" data-v-db6c35f9> </span><span style="color:#BABED8;" data-v-db6c35f9>SwapInstance</span><span style="color:#89DDFF;" data-v-db6c35f9>,</span><span style="color:#F07178;" data-v-db6c35f9> </span><span style="color:#BABED8;" data-v-db6c35f9>SwapProps</span><span style="color:#89DDFF;" data-v-db6c35f9>,</span><span style="color:#F07178;" data-v-db6c35f9> </span><span style="color:#BABED8;" data-v-db6c35f9>SwapType</span><span style="color:#89DDFF;" data-v-db6c35f9>,</span><span style="color:#F07178;" data-v-db6c35f9> </span><span style="color:#BABED8;" data-v-db6c35f9>SwapChange</span><span style="color:#F07178;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>}</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;font-style:italic;" data-v-db6c35f9>from</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span><span style="color:#C3E88D;" data-v-db6c35f9>fighting-design</span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-db6c35f9>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-db6c35f9>​</a></h3><div class="language-ts" data-v-db6c35f9><button title="Copy Code" class="copy" data-v-db6c35f9></button><span class="lang" data-v-db6c35f9>ts</span><pre class="shiki material-theme-palenight" data-v-db6c35f9><code data-v-db6c35f9><span class="line" data-v-db6c35f9><span style="color:#C792EA;" data-v-db6c35f9>type</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#FFCB6B;" data-v-db6c35f9>SwapType</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>=</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span><span style="color:#C3E88D;" data-v-db6c35f9>sound</span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>|</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span><span style="color:#C3E88D;" data-v-db6c35f9>swap</span><span style="color:#89DDFF;" data-v-db6c35f9>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-db6c35f9>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-db6c35f9>​</a></h3><div class="language-ts" data-v-db6c35f9><button title="Copy Code" class="copy" data-v-db6c35f9></button><span class="lang" data-v-db6c35f9>ts</span><pre class="shiki material-theme-palenight" data-v-db6c35f9><code data-v-db6c35f9><span class="line" data-v-db6c35f9><span style="color:#C792EA;" data-v-db6c35f9>type</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#FFCB6B;" data-v-db6c35f9>SwapChange</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>=</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#89DDFF;" data-v-db6c35f9>(</span><span style="color:#BABED8;font-style:italic;" data-v-db6c35f9>value</span><span style="color:#89DDFF;" data-v-db6c35f9>:</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#FFCB6B;" data-v-db6c35f9>boolean</span><span style="color:#89DDFF;" data-v-db6c35f9>,</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#BABED8;font-style:italic;" data-v-db6c35f9>evt</span><span style="color:#89DDFF;" data-v-db6c35f9>:</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#FFCB6B;" data-v-db6c35f9>MouseEvent</span><span style="color:#89DDFF;" data-v-db6c35f9>)</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#C792EA;" data-v-db6c35f9>=&gt;</span><span style="color:#BABED8;" data-v-db6c35f9> </span><span style="color:#FFCB6B;" data-v-db6c35f9>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-db6c35f9>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-db6c35f9>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},X={href:"https://github.com/JedediahXu",target:"_blank"},j={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1702950358000}'),G={name:"components/swap.md"},H=I({...G,setup(D){const v=c(!0),b=c(!1),B=c(!0),E=c(!0),u=c(!0),A=c(!0),h=c(!0);return(Q,o)=>{const e=f("f-swap"),F=f("vp-demo"),d=f("f-avatar");return V(),S("div",null,[P,n(F,{source:""},{source:r(()=>[n(e,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=t=>v.value=t),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:b.value,"onUpdate:modelValue":o[1]||(o[1]=t=>b.value=t),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[M]),_:1}),U,T,n(F,{source:""},{source:r(()=>[n(e,{modelValue:B.value,"onUpdate:modelValue":o[2]||(o[2]=t=>B.value=t),size:50,"icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:E.value,"onUpdate:modelValue":o[3]||(o[3]=t=>E.value=t),size:"30px","icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[z]),_:1}),N,J,n(F,{source:""},{source:r(()=>[n(e,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=t=>u.value=t),"icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:A.value,"onUpdate:modelValue":o[5]||(o[5]=t=>A.value=t),type:"sound","icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:h.value,"onUpdate:modelValue":o[6]||(o[6]=t=>h.value=t),type:"swap","icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[K]),_:1}),L,s("a",O,[n(d,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),s("a",X,[n(d,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),s("a",j,[n(d,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=q(H,[["__scopeId","data-v-db6c35f9"]]);export{Z as __pageData,$ as default};
