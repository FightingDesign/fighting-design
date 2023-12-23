import{d as v,f as y,A as D,c as i,C as o,y as r,v as a,M as f,o as u,K as m,L as E,a as t,_ as h}from"./chunks/framework.582e9a75.js";const p=b=>(m("data-v-b94aebaf"),b=b(),E(),b),B=f('<h1 id="input-number-数字输入框" tabindex="-1" data-v-b94aebaf>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-b94aebaf>​</a></h1><p data-v-b94aebaf>这个文本框只能输入数字哦</p><ul data-v-b94aebaf><li data-v-b94aebaf><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-b94aebaf>源代码</a></li><li data-v-b94aebaf><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-b94aebaf>文档编辑</a></li></ul><div class="danger custom-block" data-v-b94aebaf><p class="custom-block-title" data-v-b94aebaf>DANGER</p><p data-v-b94aebaf>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-b94aebaf>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-b94aebaf>​</a></h2><p data-v-b94aebaf>使用 <code data-v-b94aebaf>v-model</code> 绑定一个值，<code data-v-b94aebaf>model</code> 可配置不同的模式</p>',6),C=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#F78C6C"}},"3"),a("span",{style:{color:"#BABED8"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),A=p(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[t("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),g=p(()=>a("p",null,[a("code",null,"size"),t(" 属性可配置不同尺寸")],-1)),_=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value2 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#F78C6C"}},"16"),a("span",{style:{color:"#BABED8"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=f(`<h2 id="attributes" tabindex="-1" data-v-b94aebaf>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-b94aebaf>​</a></h2><div class="vp-table__container" data-v-b94aebaf><table data-v-b94aebaf><thead data-v-b94aebaf><tr data-v-b94aebaf><th data-v-b94aebaf>参数</th><th data-v-b94aebaf>说明</th><th data-v-b94aebaf>类型</th><th data-v-b94aebaf>可选值</th><th data-v-b94aebaf>默认值</th></tr></thead><tbody data-v-b94aebaf><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>v-model</code></td><td data-v-b94aebaf>绑定值</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>1</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>model</code></td><td data-v-b94aebaf>不同模式</td><td data-v-b94aebaf><a href="#inputnumbermodel" data-v-b94aebaf>InputNumberModel</a></td><td data-v-b94aebaf><code data-v-b94aebaf>default</code> <code data-v-b94aebaf>button</code> <code data-v-b94aebaf>switch</code></td><td data-v-b94aebaf>default</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>precision</code></td><td data-v-b94aebaf>数值精度</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>0</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>step</code></td><td data-v-b94aebaf>步长</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>1</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>size</code></td><td data-v-b94aebaf>尺寸</td><td data-v-b94aebaf><a href="/components/interface.html#fightingsize" data-v-b94aebaf>FightingSize</a></td><td data-v-b94aebaf><code data-v-b94aebaf>large</code> <code data-v-b94aebaf>middle</code> <code data-v-b94aebaf>small</code> <code data-v-b94aebaf>mini</code></td><td data-v-b94aebaf>middle</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>button-type</code></td><td data-v-b94aebaf>按钮的类型</td><td data-v-b94aebaf><a href="/components/interface.html#fightingtype" data-v-b94aebaf>FightingType</a></td><td data-v-b94aebaf><code data-v-b94aebaf>default</code> <code data-v-b94aebaf>primary</code> <code data-v-b94aebaf>success</code> <code data-v-b94aebaf>danger</code> <code data-v-b94aebaf>warning</code></td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>disabled</code></td><td data-v-b94aebaf>是否禁用</td><td data-v-b94aebaf>boolean</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>false</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>max</code></td><td data-v-b94aebaf>最大值</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>min</code></td><td data-v-b94aebaf>最小值</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>max-length</code></td><td data-v-b94aebaf>最大输入长度</td><td data-v-b94aebaf>number</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>autofocus</code></td><td data-v-b94aebaf>是否自动聚焦</td><td data-v-b94aebaf>boolean</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>false</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>name</code></td><td data-v-b94aebaf>原生 name 属性</td><td data-v-b94aebaf>string</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>f-input-number</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>placeholder</code></td><td data-v-b94aebaf>占位符</td><td data-v-b94aebaf>string</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>clear</code></td><td data-v-b94aebaf>是否可清空</td><td data-v-b94aebaf>boolean</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>false</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>readonly</code></td><td data-v-b94aebaf>是否只读</td><td data-v-b94aebaf>boolean</td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>false</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>on-blur</code></td><td data-v-b94aebaf>失去焦点触发的回调</td><td data-v-b94aebaf><a href="/components/interface.html#handleevent" data-v-b94aebaf>HandleEvent</a></td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>on-focus</code></td><td data-v-b94aebaf>获取焦点触发的回调</td><td data-v-b94aebaf><a href="/components/interface.html#handleevent" data-v-b94aebaf>HandleEvent</a></td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>on-input</code></td><td data-v-b94aebaf>原生 input 事件回调</td><td data-v-b94aebaf><a href="/components/interface.html#handleevent" data-v-b94aebaf>HandleEvent</a></td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr><tr data-v-b94aebaf><td data-v-b94aebaf><code data-v-b94aebaf>on-change</code></td><td data-v-b94aebaf>绑定值发生变化时触发的回调</td><td data-v-b94aebaf><a href="/components/interface.html#inputchange" data-v-b94aebaf>InputChange</a></td><td data-v-b94aebaf>——</td><td data-v-b94aebaf>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-b94aebaf>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-b94aebaf>​</a></h2><p data-v-b94aebaf>组件导出以下类型定义：</p><div class="language-ts" data-v-b94aebaf><button title="Copy Code" class="copy" data-v-b94aebaf></button><span class="lang" data-v-b94aebaf>ts</span><pre class="shiki material-theme-palenight" data-v-b94aebaf><code data-v-b94aebaf><span class="line" data-v-b94aebaf><span style="color:#89DDFF;font-style:italic;" data-v-b94aebaf>import</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;font-style:italic;" data-v-b94aebaf>type</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>{</span></span>
<span class="line" data-v-b94aebaf><span style="color:#F07178;" data-v-b94aebaf>  </span><span style="color:#BABED8;" data-v-b94aebaf>InputNumberInstance</span><span style="color:#89DDFF;" data-v-b94aebaf>,</span></span>
<span class="line" data-v-b94aebaf><span style="color:#F07178;" data-v-b94aebaf>  </span><span style="color:#BABED8;" data-v-b94aebaf>InputNumberProps</span><span style="color:#89DDFF;" data-v-b94aebaf>,</span></span>
<span class="line" data-v-b94aebaf><span style="color:#F07178;" data-v-b94aebaf>  </span><span style="color:#BABED8;" data-v-b94aebaf>InputNumberModel</span></span>
<span class="line" data-v-b94aebaf><span style="color:#89DDFF;" data-v-b94aebaf>}</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;font-style:italic;" data-v-b94aebaf>from</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#C3E88D;" data-v-b94aebaf>fighting-design</span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-b94aebaf>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-b94aebaf>​</a></h3><div class="language-ts" data-v-b94aebaf><button title="Copy Code" class="copy" data-v-b94aebaf></button><span class="lang" data-v-b94aebaf>ts</span><pre class="shiki material-theme-palenight" data-v-b94aebaf><code data-v-b94aebaf><span class="line" data-v-b94aebaf><span style="color:#C792EA;" data-v-b94aebaf>type</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#FFCB6B;" data-v-b94aebaf>InputNumberModel</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>=</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#C3E88D;" data-v-b94aebaf>default</span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>|</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#C3E88D;" data-v-b94aebaf>button</span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>|</span><span style="color:#BABED8;" data-v-b94aebaf> </span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span><span style="color:#C3E88D;" data-v-b94aebaf>switch</span><span style="color:#89DDFF;" data-v-b94aebaf>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-b94aebaf>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-b94aebaf>​</a></h2>`,8),k={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1703329050000}'),N={name:"components/input-number.md"},x=v({...N,setup(b){const d=y(3),s=y(16);return(w,e)=>{const n=D("f-input-number"),F=D("vp-demo"),c=D("f-avatar");return u(),i("div",null,[B,o(F,{source:""},{source:r(()=>[o(n,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l)},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l),model:"switch"},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),model:"button"},null,8,["modelValue"])]),default:r(()=>[C]),_:1}),A,g,o(F,{source:""},{source:r(()=>[o(n,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),model:"switch",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value=l),model:"switch",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),model:"switch",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l),model:"switch",size:"mini"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=l=>s.value=l),model:"button",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=l=>s.value=l),model:"button",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value=l),model:"button",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":e[10]||(e[10]=l=>s.value=l),model:"button",size:"mini"},null,8,["modelValue"])]),default:r(()=>[_]),_:1}),V,a("a",k,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",z,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[o(c,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=h(x,[["__scopeId","data-v-b94aebaf"]]);export{U as __pageData,P as default};