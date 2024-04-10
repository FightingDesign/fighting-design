import{d as y,c as i,b as m,F as C,a as g}from"./chunks/index.e1bcf0c0.js";import{d as I,f as c,c as S,C as t,y as r,v as a,M as w,A as f,o as V,b as l,K as k,L as x,a as s,_ as q}from"./chunks/framework.51daf3f7.js";import{F as _}from"./chunks/index.6ba50791.js";const p=D=>(k("data-v-c5edafeb"),D=D(),x(),D),P=w('<h1 id="swap-切换" tabindex="-1" data-v-c5edafeb>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-c5edafeb>​</a></h1><p data-v-c5edafeb>精致的切换组件</p><ul data-v-c5edafeb><li data-v-c5edafeb><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-c5edafeb>源代码</a></li><li data-v-c5edafeb><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-c5edafeb>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-c5edafeb>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-c5edafeb>​</a></h2><p data-v-c5edafeb>需要使用 <code data-v-c5edafeb>v-model</code> 绑定一个值</p><p data-v-c5edafeb><code data-v-c5edafeb>icon-on</code> 和 <code data-v-c5edafeb>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"FIconMoon"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value2 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"false"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),U=p(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[s("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),T=p(()=>a("p",null,[a("code",null,"size"),s(" 属性可配置不同的尺寸")],-1)),z=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value5"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"50"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"  />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value6"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"30px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconEyeSlash")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"  "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value3 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value4 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),N=p(()=>a("h2",{id:"不同动画",tabindex:"-1"},[s("不同动画 "),a("a",{class:"header-anchor",href:"#不同动画","aria-label":'Permalink to "不同动画"'},"​")],-1)),J=p(()=>a("p",null,[a("code",null,"type"),s(" 属性可以配置不同的动画类型")],-1)),K=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value5"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconEyeSlash"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value6"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"sound"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-swap")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value7"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"swap"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-on"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":icon-off"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"  />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconSun"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconMoon"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconFaceSmile"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconFaceFrown"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconEye"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"    "),a("span",{style:{color:"#BABED8"}},"FIconEyeSlash")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#F07178"}},"  "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"@fighting-design/fighting-icon"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value5 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value6 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value7 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#FF9CAC"}},"true"),a("span",{style:{color:"#BABED8"}},")")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=w('<h2 id="attributes" tabindex="-1" data-v-c5edafeb>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-c5edafeb>​</a></h2><div class="vp-table__container" data-v-c5edafeb><table data-v-c5edafeb><thead data-v-c5edafeb><tr data-v-c5edafeb><th data-v-c5edafeb>参数</th><th data-v-c5edafeb>说明</th><th data-v-c5edafeb>类型</th><th data-v-c5edafeb>可选值</th><th data-v-c5edafeb>默认值</th></tr></thead><tbody data-v-c5edafeb><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>v-model</code></td><td data-v-c5edafeb>绑定值</td><td data-v-c5edafeb>boolean</td><td data-v-c5edafeb>——</td><td data-v-c5edafeb>false</td></tr><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>size</code></td><td data-v-c5edafeb>组件尺寸</td><td data-v-c5edafeb>string / number</td><td data-v-c5edafeb>——</td><td data-v-c5edafeb>40</td></tr><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>type</code></td><td data-v-c5edafeb>动画类型</td><td data-v-c5edafeb><a href="#swaptype" data-v-c5edafeb>SwapType</a></td><td data-v-c5edafeb><code data-v-c5edafeb>sound</code> <code data-v-c5edafeb>swap</code></td><td data-v-c5edafeb>——</td></tr><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>icon-on</code></td><td data-v-c5edafeb>打开展示的图标</td><td data-v-c5edafeb><a href="/components/interface.html#fightingicon" data-v-c5edafeb>FightingIcon</a></td><td data-v-c5edafeb>——</td><td data-v-c5edafeb>——</td></tr><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>icon-off</code></td><td data-v-c5edafeb>关闭展示的图标</td><td data-v-c5edafeb><a href="/components/interface.html#fightingicon" data-v-c5edafeb>FightingIcon</a></td><td data-v-c5edafeb>——</td><td data-v-c5edafeb>——</td></tr><tr data-v-c5edafeb><td data-v-c5edafeb><code data-v-c5edafeb>on-change</code></td><td data-v-c5edafeb>当绑定值发生改变时触发的回调</td><td data-v-c5edafeb><a href="#swapchange" data-v-c5edafeb>SwapChange</a></td><td data-v-c5edafeb>——</td><td data-v-c5edafeb>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-c5edafeb>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-c5edafeb>​</a></h2><p data-v-c5edafeb>组件导出以下类型定义：</p><div class="language-ts" data-v-c5edafeb><button title="Copy Code" class="copy" data-v-c5edafeb></button><span class="lang" data-v-c5edafeb>ts</span><pre class="shiki material-theme-palenight" data-v-c5edafeb><code data-v-c5edafeb><span class="line" data-v-c5edafeb><span style="color:#89DDFF;font-style:italic;" data-v-c5edafeb>import</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;font-style:italic;" data-v-c5edafeb>type</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>{</span><span style="color:#F07178;" data-v-c5edafeb> </span><span style="color:#BABED8;" data-v-c5edafeb>SwapInstance</span><span style="color:#89DDFF;" data-v-c5edafeb>,</span><span style="color:#F07178;" data-v-c5edafeb> </span><span style="color:#BABED8;" data-v-c5edafeb>SwapProps</span><span style="color:#89DDFF;" data-v-c5edafeb>,</span><span style="color:#F07178;" data-v-c5edafeb> </span><span style="color:#BABED8;" data-v-c5edafeb>SwapType</span><span style="color:#89DDFF;" data-v-c5edafeb>,</span><span style="color:#F07178;" data-v-c5edafeb> </span><span style="color:#BABED8;" data-v-c5edafeb>SwapChange</span><span style="color:#F07178;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>}</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;font-style:italic;" data-v-c5edafeb>from</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span><span style="color:#C3E88D;" data-v-c5edafeb>fighting-design</span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-c5edafeb>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-c5edafeb>​</a></h3><div class="language-ts" data-v-c5edafeb><button title="Copy Code" class="copy" data-v-c5edafeb></button><span class="lang" data-v-c5edafeb>ts</span><pre class="shiki material-theme-palenight" data-v-c5edafeb><code data-v-c5edafeb><span class="line" data-v-c5edafeb><span style="color:#C792EA;" data-v-c5edafeb>type</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#FFCB6B;" data-v-c5edafeb>SwapType</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>=</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span><span style="color:#C3E88D;" data-v-c5edafeb>sound</span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>|</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span><span style="color:#C3E88D;" data-v-c5edafeb>swap</span><span style="color:#89DDFF;" data-v-c5edafeb>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-c5edafeb>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-c5edafeb>​</a></h3><div class="language-ts" data-v-c5edafeb><button title="Copy Code" class="copy" data-v-c5edafeb></button><span class="lang" data-v-c5edafeb>ts</span><pre class="shiki material-theme-palenight" data-v-c5edafeb><code data-v-c5edafeb><span class="line" data-v-c5edafeb><span style="color:#C792EA;" data-v-c5edafeb>type</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#FFCB6B;" data-v-c5edafeb>SwapChange</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>=</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#89DDFF;" data-v-c5edafeb>(</span><span style="color:#BABED8;font-style:italic;" data-v-c5edafeb>value</span><span style="color:#89DDFF;" data-v-c5edafeb>:</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#FFCB6B;" data-v-c5edafeb>boolean</span><span style="color:#89DDFF;" data-v-c5edafeb>,</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#BABED8;font-style:italic;" data-v-c5edafeb>evt</span><span style="color:#89DDFF;" data-v-c5edafeb>:</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#FFCB6B;" data-v-c5edafeb>MouseEvent</span><span style="color:#89DDFF;" data-v-c5edafeb>)</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#C792EA;" data-v-c5edafeb>=&gt;</span><span style="color:#BABED8;" data-v-c5edafeb> </span><span style="color:#FFCB6B;" data-v-c5edafeb>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-c5edafeb>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-c5edafeb>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},X={href:"https://github.com/JedediahXu",target:"_blank"},j={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1712728331000}'),G={name:"components/swap.md"},H=I({...G,setup(D){const v=c(!0),b=c(!1),B=c(!0),E=c(!0),u=c(!0),A=c(!0),h=c(!0);return(Q,o)=>{const n=f("f-swap"),F=f("vp-demo"),d=f("f-avatar");return V(),S("div",null,[P,t(F,{source:""},{source:r(()=>[t(n,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:b.value,"onUpdate:modelValue":o[1]||(o[1]=e=>b.value=e),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[M]),_:1}),U,T,t(F,{source:""},{source:r(()=>[t(n,{modelValue:B.value,"onUpdate:modelValue":o[2]||(o[2]=e=>B.value=e),size:50,"icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:E.value,"onUpdate:modelValue":o[3]||(o[3]=e=>E.value=e),size:"30px","icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[z]),_:1}),N,J,t(F,{source:""},{source:r(()=>[t(n,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=e=>u.value=e),"icon-on":l(C),"icon-off":l(g)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:A.value,"onUpdate:modelValue":o[5]||(o[5]=e=>A.value=e),type:"sound","icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:h.value,"onUpdate:modelValue":o[6]||(o[6]=e=>h.value=e),type:"swap","icon-on":l(_),"icon-off":l(m)},null,8,["modelValue","icon-on","icon-off"])]),default:r(()=>[K]),_:1}),L,a("a",O,[t(d,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",X,[t(d,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),a("a",j,[t(d,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=q(H,[["__scopeId","data-v-c5edafeb"]]);export{Z as __pageData,$ as default};
