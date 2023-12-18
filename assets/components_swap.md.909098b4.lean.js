import{d as y,c as i,b as C,F as g,a as b}from"./chunks/index.d314dea3.js";import{d as I,f as c,A as v,c as S,C as n,y as d,v as a,M as w,o as V,b as l,K as k,L as x,a as s,_ as q}from"./chunks/framework.14c5a59b.js";import{F as _}from"./chunks/index.70ae4281.js";const p=r=>(k("data-v-c43ad36d"),r=r(),x(),r),P=w('<h1 id="swap-切换" tabindex="-1" data-v-c43ad36d>Swap 切换 <a class="header-anchor" href="#swap-切换" aria-label="Permalink to &quot;Swap 切换&quot;" data-v-c43ad36d>​</a></h1><p data-v-c43ad36d>精致的切换组件</p><ul data-v-c43ad36d><li data-v-c43ad36d><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-c43ad36d>源代码</a></li><li data-v-c43ad36d><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-c43ad36d>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-c43ad36d>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-c43ad36d>​</a></h2><p data-v-c43ad36d>需要使用 <code data-v-c43ad36d>v-model</code> 绑定一个值</p><p data-v-c43ad36d><code data-v-c43ad36d>icon-on</code> 和 <code data-v-c43ad36d>icon-off</code> 分别控制切换的不同图标</p>',6),M=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
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
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),L=w('<h2 id="attributes" tabindex="-1" data-v-c43ad36d>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-c43ad36d>​</a></h2><div class="vp-table__container" data-v-c43ad36d><table data-v-c43ad36d><thead data-v-c43ad36d><tr data-v-c43ad36d><th data-v-c43ad36d>参数</th><th data-v-c43ad36d>说明</th><th data-v-c43ad36d>类型</th><th data-v-c43ad36d>可选值</th><th data-v-c43ad36d>默认值</th></tr></thead><tbody data-v-c43ad36d><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>v-model</code></td><td data-v-c43ad36d>绑定值</td><td data-v-c43ad36d>boolean</td><td data-v-c43ad36d>——</td><td data-v-c43ad36d>false</td></tr><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>size</code></td><td data-v-c43ad36d>组件尺寸</td><td data-v-c43ad36d>string / number</td><td data-v-c43ad36d>——</td><td data-v-c43ad36d>40</td></tr><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>type</code></td><td data-v-c43ad36d>动画类型</td><td data-v-c43ad36d><a href="#swaptype" data-v-c43ad36d>SwapType</a></td><td data-v-c43ad36d><code data-v-c43ad36d>sound</code> <code data-v-c43ad36d>swap</code></td><td data-v-c43ad36d>——</td></tr><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>icon-on</code></td><td data-v-c43ad36d>打开展示的图标</td><td data-v-c43ad36d><a href="/components/interface.html#fightingicon" data-v-c43ad36d>FightingIcon</a></td><td data-v-c43ad36d>——</td><td data-v-c43ad36d>——</td></tr><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>icon-off</code></td><td data-v-c43ad36d>关闭展示的图标</td><td data-v-c43ad36d><a href="/components/interface.html#fightingicon" data-v-c43ad36d>FightingIcon</a></td><td data-v-c43ad36d>——</td><td data-v-c43ad36d>——</td></tr><tr data-v-c43ad36d><td data-v-c43ad36d><code data-v-c43ad36d>on-change</code></td><td data-v-c43ad36d>当绑定值发生改变时触发的回调</td><td data-v-c43ad36d><a href="#swapchange" data-v-c43ad36d>SwapChange</a></td><td data-v-c43ad36d>——</td><td data-v-c43ad36d>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-c43ad36d>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-c43ad36d>​</a></h2><p data-v-c43ad36d>组件导出以下类型定义：</p><div class="language-ts" data-v-c43ad36d><button title="Copy Code" class="copy" data-v-c43ad36d></button><span class="lang" data-v-c43ad36d>ts</span><pre class="shiki material-theme-palenight" data-v-c43ad36d><code data-v-c43ad36d><span class="line" data-v-c43ad36d><span style="color:#89DDFF;font-style:italic;" data-v-c43ad36d>import</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;font-style:italic;" data-v-c43ad36d>type</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>{</span><span style="color:#F07178;" data-v-c43ad36d> </span><span style="color:#BABED8;" data-v-c43ad36d>SwapInstance</span><span style="color:#89DDFF;" data-v-c43ad36d>,</span><span style="color:#F07178;" data-v-c43ad36d> </span><span style="color:#BABED8;" data-v-c43ad36d>SwapProps</span><span style="color:#89DDFF;" data-v-c43ad36d>,</span><span style="color:#F07178;" data-v-c43ad36d> </span><span style="color:#BABED8;" data-v-c43ad36d>SwapType</span><span style="color:#89DDFF;" data-v-c43ad36d>,</span><span style="color:#F07178;" data-v-c43ad36d> </span><span style="color:#BABED8;" data-v-c43ad36d>SwapChange</span><span style="color:#F07178;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>}</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;font-style:italic;" data-v-c43ad36d>from</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span><span style="color:#C3E88D;" data-v-c43ad36d>fighting-design</span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span></span></code></pre></div><h3 id="swaptype" tabindex="-1" data-v-c43ad36d>SwapType <a class="header-anchor" href="#swaptype" aria-label="Permalink to &quot;SwapType&quot;" data-v-c43ad36d>​</a></h3><div class="language-ts" data-v-c43ad36d><button title="Copy Code" class="copy" data-v-c43ad36d></button><span class="lang" data-v-c43ad36d>ts</span><pre class="shiki material-theme-palenight" data-v-c43ad36d><code data-v-c43ad36d><span class="line" data-v-c43ad36d><span style="color:#C792EA;" data-v-c43ad36d>type</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#FFCB6B;" data-v-c43ad36d>SwapType</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>=</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span><span style="color:#C3E88D;" data-v-c43ad36d>sound</span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>|</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span><span style="color:#C3E88D;" data-v-c43ad36d>swap</span><span style="color:#89DDFF;" data-v-c43ad36d>&#39;</span></span></code></pre></div><h3 id="swapchange" tabindex="-1" data-v-c43ad36d>SwapChange <a class="header-anchor" href="#swapchange" aria-label="Permalink to &quot;SwapChange&quot;" data-v-c43ad36d>​</a></h3><div class="language-ts" data-v-c43ad36d><button title="Copy Code" class="copy" data-v-c43ad36d></button><span class="lang" data-v-c43ad36d>ts</span><pre class="shiki material-theme-palenight" data-v-c43ad36d><code data-v-c43ad36d><span class="line" data-v-c43ad36d><span style="color:#C792EA;" data-v-c43ad36d>type</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#FFCB6B;" data-v-c43ad36d>SwapChange</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>=</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#89DDFF;" data-v-c43ad36d>(</span><span style="color:#BABED8;font-style:italic;" data-v-c43ad36d>value</span><span style="color:#89DDFF;" data-v-c43ad36d>:</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#FFCB6B;" data-v-c43ad36d>boolean</span><span style="color:#89DDFF;" data-v-c43ad36d>,</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#BABED8;font-style:italic;" data-v-c43ad36d>evt</span><span style="color:#89DDFF;" data-v-c43ad36d>:</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#FFCB6B;" data-v-c43ad36d>MouseEvent</span><span style="color:#89DDFF;" data-v-c43ad36d>)</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#C792EA;" data-v-c43ad36d>=&gt;</span><span style="color:#BABED8;" data-v-c43ad36d> </span><span style="color:#FFCB6B;" data-v-c43ad36d>void</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-c43ad36d>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-c43ad36d>​</a></h2>',10),O={href:"https://github.com/Tyh2001",target:"_blank"},X={href:"https://github.com/JedediahXu",target:"_blank"},j={href:"https://github.com/Alphatrionty",target:"_blank"},Z=JSON.parse('{"title":"Swap 切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap.md","filePath":"components/swap.md","lastUpdated":1702907366000}'),G={name:"components/swap.md"},H=I({...G,setup(r){const B=c(!0),E=c(!1),u=c(!0),A=c(!0),f=c(!0),h=c(!0),m=c(!0);return(Q,o)=>{const e=v("f-swap"),D=v("vp-demo"),F=v("f-avatar");return V(),S("div",null,[P,n(D,{source:""},{source:d(()=>[n(e,{modelValue:B.value,"onUpdate:modelValue":o[0]||(o[0]=t=>B.value=t),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:E.value,"onUpdate:modelValue":o[1]||(o[1]=t=>E.value=t),"icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"])]),default:d(()=>[M]),_:1}),U,T,n(D,{source:""},{source:d(()=>[n(e,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=t=>u.value=t),size:50,"icon-on":l(_),"icon-off":l(C)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:A.value,"onUpdate:modelValue":o[3]||(o[3]=t=>A.value=t),size:"30px","icon-on":l(g),"icon-off":l(b)},null,8,["modelValue","icon-on","icon-off"])]),default:d(()=>[z]),_:1}),N,J,n(D,{source:""},{source:d(()=>[n(e,{modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=t=>f.value=t),"icon-on":l(g),"icon-off":l(b)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:h.value,"onUpdate:modelValue":o[5]||(o[5]=t=>h.value=t),type:"sound","icon-on":l(y),"icon-off":l(i)},null,8,["modelValue","icon-on","icon-off"]),n(e,{modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=t=>m.value=t),type:"swap","icon-on":l(_),"icon-off":l(C)},null,8,["modelValue","icon-on","icon-off"])]),default:d(()=>[K]),_:1}),L,a("a",O,[n(F,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",X,[n(F,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})]),a("a",j,[n(F,{round:"",src:"https://avatars.githubusercontent.com/u/57850101?v=4"})])])}}});const $=q(H,[["__scopeId","data-v-c43ad36d"]]);export{Z as __pageData,$ as default};
