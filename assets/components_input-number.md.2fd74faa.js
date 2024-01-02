import{d as v,f as y,c as i,C as o,y as b,v as d,M as f,A as D,o as u,K as m,L as E,a,_ as h}from"./chunks/framework.61092a0b.js";const r=n=>(m("data-v-bdfc7ddb"),n=n(),E(),n),B=f('<h1 id="input-number-数字输入框" tabindex="-1" data-v-bdfc7ddb>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-bdfc7ddb>​</a></h1><p data-v-bdfc7ddb>这个文本框只能输入数字哦</p><ul data-v-bdfc7ddb><li data-v-bdfc7ddb><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-bdfc7ddb>源代码</a></li><li data-v-bdfc7ddb><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-bdfc7ddb>文档编辑</a></li></ul><div class="danger custom-block" data-v-bdfc7ddb><p class="custom-block-title" data-v-bdfc7ddb>DANGER</p><p data-v-bdfc7ddb>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-bdfc7ddb>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-bdfc7ddb>​</a></h2><p data-v-bdfc7ddb>使用 <code data-v-bdfc7ddb>v-model</code> 绑定一个值，<code data-v-bdfc7ddb>model</code> 可配置不同的模式</p>',6),C=r(()=>d("div",{class:"language-html"},[d("button",{title:"Copy Code",class:"copy"}),d("span",{class:"lang"},"html"),d("pre",{class:"shiki material-theme-palenight"},[d("code",null,[d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"template"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value1"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value1"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"switch"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value1"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"button"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"</"),d("span",{style:{color:"#F07178"}},"template"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"}),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"script"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"lang"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"ts"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"setup"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF"}},"{"),d("span",{style:{color:"#F07178"}}," "),d("span",{style:{color:"#BABED8"}},"ref"),d("span",{style:{color:"#F07178"}}," "),d("span",{style:{color:"#89DDFF"}},"}"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF"}},"'"),d("span",{style:{color:"#C3E88D"}},"vue"),d("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),d("span",{class:"line"}),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#C792EA"}},"const"),d("span",{style:{color:"#BABED8"}}," value1 "),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#82AAFF"}},"ref"),d("span",{style:{color:"#BABED8"}},"("),d("span",{style:{color:"#F78C6C"}},"3"),d("span",{style:{color:"#BABED8"}},")")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"</"),d("span",{style:{color:"#F07178"}},"script"),d("span",{style:{color:"#89DDFF"}},">")])])])],-1)),A=r(()=>d("h2",{id:"不同尺寸",tabindex:"-1"},[a("不同尺寸 "),d("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),g=r(()=>d("p",null,[d("code",null,"size"),a(" 属性可配置不同尺寸")],-1)),_=r(()=>d("div",{class:"language-html"},[d("button",{title:"Copy Code",class:"copy"}),d("span",{class:"lang"},"html"),d("pre",{class:"shiki material-theme-palenight"},[d("code",null,[d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"template"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"switch"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"large"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"switch"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"middle"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"switch"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"small"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"switch"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"mini"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"}),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"button"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"large"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"button"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"middle"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"button"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"small"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"f-input-number"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"v-model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"value2"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"model"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"button"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"size"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"mini"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"</"),d("span",{style:{color:"#F07178"}},"template"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"}),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"<"),d("span",{style:{color:"#F07178"}},"script"),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"lang"),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#C3E88D"}},"ts"),d("span",{style:{color:"#89DDFF"}},'"'),d("span",{style:{color:"#89DDFF"}}," "),d("span",{style:{color:"#C792EA"}},"setup"),d("span",{style:{color:"#89DDFF"}},">")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF"}},"{"),d("span",{style:{color:"#F07178"}}," "),d("span",{style:{color:"#BABED8"}},"ref"),d("span",{style:{color:"#F07178"}}," "),d("span",{style:{color:"#89DDFF"}},"}"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#89DDFF"}},"'"),d("span",{style:{color:"#C3E88D"}},"vue"),d("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),d("span",{class:"line"}),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#BABED8"}},"  "),d("span",{style:{color:"#C792EA"}},"const"),d("span",{style:{color:"#BABED8"}}," value2 "),d("span",{style:{color:"#89DDFF"}},"="),d("span",{style:{color:"#BABED8"}}," "),d("span",{style:{color:"#82AAFF"}},"ref"),d("span",{style:{color:"#BABED8"}},"("),d("span",{style:{color:"#F78C6C"}},"16"),d("span",{style:{color:"#BABED8"}},")")]),a(`
`),d("span",{class:"line"},[d("span",{style:{color:"#89DDFF"}},"</"),d("span",{style:{color:"#F07178"}},"script"),d("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=f(`<h2 id="attributes" tabindex="-1" data-v-bdfc7ddb>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-bdfc7ddb>​</a></h2><div class="vp-table__container" data-v-bdfc7ddb><table data-v-bdfc7ddb><thead data-v-bdfc7ddb><tr data-v-bdfc7ddb><th data-v-bdfc7ddb>参数</th><th data-v-bdfc7ddb>说明</th><th data-v-bdfc7ddb>类型</th><th data-v-bdfc7ddb>可选值</th><th data-v-bdfc7ddb>默认值</th></tr></thead><tbody data-v-bdfc7ddb><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>v-model</code></td><td data-v-bdfc7ddb>绑定值</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>1</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>model</code></td><td data-v-bdfc7ddb>不同模式</td><td data-v-bdfc7ddb><a href="#inputnumbermodel" data-v-bdfc7ddb>InputNumberModel</a></td><td data-v-bdfc7ddb><code data-v-bdfc7ddb>default</code> <code data-v-bdfc7ddb>button</code> <code data-v-bdfc7ddb>switch</code></td><td data-v-bdfc7ddb>default</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>precision</code></td><td data-v-bdfc7ddb>数值精度</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>0</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>step</code></td><td data-v-bdfc7ddb>步长</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>1</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>size</code></td><td data-v-bdfc7ddb>尺寸</td><td data-v-bdfc7ddb><a href="/components/interface.html#fightingsize" data-v-bdfc7ddb>FightingSize</a></td><td data-v-bdfc7ddb><code data-v-bdfc7ddb>large</code> <code data-v-bdfc7ddb>middle</code> <code data-v-bdfc7ddb>small</code> <code data-v-bdfc7ddb>mini</code></td><td data-v-bdfc7ddb>middle</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>button-type</code></td><td data-v-bdfc7ddb>按钮的类型</td><td data-v-bdfc7ddb><a href="/components/interface.html#fightingtype" data-v-bdfc7ddb>FightingType</a></td><td data-v-bdfc7ddb><code data-v-bdfc7ddb>default</code> <code data-v-bdfc7ddb>primary</code> <code data-v-bdfc7ddb>success</code> <code data-v-bdfc7ddb>danger</code> <code data-v-bdfc7ddb>warning</code></td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>disabled</code></td><td data-v-bdfc7ddb>是否禁用</td><td data-v-bdfc7ddb>boolean</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>false</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>max</code></td><td data-v-bdfc7ddb>最大值</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>min</code></td><td data-v-bdfc7ddb>最小值</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>max-length</code></td><td data-v-bdfc7ddb>最大输入长度</td><td data-v-bdfc7ddb>number</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>autofocus</code></td><td data-v-bdfc7ddb>是否自动聚焦</td><td data-v-bdfc7ddb>boolean</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>false</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>name</code></td><td data-v-bdfc7ddb>原生 name 属性</td><td data-v-bdfc7ddb>string</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>f-input-number</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>placeholder</code></td><td data-v-bdfc7ddb>占位符</td><td data-v-bdfc7ddb>string</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>clear</code></td><td data-v-bdfc7ddb>是否可清空</td><td data-v-bdfc7ddb>boolean</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>false</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>readonly</code></td><td data-v-bdfc7ddb>是否只读</td><td data-v-bdfc7ddb>boolean</td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>false</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>on-blur</code></td><td data-v-bdfc7ddb>失去焦点触发的回调</td><td data-v-bdfc7ddb><a href="/components/interface.html#handleevent" data-v-bdfc7ddb>HandleEvent</a></td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>on-focus</code></td><td data-v-bdfc7ddb>获取焦点触发的回调</td><td data-v-bdfc7ddb><a href="/components/interface.html#handleevent" data-v-bdfc7ddb>HandleEvent</a></td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>on-input</code></td><td data-v-bdfc7ddb>原生 input 事件回调</td><td data-v-bdfc7ddb><a href="/components/interface.html#handleevent" data-v-bdfc7ddb>HandleEvent</a></td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr><tr data-v-bdfc7ddb><td data-v-bdfc7ddb><code data-v-bdfc7ddb>on-change</code></td><td data-v-bdfc7ddb>绑定值发生变化时触发的回调</td><td data-v-bdfc7ddb><a href="/components/interface.html#inputchange" data-v-bdfc7ddb>InputChange</a></td><td data-v-bdfc7ddb>——</td><td data-v-bdfc7ddb>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-bdfc7ddb>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-bdfc7ddb>​</a></h2><p data-v-bdfc7ddb>组件导出以下类型定义：</p><div class="language-ts" data-v-bdfc7ddb><button title="Copy Code" class="copy" data-v-bdfc7ddb></button><span class="lang" data-v-bdfc7ddb>ts</span><pre class="shiki material-theme-palenight" data-v-bdfc7ddb><code data-v-bdfc7ddb><span class="line" data-v-bdfc7ddb><span style="color:#89DDFF;font-style:italic;" data-v-bdfc7ddb>import</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;font-style:italic;" data-v-bdfc7ddb>type</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>{</span></span>
<span class="line" data-v-bdfc7ddb><span style="color:#F07178;" data-v-bdfc7ddb>  </span><span style="color:#BABED8;" data-v-bdfc7ddb>InputNumberInstance</span><span style="color:#89DDFF;" data-v-bdfc7ddb>,</span></span>
<span class="line" data-v-bdfc7ddb><span style="color:#F07178;" data-v-bdfc7ddb>  </span><span style="color:#BABED8;" data-v-bdfc7ddb>InputNumberProps</span><span style="color:#89DDFF;" data-v-bdfc7ddb>,</span></span>
<span class="line" data-v-bdfc7ddb><span style="color:#F07178;" data-v-bdfc7ddb>  </span><span style="color:#BABED8;" data-v-bdfc7ddb>InputNumberModel</span></span>
<span class="line" data-v-bdfc7ddb><span style="color:#89DDFF;" data-v-bdfc7ddb>}</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;font-style:italic;" data-v-bdfc7ddb>from</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#C3E88D;" data-v-bdfc7ddb>fighting-design</span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-bdfc7ddb>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-bdfc7ddb>​</a></h3><div class="language-ts" data-v-bdfc7ddb><button title="Copy Code" class="copy" data-v-bdfc7ddb></button><span class="lang" data-v-bdfc7ddb>ts</span><pre class="shiki material-theme-palenight" data-v-bdfc7ddb><code data-v-bdfc7ddb><span class="line" data-v-bdfc7ddb><span style="color:#C792EA;" data-v-bdfc7ddb>type</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#FFCB6B;" data-v-bdfc7ddb>InputNumberModel</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>=</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#C3E88D;" data-v-bdfc7ddb>default</span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>|</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#C3E88D;" data-v-bdfc7ddb>button</span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>|</span><span style="color:#BABED8;" data-v-bdfc7ddb> </span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span><span style="color:#C3E88D;" data-v-bdfc7ddb>switch</span><span style="color:#89DDFF;" data-v-bdfc7ddb>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-bdfc7ddb>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-bdfc7ddb>​</a></h2>`,8),k={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1704188061000}'),N={name:"components/input-number.md"},x=v({...N,setup(n){const c=y(3),s=y(16);return(w,t)=>{const e=D("f-input-number"),F=D("vp-demo"),p=D("f-avatar");return u(),i("div",null,[B,o(F,{source:""},{source:b(()=>[o(e,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l)},null,8,["modelValue"]),o(e,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=l=>c.value=l),model:"switch"},null,8,["modelValue"]),o(e,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),model:"button"},null,8,["modelValue"])]),default:b(()=>[C]),_:1}),A,g,o(F,{source:""},{source:b(()=>[o(e,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value=l),model:"switch",size:"large"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value=l),model:"switch",size:"middle"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=l=>s.value=l),model:"switch",size:"small"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[6]||(t[6]=l=>s.value=l),model:"switch",size:"mini"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value=l),model:"button",size:"large"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[8]||(t[8]=l=>s.value=l),model:"button",size:"middle"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[9]||(t[9]=l=>s.value=l),model:"button",size:"small"},null,8,["modelValue"]),o(e,{modelValue:s.value,"onUpdate:modelValue":t[10]||(t[10]=l=>s.value=l),model:"button",size:"mini"},null,8,["modelValue"])]),default:b(()=>[_]),_:1}),V,d("a",k,[o(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),d("a",z,[o(p,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),d("a",I,[o(p,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=h(x,[["__scopeId","data-v-bdfc7ddb"]]);export{U as __pageData,P as default};
