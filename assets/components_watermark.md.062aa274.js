import{_ as y,A as c,c as i,C as l,y as t,v as a,M as F,o as C,a as s,K as f,L as A}from"./chunks/framework.e8c848eb.js";const V=JSON.parse('{"title":"Watermark 水印","description":"","frontmatter":{},"headers":[],"relativePath":"components/watermark.md","filePath":"components/watermark.md","lastUpdated":1692838969000}'),v={name:"components/watermark.md"},o=e=>(f("data-v-8c9c0fda"),e=e(),A(),e),h=F('<h1 id="watermark-水印" tabindex="-1" data-v-8c9c0fda>Watermark 水印 <a class="header-anchor" href="#watermark-水印" aria-label="Permalink to &quot;Watermark 水印&quot;" data-v-8c9c0fda>​</a></h1><p data-v-8c9c0fda>据说水印容易让人讨厌？</p><ul data-v-8c9c0fda><li data-v-8c9c0fda><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/watermark" target="_blank" rel="noreferrer" data-v-8c9c0fda>源代码</a></li><li data-v-8c9c0fda><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/watermark.md" target="_blank" rel="noreferrer" data-v-8c9c0fda>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-8c9c0fda>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-8c9c0fda>​</a></h2><p data-v-8c9c0fda><code data-v-8c9c0fda>content</code> 可以配置想要显示的文字内容，<code data-v-8c9c0fda>height</code> 和 <code data-v-8c9c0fda>width</code> 可以配置背景图片的尺寸</p>',5),u=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"content"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"机密文件"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":height"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"100"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":width"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"130"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),m=o(()=>a("h2",{id:"自定义文字样式",tabindex:"-1"},[s("自定义文字样式 "),a("a",{class:"header-anchor",href:"#自定义文字样式","aria-label":'Permalink to "自定义文字样式"'},"​")],-1)),_=o(()=>a("p",null,[a("code",null,"font-color"),s(" 和 "),a("code",null,"font-size"),s(" 可以自定义你需要的文字大小和颜色")],-1)),g=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"content"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"机密文件"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":height"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"100"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},":width"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"130"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"font-color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"red"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"    "),a("span",{style:{color:"#C792EA"}},"font-size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"16px"),a("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"  >")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),b=o(()=>a("h2",{id:"自定义背景",tabindex:"-1"},[s("自定义背景 "),a("a",{class:"header-anchor",href:"#自定义背景","aria-label":'Permalink to "自定义背景"'},"​")],-1)),k=o(()=>a("p",null,[s("如果你不喜欢文字的背景，也可以使用你喜欢的自定义图片当作背景，只需要通过 "),a("code",null,"image"),s(" 传入一个地址即可")],-1)),E=o(()=>a("p",null,[a("code",null,"image"),s(" 的优先级高于 "),a("code",null,"content"),s(" 的水印内容")],-1)),x=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"image"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://avatars.githubusercontent.com/u/73180970?v=4"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),w=F('<h2 id="attributes" tabindex="-1" data-v-8c9c0fda>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-8c9c0fda>​</a></h2><div class="vp-table__container" data-v-8c9c0fda><table data-v-8c9c0fda><thead data-v-8c9c0fda><tr data-v-8c9c0fda><th data-v-8c9c0fda>参数</th><th data-v-8c9c0fda>说明</th><th data-v-8c9c0fda>类型</th><th data-v-8c9c0fda>可选值</th><th data-v-8c9c0fda>默认值</th></tr></thead><tbody data-v-8c9c0fda><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>content</code></td><td data-v-8c9c0fda>水印内容</td><td data-v-8c9c0fda>string</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>——</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>width</code></td><td data-v-8c9c0fda>水印的宽度</td><td data-v-8c9c0fda>number</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>280</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>height</code></td><td data-v-8c9c0fda>水印的高度</td><td data-v-8c9c0fda>number</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>200</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>fontSize</code></td><td data-v-8c9c0fda>文字大小</td><td data-v-8c9c0fda>string / number</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>30px</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>fontColor</code></td><td data-v-8c9c0fda>文字颜色</td><td data-v-8c9c0fda>string</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>#333</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>image</code></td><td data-v-8c9c0fda>自定义图片水印</td><td data-v-8c9c0fda>string</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>——</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>block</code></td><td data-v-8c9c0fda>是否为块级元素</td><td data-v-8c9c0fda>boolean</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>false</td></tr><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>zIndex</code></td><td data-v-8c9c0fda>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer" data-v-8c9c0fda>z-index</a> 属性</td><td data-v-8c9c0fda>number</td><td data-v-8c9c0fda>——</td><td data-v-8c9c0fda>100</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-8c9c0fda>Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;" data-v-8c9c0fda>​</a></h2><div class="vp-table__container" data-v-8c9c0fda><table data-v-8c9c0fda><thead data-v-8c9c0fda><tr data-v-8c9c0fda><th data-v-8c9c0fda>名称</th><th data-v-8c9c0fda>说明</th></tr></thead><tbody data-v-8c9c0fda><tr data-v-8c9c0fda><td data-v-8c9c0fda><code data-v-8c9c0fda>default</code></td><td data-v-8c9c0fda>水印覆盖的内容</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-8c9c0fda>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-8c9c0fda>​</a></h2><p data-v-8c9c0fda>组件导出以下类型定义：</p><div class="language-ts" data-v-8c9c0fda><button title="Copy Code" class="copy" data-v-8c9c0fda></button><span class="lang" data-v-8c9c0fda>ts</span><pre class="shiki material-theme-palenight" data-v-8c9c0fda><code data-v-8c9c0fda><span class="line" data-v-8c9c0fda><span style="color:#89DDFF;font-style:italic;" data-v-8c9c0fda>import</span><span style="color:#A6ACCD;" data-v-8c9c0fda> </span><span style="color:#89DDFF;font-style:italic;" data-v-8c9c0fda>type</span><span style="color:#A6ACCD;" data-v-8c9c0fda> </span><span style="color:#89DDFF;" data-v-8c9c0fda>{</span><span style="color:#F07178;" data-v-8c9c0fda> </span><span style="color:#A6ACCD;" data-v-8c9c0fda>WatermarkInstance</span><span style="color:#89DDFF;" data-v-8c9c0fda>,</span><span style="color:#F07178;" data-v-8c9c0fda> </span><span style="color:#A6ACCD;" data-v-8c9c0fda>WatermarkProps</span><span style="color:#F07178;" data-v-8c9c0fda> </span><span style="color:#89DDFF;" data-v-8c9c0fda>}</span><span style="color:#A6ACCD;" data-v-8c9c0fda> </span><span style="color:#89DDFF;font-style:italic;" data-v-8c9c0fda>from</span><span style="color:#A6ACCD;" data-v-8c9c0fda> </span><span style="color:#89DDFF;" data-v-8c9c0fda>&#39;</span><span style="color:#C3E88D;" data-v-8c9c0fda>fighting-design</span><span style="color:#89DDFF;" data-v-8c9c0fda>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-8c9c0fda>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-8c9c0fda>​</a></h2>',8),B={href:"https://github.com/Tyh2001",target:"_blank"};function S(e,T,P,q,I,z){const n=c("f-avatar"),r=c("f-text"),p=c("f-card"),d=c("f-watermark"),D=c("vp-demo");return C(),i("div",null,[h,l(D,{source:""},{source:t(()=>[l(d,{content:"机密文件",height:100,width:130},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[u]),_:1}),m,_,l(D,{source:""},{source:t(()=>[l(d,{content:"机密文件",height:100,width:130,"font-color":"red","font-size":"16px"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[g]),_:1}),b,k,E,l(D,{source:""},{source:t(()=>[l(d,{image:"https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[x]),_:1}),w,a("a",B,[l(n,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const W=y(v,[["render",S],["__scopeId","data-v-8c9c0fda"]]);export{V as __pageData,W as default};
