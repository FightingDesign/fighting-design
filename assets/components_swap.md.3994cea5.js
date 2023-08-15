import{d,c as i,b as E,F as b,a as _}from"./chunks/index.12dde8ac.js";import{d as S,f as n,A as C,c as V,C as c,y as r,v as s,M as I,o as k,b as l,K as x,L as q,a,_ as B}from"./chunks/framework.fe94f300.js";import{F as w}from"./chunks/index.803e4f5a.js";const p=D=>(x("data-v-ec03e0c5"),D=D(),q(),D),P=I('<h1 id="swap-切换" tabindex="-1" data-v-ec03e0c5>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-ec03e0c5>​</a></h1><p data-v-ec03e0c5>精致的切换组件</p><ul data-v-ec03e0c5><li data-v-ec03e0c5><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-ec03e0c5>源代码</a></li><li data-v-ec03e0c5><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-ec03e0c5>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-ec03e0c5>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-ec03e0c5>​</a></h2><p data-v-ec03e0c5>需要使用 <code data-v-ec03e0c5>v-model</code> 绑定一个值</p><p data-v-ec03e0c5><code data-v-ec03e0c5>icon-on</code> 和 <code data-v-ec03e0c5>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"FIconMoon"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),U=p(()=>s("h2",{id:"不同尺寸",tabindex:"-1"},[a("不同尺寸 "),s("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),T=p(()=>s("p",null,[s("code",null,"size"),a(" 属性可配置不同的尺寸")],-1)),z=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value5"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":size"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"50"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value6"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"size"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"30px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconEyeSlash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value3 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value4 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),N=p(()=>s("h2",{id:"不同动画",tabindex:"-1"},[a("不同动画 "),s("a",{class:"header-anchor",href:"#不同动画","aria-label":'Permalink to "不同动画"'},"​")],-1)),J=p(()=>s("p",null,[s("code",null,"type"),a(" 属性可以配置不同的动画类型")],-1)),K=p(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value5"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value6"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"sound"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-swap")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value7"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"swap"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-on"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":icon-off"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconSun"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconMoon"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconFaceSmile"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconFaceFrown"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconEye"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"FIconEyeSlash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value5 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value6 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value7 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=I('<h2 id="attributes" tabindex="-1" data-v-ec03e0c5>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-ec03e0c5>​</a></h2><div class="vp-table__container" data-v-ec03e0c5><table data-v-ec03e0c5><thead data-v-ec03e0c5><tr data-v-ec03e0c5><th data-v-ec03e0c5>参数</th><th data-v-ec03e0c5>说明</th><th data-v-ec03e0c5>类型</th><th data-v-ec03e0c5>可选值</th><th data-v-ec03e0c5>默认值</th></tr></thead><tbody data-v-ec03e0c5><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>v-model</code></td><td data-v-ec03e0c5>绑定值</td><td data-v-ec03e0c5>boolean</td><td data-v-ec03e0c5>——</td><td data-v-ec03e0c5>false</td></tr><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>size</code></td><td data-v-ec03e0c5>组件尺寸</td><td data-v-ec03e0c5>string / number</td><td data-v-ec03e0c5>——</td><td data-v-ec03e0c5>40</td></tr><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>type</code></td><td data-v-ec03e0c5>动画类型</td><td data-v-ec03e0c5><a href="#swaptype" data-v-ec03e0c5>SwapType</a></td><td data-v-ec03e0c5><code data-v-ec03e0c5>sound</code> <code data-v-ec03e0c5>swap</code></td><td data-v-ec03e0c5>——</td></tr><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>icon-on</code></td><td data-v-ec03e0c5>打开展示的图标</td><td data-v-ec03e0c5><a href="/components/interface.html#fightingicon" data-v-ec03e0c5>FightingIcon</a></td><td data-v-ec03e0c5>——</td><td data-v-ec03e0c5>——</td></tr><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>icon-off</code></td><td data-v-ec03e0c5>关闭展示的图标</td><td data-v-ec03e0c5><a href="/components/interface.html#fightingicon" data-v-ec03e0c5>FightingIcon</a></td><td data-v-ec03e0c5>——</td><td data-v-ec03e0c5>——</td></tr><tr data-v-ec03e0c5><td data-v-ec03e0c5><code data-v-ec03e0c5>on-change</code></td><td data-v-ec03e0c5>当绑定值发生改变时触发的回调</td><td data-v-ec03e0c5><a href="#swapchange" data-v-ec03e0c5>SwapChange</a></td><td data-v-ec03e0c5>——</td><td data-v-ec03e0c5>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-ec03e0c5>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-ec03e0c5>​</a></h2><p data-v-ec03e0c5>组件导出以下类型定义：</p><div class="language-ts" data-v-ec03e0c5><button title="Copy Code" class="copy" data-v-ec03e0c5></button><span class="lang" data-v-ec03e0c5>ts</span><pre class="shiki material-theme-palenight" data-v-ec03e0c5><code data-v-ec03e0c5><span class="line" data-v-ec03e0c5><span style="color:#89DDFF;font-style:italic;" data-v-ec03e0c5>import</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;font-style:italic;" data-v-ec03e0c5>type</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>{</span><span style="color:#F07178;" data-v-ec03e0c5> </span><span style="color:#A6ACCD;" data-v-ec03e0c5>SwapInstance</span><span style="color:#89DDFF;" data-v-ec03e0c5>,</span><span style="color:#F07178;" data-v-ec03e0c5> </span><span style="color:#A6ACCD;" data-v-ec03e0c5>SwapProps</span><span style="color:#89DDFF;" data-v-ec03e0c5>,</span><span style="color:#F07178;" data-v-ec03e0c5> </span><span style="color:#A6ACCD;" data-v-ec03e0c5>SwapType</span><span style="color:#89DDFF;" data-v-ec03e0c5>,</span><span style="color:#F07178;" data-v-ec03e0c5> </span><span style="color:#A6ACCD;" data-v-ec03e0c5>SwapChange</span><span style="color:#F07178;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>}</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;font-style:italic;" data-v-ec03e0c5>from</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span><span style="color:#C3E88D;" data-v-ec03e0c5>fighting-design</span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-ec03e0c5>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-ec03e0c5>​</a></h3><div class="language-ts" data-v-ec03e0c5><button title="Copy Code" class="copy" data-v-ec03e0c5></button><span class="lang" data-v-ec03e0c5>ts</span><pre class="shiki material-theme-palenight" data-v-ec03e0c5><code data-v-ec03e0c5><span class="line" data-v-ec03e0c5><span style="color:#C792EA;" data-v-ec03e0c5>type</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#FFCB6B;" data-v-ec03e0c5>SwapType</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>=</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span><span style="color:#C3E88D;" data-v-ec03e0c5>sound</span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>|</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span><span style="color:#C3E88D;" data-v-ec03e0c5>swap</span><span style="color:#89DDFF;" data-v-ec03e0c5>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-ec03e0c5>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-ec03e0c5>​</a></h3><div class="language-ts" data-v-ec03e0c5><button title="Copy Code" class="copy" data-v-ec03e0c5></button><span class="lang" data-v-ec03e0c5>ts</span><pre class="shiki material-theme-palenight" data-v-ec03e0c5><code data-v-ec03e0c5><span class="line" data-v-ec03e0c5><span style="color:#C792EA;" data-v-ec03e0c5>type</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#FFCB6B;" data-v-ec03e0c5>SwapChange</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>=</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#89DDFF;" data-v-ec03e0c5>(</span><span style="color:#A6ACCD;font-style:italic;" data-v-ec03e0c5>evt</span><span style="color:#89DDFF;" data-v-ec03e0c5>:</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#FFCB6B;" data-v-ec03e0c5>MouseEvent</span><span style="color:#89DDFF;" data-v-ec03e0c5>,</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#A6ACCD;font-style:italic;" data-v-ec03e0c5>value</span><span style="color:#89DDFF;" data-v-ec03e0c5>:</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#FFCB6B;" data-v-ec03e0c5>boolean</span><span style="color:#89DDFF;" data-v-ec03e0c5>)</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#C792EA;" data-v-ec03e0c5>=&gt;</span><span style="color:#A6ACCD;" data-v-ec03e0c5> </span><span style="color:#FFCB6B;" data-v-ec03e0c5>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-ec03e0c5>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-ec03e0c5>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},j={href:"https://github.com/ChetSerenade",target:"_blank"},G={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1692058812000}'),H={name:"components/swap.md"},Q=S({...H,setup(D){const A=n(!0),v=n(!1),u=n(!0),f=n(!0),h=n(!0),m=n(!0),g=n(!0);return(R,o)=>{const t=C("f-swap"),F=C("vp-demo"),y=C("f-avatar");return k(),V("div",null,[P,c(F,{source:""},{source:r(()=>[c(t,{modelValue:A.value,"onUpdate:modelValue":o[0]||(o[0]=e=>A.value=e),"icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),c(t,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value=e),"icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[M]),_:1}),U,T,c(F,{source:""},{source:r(()=>[c(t,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=e=>u.value=e),size:50,"icon-on":l(w),"icon-off":l(E)},null,8,["modelValue","icon-on","icon-off"]),c(t,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=e=>f.value=e),size:"30px","icon-on":l(b),"icon-off":l(_)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[z]),_:1}),N,J,c(F,{source:""},{source:r(()=>[c(t,{modelValue:h.value,"onUpdate:modelValue":o[4]||(o[4]=e=>h.value=e),"icon-on":l(b),"icon-off":l(_)},null,8,["modelValue","icon-on","icon-off"]),c(t,{modelValue:m.value,"onUpdate:modelValue":o[5]||(o[5]=e=>m.value=e),type:"sound","icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),c(t,{modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=e=>g.value=e),type:"swap","icon-on":l(w),"icon-off":l(E)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[K]),_:1}),L,s("a",O,[c(y,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),s("a",j,[c(y,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),s("a",G,[c(y,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=B(Q,[["__scopeId","data-v-ec03e0c5"]]);export{Z as __pageData,$ as default};
