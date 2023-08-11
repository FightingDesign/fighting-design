import{_ as d,A as e,c as i,C as l,y as t,v as s,M as y,o as C,a,K as f,L as A}from"./chunks/framework.fe94f300.js";const V=JSON.parse('{"title":"Watermark 水印","description":"","frontmatter":{},"headers":[],"relativePath":"components/watermark.md","filePath":"components/watermark.md","lastUpdated":1691762430000}'),v={name:"components/watermark.md"},o=n=>(f("data-v-0f15497e"),n=n(),A(),n),h=y('<h1 id="watermark-水印" tabindex="-1" data-v-0f15497e>Watermark 水印 <a class="header-anchor" href="#watermark-水印" aria-label="Permalink to &quot;Watermark 水印&quot;" data-v-0f15497e>​</a></h1><p data-v-0f15497e>据说水印容易让人讨厌？</p><ul data-v-0f15497e><li data-v-0f15497e><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/watermark" target="_blank" rel="noreferrer" data-v-0f15497e>源代码</a></li><li data-v-0f15497e><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/watermark.md" target="_blank" rel="noreferrer" data-v-0f15497e>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-0f15497e>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-0f15497e>​</a></h2><p data-v-0f15497e><code data-v-0f15497e>content</code> 可以配置想要显示的文字内容，<code data-v-0f15497e>height</code> 和 <code data-v-0f15497e>width</code> 可以配置背景图片的尺寸</p>',5),u=o(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-watermark"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"content"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"机密文件"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"100"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"130"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"绝对机密"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-avatar"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"round"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"block"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-watermark"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-watermark"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"500px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-card"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"240px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),m=o(()=>s("h2",{id:"自定义文字样式",tabindex:"-1"},[a("自定义文字样式 "),s("a",{class:"header-anchor",href:"#自定义文字样式","aria-label":'Permalink to "自定义文字样式"'},"​")],-1)),_=o(()=>s("p",null,[s("code",null,"font-color"),a(" 和 "),s("code",null,"font-size"),a(" 可以自定义你需要的文字大小和颜色")],-1)),g=o(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-watermark")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"content"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"机密文件"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"100"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"130"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"font-color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"red"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"font-size"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"16px"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  >")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"绝对机密"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-avatar"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"round"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"block"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-watermark"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-watermark"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"500px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-card"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"240px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),b=o(()=>s("h2",{id:"自定义背景",tabindex:"-1"},[a("自定义背景 "),s("a",{class:"header-anchor",href:"#自定义背景","aria-label":'Permalink to "自定义背景"'},"​")],-1)),k=o(()=>s("p",null,[a("如果你不喜欢文字的背景，也可以使用你喜欢的自定义图片当作背景，只需要通过 "),s("code",null,"image"),a(" 传入一个地址即可")],-1)),E=o(()=>s("p",null,[s("code",null,"image"),a(" 的优先级高于 "),s("code",null,"content"),a(" 的水印内容")],-1)),x=o(()=>s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-watermark"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"image"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"绝对机密"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-avatar"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"round"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"block"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-text"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-card"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-watermark"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-watermark"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"500px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-card"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"240px"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1)),w=y('<h2 id="attributes" tabindex="-1" data-v-0f15497e>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-0f15497e>​</a></h2><div class="vp-table__container" data-v-0f15497e><table data-v-0f15497e><thead data-v-0f15497e><tr data-v-0f15497e><th data-v-0f15497e>参数</th><th data-v-0f15497e>说明</th><th data-v-0f15497e>类型</th><th data-v-0f15497e>可选值</th><th data-v-0f15497e>默认值</th></tr></thead><tbody data-v-0f15497e><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>content</code></td><td data-v-0f15497e>水印内容</td><td data-v-0f15497e>string</td><td data-v-0f15497e>——</td><td data-v-0f15497e>——</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>width</code></td><td data-v-0f15497e>水印的宽度</td><td data-v-0f15497e>number</td><td data-v-0f15497e>——</td><td data-v-0f15497e>280</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>height</code></td><td data-v-0f15497e>水印的高度</td><td data-v-0f15497e>number</td><td data-v-0f15497e>——</td><td data-v-0f15497e>200</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>fontSize</code></td><td data-v-0f15497e>文字大小</td><td data-v-0f15497e>string / number</td><td data-v-0f15497e>——</td><td data-v-0f15497e>30px</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>fontColor</code></td><td data-v-0f15497e>文字颜色</td><td data-v-0f15497e>string</td><td data-v-0f15497e>——</td><td data-v-0f15497e>#333</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>image</code></td><td data-v-0f15497e>自定义图片水印</td><td data-v-0f15497e>string</td><td data-v-0f15497e>——</td><td data-v-0f15497e>——</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>block</code></td><td data-v-0f15497e>是否为块级元素</td><td data-v-0f15497e>boolean</td><td data-v-0f15497e>——</td><td data-v-0f15497e>false</td></tr><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>zIndex</code></td><td data-v-0f15497e>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer" data-v-0f15497e>z-index</a> 属性</td><td data-v-0f15497e>number</td><td data-v-0f15497e>——</td><td data-v-0f15497e>100</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-0f15497e>Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;" data-v-0f15497e>​</a></h2><div class="vp-table__container" data-v-0f15497e><table data-v-0f15497e><thead data-v-0f15497e><tr data-v-0f15497e><th data-v-0f15497e>名称</th><th data-v-0f15497e>说明</th></tr></thead><tbody data-v-0f15497e><tr data-v-0f15497e><td data-v-0f15497e><code data-v-0f15497e>default</code></td><td data-v-0f15497e>水印覆盖的内容</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-0f15497e>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-0f15497e>​</a></h2><p data-v-0f15497e>组件导出以下类型定义：</p><div class="language-ts" data-v-0f15497e><button title="Copy Code" class="copy" data-v-0f15497e></button><span class="lang" data-v-0f15497e>ts</span><pre class="shiki material-theme-palenight" data-v-0f15497e><code data-v-0f15497e><span class="line" data-v-0f15497e><span style="color:#89DDFF;font-style:italic;" data-v-0f15497e>import</span><span style="color:#A6ACCD;" data-v-0f15497e> </span><span style="color:#89DDFF;font-style:italic;" data-v-0f15497e>type</span><span style="color:#A6ACCD;" data-v-0f15497e> </span><span style="color:#89DDFF;" data-v-0f15497e>{</span><span style="color:#F07178;" data-v-0f15497e> </span><span style="color:#A6ACCD;" data-v-0f15497e>WatermarkInstance</span><span style="color:#89DDFF;" data-v-0f15497e>,</span><span style="color:#F07178;" data-v-0f15497e> </span><span style="color:#A6ACCD;" data-v-0f15497e>WatermarkProps</span><span style="color:#F07178;" data-v-0f15497e> </span><span style="color:#89DDFF;" data-v-0f15497e>}</span><span style="color:#A6ACCD;" data-v-0f15497e> </span><span style="color:#89DDFF;font-style:italic;" data-v-0f15497e>from</span><span style="color:#A6ACCD;" data-v-0f15497e> </span><span style="color:#89DDFF;" data-v-0f15497e>&#39;</span><span style="color:#C3E88D;" data-v-0f15497e>fighting-design</span><span style="color:#89DDFF;" data-v-0f15497e>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-0f15497e>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-0f15497e>​</a></h2>',8),B={href:"https://github.com/Tyh2001",target:"_blank"};function S(n,T,P,q,I,z){const c=e("f-avatar"),r=e("f-text"),p=e("f-card"),D=e("f-watermark"),F=e("vp-demo");return C(),i("div",null,[h,l(F,{source:""},{source:t(()=>[l(D,{content:"机密文件",height:100,width:130},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[a("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[u]),_:1}),m,_,l(F,{source:""},{source:t(()=>[l(D,{content:"机密文件",height:100,width:130,"font-color":"red","font-size":"16px"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[a("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[g]),_:1}),b,k,E,l(F,{source:""},{source:t(()=>[l(D,{image:"https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[a("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[x]),_:1}),w,s("a",B,[l(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const W=d(v,[["render",S],["__scopeId","data-v-0f15497e"]]);export{V as __pageData,W as default};