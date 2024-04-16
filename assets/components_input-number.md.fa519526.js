import{d as i,f,c as u,C as o,y as p,v as e,M as v,A as F,o as m,K as E,L as h,a,_ as b}from"./chunks/framework.403449c4.js";const c=r=>(E("data-v-9e8ef285"),r=r(),h(),r),B=v('<h1 id="input-number-数字输入框" tabindex="-1" data-v-9e8ef285>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-9e8ef285>​</a></h1><p data-v-9e8ef285>这个文本框只能输入数字哦</p><ul data-v-9e8ef285><li data-v-9e8ef285><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-9e8ef285>源代码</a></li><li data-v-9e8ef285><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-9e8ef285>文档编辑</a></li></ul><div class="danger custom-block" data-v-9e8ef285><p class="custom-block-title" data-v-9e8ef285>DANGER</p><p data-v-9e8ef285>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-9e8ef285>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-9e8ef285>​</a></h2><p data-v-9e8ef285>使用 <code data-v-9e8ef285>v-model</code> 绑定一个值，<code data-v-9e8ef285>model</code> 可配置不同的模式</p>',6),C=c(()=>e("div",{class:"language-html"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value1"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value1"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"switch"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value1"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"button"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"lang"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"ts"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"setup"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#BABED8"}},"ref"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"vue"),e("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#BABED8"}}," value1 "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#82AAFF"}},"ref"),e("span",{style:{color:"#BABED8"}},"("),e("span",{style:{color:"#F78C6C"}},"3"),e("span",{style:{color:"#BABED8"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1)),A=c(()=>e("h2",{id:"不同尺寸",tabindex:"-1"},[a("不同尺寸 "),e("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),g=c(()=>e("p",null,[e("code",null,"size"),a(" 属性可配置不同尺寸")],-1)),_=c(()=>e("div",{class:"language-html"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"switch"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"large"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"switch"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"middle"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"switch"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"small"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"switch"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"mini"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"button"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"large"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"button"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"middle"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"button"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"small"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"f-input-number"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"value2"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"button"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"size"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"mini"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"lang"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"ts"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"setup"),e("span",{style:{color:"#89DDFF"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#BABED8"}},"ref"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"vue"),e("span",{style:{color:"#89DDFF"}},"'")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BABED8"}},"  "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#BABED8"}}," value2 "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#BABED8"}}," "),e("span",{style:{color:"#82AAFF"}},"ref"),e("span",{style:{color:"#BABED8"}},"("),e("span",{style:{color:"#F78C6C"}},"16"),e("span",{style:{color:"#BABED8"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=v(`<h2 id="attributes" tabindex="-1" data-v-9e8ef285>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-9e8ef285>​</a></h2><div class="vp-table__container" data-v-9e8ef285><table data-v-9e8ef285><thead data-v-9e8ef285><tr data-v-9e8ef285><th data-v-9e8ef285>参数</th><th data-v-9e8ef285>说明</th><th data-v-9e8ef285>类型</th><th data-v-9e8ef285>可选值</th><th data-v-9e8ef285>默认值</th></tr></thead><tbody data-v-9e8ef285><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>v-model</code></td><td data-v-9e8ef285>绑定值</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>1</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>model</code></td><td data-v-9e8ef285>不同模式</td><td data-v-9e8ef285><a href="#inputnumbermodel" data-v-9e8ef285>InputNumberModel</a></td><td data-v-9e8ef285><code data-v-9e8ef285>default</code> <code data-v-9e8ef285>button</code> <code data-v-9e8ef285>switch</code></td><td data-v-9e8ef285>default</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>precision</code></td><td data-v-9e8ef285>数值精度</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>0</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>step</code></td><td data-v-9e8ef285>步长</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>1</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>size</code></td><td data-v-9e8ef285>尺寸</td><td data-v-9e8ef285><a href="/components/interface.html#fightingsize" data-v-9e8ef285>FightingSize</a></td><td data-v-9e8ef285><code data-v-9e8ef285>large</code> <code data-v-9e8ef285>middle</code> <code data-v-9e8ef285>small</code> <code data-v-9e8ef285>mini</code></td><td data-v-9e8ef285>middle</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>button-type</code></td><td data-v-9e8ef285>按钮的类型</td><td data-v-9e8ef285><a href="/components/interface.html#fightingtype" data-v-9e8ef285>FightingType</a></td><td data-v-9e8ef285><code data-v-9e8ef285>default</code> <code data-v-9e8ef285>primary</code> <code data-v-9e8ef285>success</code> <code data-v-9e8ef285>danger</code> <code data-v-9e8ef285>warning</code></td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>disabled</code></td><td data-v-9e8ef285>是否禁用</td><td data-v-9e8ef285>boolean</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>false</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>max</code></td><td data-v-9e8ef285>最大值</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>min</code></td><td data-v-9e8ef285>最小值</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>max-length</code></td><td data-v-9e8ef285>最大输入长度</td><td data-v-9e8ef285>number</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>autofocus</code></td><td data-v-9e8ef285>是否自动聚焦</td><td data-v-9e8ef285>boolean</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>false</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>name</code></td><td data-v-9e8ef285>原生 name 属性</td><td data-v-9e8ef285>string</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>f-input-number</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>placeholder</code></td><td data-v-9e8ef285>占位符</td><td data-v-9e8ef285>string</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>clear</code></td><td data-v-9e8ef285>是否可清空</td><td data-v-9e8ef285>boolean</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>false</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>readonly</code></td><td data-v-9e8ef285>是否只读</td><td data-v-9e8ef285>boolean</td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>false</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>on-blur</code></td><td data-v-9e8ef285>失去焦点触发的回调</td><td data-v-9e8ef285><a href="/components/interface.html#handleevent" data-v-9e8ef285>HandleEvent</a></td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>on-focus</code></td><td data-v-9e8ef285>获取焦点触发的回调</td><td data-v-9e8ef285><a href="/components/interface.html#handleevent" data-v-9e8ef285>HandleEvent</a></td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>on-input</code></td><td data-v-9e8ef285>原生 input 事件回调</td><td data-v-9e8ef285><a href="/components/interface.html#handleevent" data-v-9e8ef285>HandleEvent</a></td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr><tr data-v-9e8ef285><td data-v-9e8ef285><code data-v-9e8ef285>on-change</code></td><td data-v-9e8ef285>绑定值发生变化时触发的回调</td><td data-v-9e8ef285><a href="/components/interface.html#inputchange" data-v-9e8ef285>InputChange</a></td><td data-v-9e8ef285>——</td><td data-v-9e8ef285>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-9e8ef285>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-9e8ef285>​</a></h2><p data-v-9e8ef285>组件导出以下类型定义：</p><div class="language-ts" data-v-9e8ef285><button title="Copy Code" class="copy" data-v-9e8ef285></button><span class="lang" data-v-9e8ef285>ts</span><pre class="shiki material-theme-palenight" data-v-9e8ef285><code data-v-9e8ef285><span class="line" data-v-9e8ef285><span style="color:#89DDFF;font-style:italic;" data-v-9e8ef285>import</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;font-style:italic;" data-v-9e8ef285>type</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>{</span></span>
<span class="line" data-v-9e8ef285><span style="color:#F07178;" data-v-9e8ef285>  </span><span style="color:#BABED8;" data-v-9e8ef285>InputNumberInstance</span><span style="color:#89DDFF;" data-v-9e8ef285>,</span></span>
<span class="line" data-v-9e8ef285><span style="color:#F07178;" data-v-9e8ef285>  </span><span style="color:#BABED8;" data-v-9e8ef285>InputNumberProps</span><span style="color:#89DDFF;" data-v-9e8ef285>,</span></span>
<span class="line" data-v-9e8ef285><span style="color:#F07178;" data-v-9e8ef285>  </span><span style="color:#BABED8;" data-v-9e8ef285>InputNumberModel</span></span>
<span class="line" data-v-9e8ef285><span style="color:#89DDFF;" data-v-9e8ef285>}</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;font-style:italic;" data-v-9e8ef285>from</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#C3E88D;" data-v-9e8ef285>fighting-design</span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-9e8ef285>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-9e8ef285>​</a></h3><div class="language-ts" data-v-9e8ef285><button title="Copy Code" class="copy" data-v-9e8ef285></button><span class="lang" data-v-9e8ef285>ts</span><pre class="shiki material-theme-palenight" data-v-9e8ef285><code data-v-9e8ef285><span class="line" data-v-9e8ef285><span style="color:#C792EA;" data-v-9e8ef285>type</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#FFCB6B;" data-v-9e8ef285>InputNumberModel</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>=</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#C3E88D;" data-v-9e8ef285>default</span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>|</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#C3E88D;" data-v-9e8ef285>button</span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>|</span><span style="color:#BABED8;" data-v-9e8ef285> </span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span><span style="color:#C3E88D;" data-v-9e8ef285>switch</span><span style="color:#89DDFF;" data-v-9e8ef285>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-9e8ef285>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-9e8ef285>​</a></h2>`,8),k={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1713228887000}'),N={name:"components/input-number.md"},x=i({...N,setup(r){const d=f(3),s=f(16);return(w,t)=>{const n=F("f-input-number"),y=F("vp-demo"),D=F("f-avatar");return m(),u("div",null,[B,o(y,{source:""},{source:p(()=>[o(n,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l)},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=l=>d.value=l),model:"switch"},null,8,["modelValue"]),o(n,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=l=>d.value=l),model:"button"},null,8,["modelValue"])]),default:p(()=>[C]),_:1}),A,g,o(y,{source:""},{source:p(()=>[o(n,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value=l),model:"switch",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value=l),model:"switch",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=l=>s.value=l),model:"switch",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[6]||(t[6]=l=>s.value=l),model:"switch",size:"mini"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value=l),model:"button",size:"large"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[8]||(t[8]=l=>s.value=l),model:"button",size:"middle"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[9]||(t[9]=l=>s.value=l),model:"button",size:"small"},null,8,["modelValue"]),o(n,{modelValue:s.value,"onUpdate:modelValue":t[10]||(t[10]=l=>s.value=l),model:"button",size:"mini"},null,8,["modelValue"])]),default:p(()=>[_]),_:1}),V,e("a",k,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),e("a",z,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),e("a",I,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=b(x,[["__scopeId","data-v-9e8ef285"]]);export{U as __pageData,P as default};
