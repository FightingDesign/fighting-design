import{d,c as i,b as E,F as b,a as _}from"./chunks/index.12dde8ac.js";import{d as S,f as c,A as C,c as V,C as t,y as r,v as a,M as I,o as k,b as l,K as x,L as q,a as s,_ as B}from"./chunks/framework.fe94f300.js";import{F as w}from"./chunks/index.803e4f5a.js";const p=D=>(x("data-v-ee43a640"),D=D(),q(),D),P=I('<h1 id="swap-切换" tabindex="-1" data-v-ee43a640>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-ee43a640>​</a></h1><p data-v-ee43a640>精致的切换组件</p><ul data-v-ee43a640><li data-v-ee43a640><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-ee43a640>源代码</a></li><li data-v-ee43a640><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-ee43a640>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-ee43a640>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-ee43a640>​</a></h2><p data-v-ee43a640>需要使用 <code data-v-ee43a640>v-model</code> 绑定一个值</p><p data-v-ee43a640><code data-v-ee43a640>icon-on</code> 和 <code data-v-ee43a640>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"FIconMoon"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value2 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"false"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),U=p(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[s("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),T=p(()=>a("p",null,[a("code",null,"size"),s(" 属性可配置不同的尺寸")],-1)),z=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value5"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"50"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"  />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value6"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"30px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconEyeSlash")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"  "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value3 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value4 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),N=p(()=>a("h2",{id:"不同动画",tabindex:"-1"},[s("不同动画 "),a("a",{class:"header-anchor",href:"#不同动画","aria-label":'Permalink to "不同动画"'},"​")],-1)),J=p(()=>a("p",null,[a("code",null,"type"),s(" 属性可以配置不同的动画类型")],-1)),K=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value5"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value6"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"sound"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value7"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"swap"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"  />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#A6ACCD"}},"FIconEyeSlash")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"  "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value5 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value6 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," value7 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=I('<h2 id="attributes" tabindex="-1" data-v-ee43a640>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-ee43a640>​</a></h2><div class="vp-table__container" data-v-ee43a640><table data-v-ee43a640><thead data-v-ee43a640><tr data-v-ee43a640><th data-v-ee43a640>参数</th><th data-v-ee43a640>说明</th><th data-v-ee43a640>类型</th><th data-v-ee43a640>可选值</th><th data-v-ee43a640>默认值</th></tr></thead><tbody data-v-ee43a640><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>v-model</code></td><td data-v-ee43a640>绑定值</td><td data-v-ee43a640>boolean</td><td data-v-ee43a640>——</td><td data-v-ee43a640>false</td></tr><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>size</code></td><td data-v-ee43a640>组件尺寸</td><td data-v-ee43a640>string / number</td><td data-v-ee43a640>——</td><td data-v-ee43a640>40</td></tr><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>type</code></td><td data-v-ee43a640>动画类型</td><td data-v-ee43a640><a href="#swaptype" data-v-ee43a640>SwapType</a></td><td data-v-ee43a640><code data-v-ee43a640>sound</code> <code data-v-ee43a640>swap</code></td><td data-v-ee43a640>——</td></tr><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>icon-on</code></td><td data-v-ee43a640>打开展示的图标</td><td data-v-ee43a640><a href="/components/interface.html#fightingicon" data-v-ee43a640>FightingIcon</a></td><td data-v-ee43a640>——</td><td data-v-ee43a640>——</td></tr><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>icon-off</code></td><td data-v-ee43a640>关闭展示的图标</td><td data-v-ee43a640><a href="/components/interface.html#fightingicon" data-v-ee43a640>FightingIcon</a></td><td data-v-ee43a640>——</td><td data-v-ee43a640>——</td></tr><tr data-v-ee43a640><td data-v-ee43a640><code data-v-ee43a640>on-change</code></td><td data-v-ee43a640>当绑定值发生改变时触发的回调</td><td data-v-ee43a640><a href="#swapchange" data-v-ee43a640>SwapChange</a></td><td data-v-ee43a640>——</td><td data-v-ee43a640>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-ee43a640>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-ee43a640>​</a></h2><p data-v-ee43a640>组件导出以下类型定义：</p><div class="language-ts" data-v-ee43a640><button title="Copy Code" class="copy" data-v-ee43a640></button><span class="lang" data-v-ee43a640>ts</span><pre class="shiki material-theme-palenight" data-v-ee43a640><code data-v-ee43a640><span class="line" data-v-ee43a640><span style="color:#89DDFF;font-style:italic;" data-v-ee43a640>import</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;font-style:italic;" data-v-ee43a640>type</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>{</span><span style="color:#F07178;" data-v-ee43a640> </span><span style="color:#A6ACCD;" data-v-ee43a640>SwapInstance</span><span style="color:#89DDFF;" data-v-ee43a640>,</span><span style="color:#F07178;" data-v-ee43a640> </span><span style="color:#A6ACCD;" data-v-ee43a640>SwapProps</span><span style="color:#89DDFF;" data-v-ee43a640>,</span><span style="color:#F07178;" data-v-ee43a640> </span><span style="color:#A6ACCD;" data-v-ee43a640>SwapType</span><span style="color:#89DDFF;" data-v-ee43a640>,</span><span style="color:#F07178;" data-v-ee43a640> </span><span style="color:#A6ACCD;" data-v-ee43a640>SwapChange</span><span style="color:#F07178;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>}</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;font-style:italic;" data-v-ee43a640>from</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span><span style="color:#C3E88D;" data-v-ee43a640>fighting-design</span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-ee43a640>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-ee43a640>​</a></h3><div class="language-ts" data-v-ee43a640><button title="Copy Code" class="copy" data-v-ee43a640></button><span class="lang" data-v-ee43a640>ts</span><pre class="shiki material-theme-palenight" data-v-ee43a640><code data-v-ee43a640><span class="line" data-v-ee43a640><span style="color:#C792EA;" data-v-ee43a640>type</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#FFCB6B;" data-v-ee43a640>SwapType</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>=</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span><span style="color:#C3E88D;" data-v-ee43a640>sound</span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>|</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span><span style="color:#C3E88D;" data-v-ee43a640>swap</span><span style="color:#89DDFF;" data-v-ee43a640>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-ee43a640>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-ee43a640>​</a></h3><div class="language-ts" data-v-ee43a640><button title="Copy Code" class="copy" data-v-ee43a640></button><span class="lang" data-v-ee43a640>ts</span><pre class="shiki material-theme-palenight" data-v-ee43a640><code data-v-ee43a640><span class="line" data-v-ee43a640><span style="color:#C792EA;" data-v-ee43a640>type</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#FFCB6B;" data-v-ee43a640>SwapChange</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>=</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#89DDFF;" data-v-ee43a640>(</span><span style="color:#A6ACCD;font-style:italic;" data-v-ee43a640>evt</span><span style="color:#89DDFF;" data-v-ee43a640>:</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#FFCB6B;" data-v-ee43a640>MouseEvent</span><span style="color:#89DDFF;" data-v-ee43a640>,</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#A6ACCD;font-style:italic;" data-v-ee43a640>value</span><span style="color:#89DDFF;" data-v-ee43a640>:</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#FFCB6B;" data-v-ee43a640>boolean</span><span style="color:#89DDFF;" data-v-ee43a640>)</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#C792EA;" data-v-ee43a640>=&gt;</span><span style="color:#A6ACCD;" data-v-ee43a640> </span><span style="color:#FFCB6B;" data-v-ee43a640>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-ee43a640>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-ee43a640>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},j={href:"https://github.com/ChetSerenade",target:"_blank"},G={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1691715519000}'),H={name:"components/swap.md"},Q=S({...H,setup(D){const A=c(!0),v=c(!1),u=c(!0),f=c(!0),h=c(!0),m=c(!0),g=c(!0);return(R,o)=>{const n=C("f-swap"),F=C("vp-demo"),y=C("f-avatar");return k(),V("div",null,[P,t(F,{source:""},{source:r(()=>[t(n,{modelValue:A.value,"onUpdate:modelValue":o[0]||(o[0]=e=>A.value=e),"icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value=e),"icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[M]),_:1}),U,T,t(F,{source:""},{source:r(()=>[t(n,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=e=>u.value=e),size:50,"icon-on":l(w),"icon-off":l(E)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=e=>f.value=e),size:"30px","icon-on":l(b),"icon-off":l(_)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[z]),_:1}),N,J,t(F,{source:""},{source:r(()=>[t(n,{modelValue:h.value,"onUpdate:modelValue":o[4]||(o[4]=e=>h.value=e),"icon-on":l(b),"icon-off":l(_)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:m.value,"onUpdate:modelValue":o[5]||(o[5]=e=>m.value=e),type:"sound","icon-on":l(d),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=e=>g.value=e),type:"swap","icon-on":l(w),"icon-off":l(E)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[K]),_:1}),L,a("a",O,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",j,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),a("a",G,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=B(Q,[["__scopeId","data-v-ee43a640"]]);export{Z as __pageData,$ as default};
