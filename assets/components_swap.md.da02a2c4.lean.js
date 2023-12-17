import{d,c as b,b as m,F as C,a as g}from"./chunks/index.d314dea3.js";import{d as I,f as c,A as i,c as S,C as t,y as r,v as s,M as w,o as V,b as l,K as k,L as x,a,_ as q}from"./chunks/framework.14c5a59b.js";import{F as _}from"./chunks/index.70ae4281.js";const p=D=>(k("data-v-7f2eb59b"),D=D(),x(),D),P=w('<h1 id="swap-切换" tabindex="-1" data-v-7f2eb59b>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-7f2eb59b>​</a></h1><p data-v-7f2eb59b>精致的切换组件</p><ul data-v-7f2eb59b><li data-v-7f2eb59b><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-7f2eb59b>源代码</a></li><li data-v-7f2eb59b><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-7f2eb59b>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-7f2eb59b>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-7f2eb59b>​</a></h2><p data-v-7f2eb59b>需要使用 <code data-v-7f2eb59b>v-model</code> 绑定一个值</p><p data-v-7f2eb59b><code data-v-7f2eb59b>icon-on</code> 和 <code data-v-7f2eb59b>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=w('<h2 id="attributes" tabindex="-1" data-v-7f2eb59b>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-7f2eb59b>​</a></h2><div class="vp-table__container" data-v-7f2eb59b><table data-v-7f2eb59b><thead data-v-7f2eb59b><tr data-v-7f2eb59b><th data-v-7f2eb59b>参数</th><th data-v-7f2eb59b>说明</th><th data-v-7f2eb59b>类型</th><th data-v-7f2eb59b>可选值</th><th data-v-7f2eb59b>默认值</th></tr></thead><tbody data-v-7f2eb59b><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>v-model</code></td><td data-v-7f2eb59b>绑定值</td><td data-v-7f2eb59b>boolean</td><td data-v-7f2eb59b>——</td><td data-v-7f2eb59b>false</td></tr><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>size</code></td><td data-v-7f2eb59b>组件尺寸</td><td data-v-7f2eb59b>string / number</td><td data-v-7f2eb59b>——</td><td data-v-7f2eb59b>40</td></tr><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>type</code></td><td data-v-7f2eb59b>动画类型</td><td data-v-7f2eb59b><a href="#swaptype" data-v-7f2eb59b>SwapType</a></td><td data-v-7f2eb59b><code data-v-7f2eb59b>sound</code> <code data-v-7f2eb59b>swap</code></td><td data-v-7f2eb59b>——</td></tr><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>icon-on</code></td><td data-v-7f2eb59b>打开展示的图标</td><td data-v-7f2eb59b><a href="/components/interface.html#fightingicon" data-v-7f2eb59b>FightingIcon</a></td><td data-v-7f2eb59b>——</td><td data-v-7f2eb59b>——</td></tr><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>icon-off</code></td><td data-v-7f2eb59b>关闭展示的图标</td><td data-v-7f2eb59b><a href="/components/interface.html#fightingicon" data-v-7f2eb59b>FightingIcon</a></td><td data-v-7f2eb59b>——</td><td data-v-7f2eb59b>——</td></tr><tr data-v-7f2eb59b><td data-v-7f2eb59b><code data-v-7f2eb59b>on-change</code></td><td data-v-7f2eb59b>当绑定值发生改变时触发的回调</td><td data-v-7f2eb59b><a href="#swapchange" data-v-7f2eb59b>SwapChange</a></td><td data-v-7f2eb59b>——</td><td data-v-7f2eb59b>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-7f2eb59b>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-7f2eb59b>​</a></h2><p data-v-7f2eb59b>组件导出以下类型定义：</p><div class="language-ts" data-v-7f2eb59b><button title="Copy Code" class="copy" data-v-7f2eb59b></button><span class="lang" data-v-7f2eb59b>ts</span><pre class="shiki material-theme-palenight" data-v-7f2eb59b><code data-v-7f2eb59b><span class="line" data-v-7f2eb59b><span style="color:#89DDFF;font-style:italic;" data-v-7f2eb59b>import</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;font-style:italic;" data-v-7f2eb59b>type</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>{</span><span style="color:#F07178;" data-v-7f2eb59b> </span><span style="color:#BABED8;" data-v-7f2eb59b>SwapInstance</span><span style="color:#89DDFF;" data-v-7f2eb59b>,</span><span style="color:#F07178;" data-v-7f2eb59b> </span><span style="color:#BABED8;" data-v-7f2eb59b>SwapProps</span><span style="color:#89DDFF;" data-v-7f2eb59b>,</span><span style="color:#F07178;" data-v-7f2eb59b> </span><span style="color:#BABED8;" data-v-7f2eb59b>SwapType</span><span style="color:#89DDFF;" data-v-7f2eb59b>,</span><span style="color:#F07178;" data-v-7f2eb59b> </span><span style="color:#BABED8;" data-v-7f2eb59b>SwapChange</span><span style="color:#F07178;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>}</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;font-style:italic;" data-v-7f2eb59b>from</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span><span style="color:#C3E88D;" data-v-7f2eb59b>fighting-design</span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-7f2eb59b>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-7f2eb59b>​</a></h3><div class="language-ts" data-v-7f2eb59b><button title="Copy Code" class="copy" data-v-7f2eb59b></button><span class="lang" data-v-7f2eb59b>ts</span><pre class="shiki material-theme-palenight" data-v-7f2eb59b><code data-v-7f2eb59b><span class="line" data-v-7f2eb59b><span style="color:#C792EA;" data-v-7f2eb59b>type</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#FFCB6B;" data-v-7f2eb59b>SwapType</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>=</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span><span style="color:#C3E88D;" data-v-7f2eb59b>sound</span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>|</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span><span style="color:#C3E88D;" data-v-7f2eb59b>swap</span><span style="color:#89DDFF;" data-v-7f2eb59b>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-7f2eb59b>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-7f2eb59b>​</a></h3><div class="language-ts" data-v-7f2eb59b><button title="Copy Code" class="copy" data-v-7f2eb59b></button><span class="lang" data-v-7f2eb59b>ts</span><pre class="shiki material-theme-palenight" data-v-7f2eb59b><code data-v-7f2eb59b><span class="line" data-v-7f2eb59b><span style="color:#C792EA;" data-v-7f2eb59b>type</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#FFCB6B;" data-v-7f2eb59b>SwapChange</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>=</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#89DDFF;" data-v-7f2eb59b>(</span><span style="color:#BABED8;font-style:italic;" data-v-7f2eb59b>value</span><span style="color:#89DDFF;" data-v-7f2eb59b>:</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#FFCB6B;" data-v-7f2eb59b>boolean</span><span style="color:#89DDFF;" data-v-7f2eb59b>,</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#BABED8;font-style:italic;" data-v-7f2eb59b>evt</span><span style="color:#89DDFF;" data-v-7f2eb59b>:</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#FFCB6B;" data-v-7f2eb59b>MouseEvent</span><span style="color:#89DDFF;" data-v-7f2eb59b>)</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#C792EA;" data-v-7f2eb59b>=&gt;</span><span style="color:#BABED8;" data-v-7f2eb59b> </span><span style="color:#FFCB6B;" data-v-7f2eb59b>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-7f2eb59b>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-7f2eb59b>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},X={href:"https://github.com/JedediahXu",target:"_blank"},j={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1702806780000}'),G={name:"components/swap.md"},H=I({...G,setup(D){const f=c(!0),v=c(!1),B=c(!0),E=c(!0),u=c(!0),A=c(!0),h=c(!0);return(Q,o)=>{const n=i("f-swap"),F=i("vp-demo"),y=i("f-avatar");return V(),S("div",null,[P,t(F,{source:""},{source:r(()=>[t(n,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),"icon-on":l(d),"icon-off":l(b)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value=e),"icon-on":l(d),"icon-off":l(b)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[M]),_:1}),U,T,t(F,{source:""},{source:r(()=>[t(n,{modelValue:B.value,"onUpdate:modelValue":o[2]||(o[2]=e=>B.value=e),size:50,"icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:E.value,"onUpdate:modelValue":o[3]||(o[3]=e=>E.value=e),size:"30px","icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[z]),_:1}),N,J,t(F,{source:""},{source:r(()=>[t(n,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=e=>u.value=e),"icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:A.value,"onUpdate:modelValue":o[5]||(o[5]=e=>A.value=e),type:"sound","icon-on":l(d),"icon-off":l(b)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:h.value,"onUpdate:modelValue":o[6]||(o[6]=e=>h.value=e),type:"swap","icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[K]),_:1}),L,s("a",O,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),s("a",X,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),s("a",j,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=q(H,[["__scopeId","data-v-7f2eb59b"]]);export{Z as __pageData,$ as default};
