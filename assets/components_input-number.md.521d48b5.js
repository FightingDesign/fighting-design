import{d as u,f as v,A as F,c as m,C as e,y as p,v as a,M as i,o as E,K as h,L as b,a as t,_ as B}from"./chunks/framework.6f7ff4f1.js";const c=r=>(h("data-v-019874d6"),r=r(),b(),r),C=i('<h1 id="input-number-数字输入框" tabindex="-1" data-v-019874d6>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-019874d6>​</a></h1><p data-v-019874d6>这个文本框只能输入数字哦</p><ul data-v-019874d6><li data-v-019874d6><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-019874d6>源代码</a></li><li data-v-019874d6><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-019874d6>文档编辑</a></li></ul><div class="danger custom-block" data-v-019874d6><p class="custom-block-title" data-v-019874d6>DANGER</p><p data-v-019874d6>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-019874d6>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-019874d6>​</a></h2><p data-v-019874d6>使用 <code data-v-019874d6>v-model</code> 绑定一个值，<code data-v-019874d6>model</code> 可配置不同的模式</p>',6),f=c(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#F78C6C"}},"3"),a("span",{style:{color:"#BABED8"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),A=c(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[t("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),g=c(()=>a("p",null,[a("code",null,"size"),t(" 属性可配置不同尺寸")],-1)),_=c(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
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
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=i(`<h2 id="attributes" tabindex="-1" data-v-019874d6>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-019874d6>​</a></h2><div class="vp-table__container" data-v-019874d6><table data-v-019874d6><thead data-v-019874d6><tr data-v-019874d6><th data-v-019874d6>参数</th><th data-v-019874d6>说明</th><th data-v-019874d6>类型</th><th data-v-019874d6>可选值</th><th data-v-019874d6>默认值</th></tr></thead><tbody data-v-019874d6><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>v-model</code></td><td data-v-019874d6>绑定值</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>1</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>model</code></td><td data-v-019874d6>不同模式</td><td data-v-019874d6><a href="#inputnumbermodel" data-v-019874d6>InputNumberModel</a></td><td data-v-019874d6><code data-v-019874d6>default</code> <code data-v-019874d6>button</code> <code data-v-019874d6>switch</code></td><td data-v-019874d6>default</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>precision</code></td><td data-v-019874d6>数值精度</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>0</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>step</code></td><td data-v-019874d6>步长</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>1</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>size</code></td><td data-v-019874d6>尺寸</td><td data-v-019874d6><a href="/components/interface.html#fightingsize" data-v-019874d6>FightingSize</a></td><td data-v-019874d6><code data-v-019874d6>large</code> <code data-v-019874d6>middle</code> <code data-v-019874d6>small</code> <code data-v-019874d6>mini</code></td><td data-v-019874d6>middle</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>button-type</code></td><td data-v-019874d6>按钮的类型</td><td data-v-019874d6><a href="/components/interface.html#fightingtype" data-v-019874d6>FightingType</a></td><td data-v-019874d6><code data-v-019874d6>default</code> <code data-v-019874d6>primary</code> <code data-v-019874d6>success</code> <code data-v-019874d6>danger</code> <code data-v-019874d6>warning</code></td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>disabled</code></td><td data-v-019874d6>是否禁用</td><td data-v-019874d6>boolean</td><td data-v-019874d6>——</td><td data-v-019874d6>false</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>max</code></td><td data-v-019874d6>最大值</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>min</code></td><td data-v-019874d6>最小值</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>max-length</code></td><td data-v-019874d6>最大输入长度</td><td data-v-019874d6>number</td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>autofocus</code></td><td data-v-019874d6>是否自动聚焦</td><td data-v-019874d6>boolean</td><td data-v-019874d6>——</td><td data-v-019874d6>false</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>name</code></td><td data-v-019874d6>原生 name 属性</td><td data-v-019874d6>string</td><td data-v-019874d6>——</td><td data-v-019874d6>f-input-number</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>placeholder</code></td><td data-v-019874d6>占位符</td><td data-v-019874d6>string</td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>clear</code></td><td data-v-019874d6>是否可清空</td><td data-v-019874d6>boolean</td><td data-v-019874d6>——</td><td data-v-019874d6>false</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>readonly</code></td><td data-v-019874d6>是否只读</td><td data-v-019874d6>boolean</td><td data-v-019874d6>——</td><td data-v-019874d6>false</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>on-blur</code></td><td data-v-019874d6>失去焦点触发的回调</td><td data-v-019874d6><a href="/components/interface.html#handleevent" data-v-019874d6>HandleEvent</a></td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>on-focus</code></td><td data-v-019874d6>获取焦点触发的回调</td><td data-v-019874d6><a href="/components/interface.html#handleevent" data-v-019874d6>HandleEvent</a></td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>on-input</code></td><td data-v-019874d6>原生 input 事件回调</td><td data-v-019874d6><a href="/components/interface.html#handleevent" data-v-019874d6>HandleEvent</a></td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr><tr data-v-019874d6><td data-v-019874d6><code data-v-019874d6>on-change</code></td><td data-v-019874d6>绑定值发生变化时触发的回调</td><td data-v-019874d6><a href="/components/interface.html#inputchange" data-v-019874d6>InputChange</a></td><td data-v-019874d6>——</td><td data-v-019874d6>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-019874d6>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-019874d6>​</a></h2><p data-v-019874d6>组件导出以下类型定义：</p><div class="language-ts" data-v-019874d6><button title="Copy Code" class="copy" data-v-019874d6></button><span class="lang" data-v-019874d6>ts</span><pre class="shiki material-theme-palenight" data-v-019874d6><code data-v-019874d6><span class="line" data-v-019874d6><span style="color:#89DDFF;font-style:italic;" data-v-019874d6>import</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;font-style:italic;" data-v-019874d6>type</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>{</span></span>
<span class="line" data-v-019874d6><span style="color:#F07178;" data-v-019874d6>  </span><span style="color:#BABED8;" data-v-019874d6>InputNumberInstance</span><span style="color:#89DDFF;" data-v-019874d6>,</span></span>
<span class="line" data-v-019874d6><span style="color:#F07178;" data-v-019874d6>  </span><span style="color:#BABED8;" data-v-019874d6>InputNumberProps</span><span style="color:#89DDFF;" data-v-019874d6>,</span></span>
<span class="line" data-v-019874d6><span style="color:#F07178;" data-v-019874d6>  </span><span style="color:#BABED8;" data-v-019874d6>InputNumberModel</span></span>
<span class="line" data-v-019874d6><span style="color:#89DDFF;" data-v-019874d6>}</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;font-style:italic;" data-v-019874d6>from</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#C3E88D;" data-v-019874d6>fighting-design</span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-019874d6>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-019874d6>​</a></h3><div class="language-ts" data-v-019874d6><button title="Copy Code" class="copy" data-v-019874d6></button><span class="lang" data-v-019874d6>ts</span><pre class="shiki material-theme-palenight" data-v-019874d6><code data-v-019874d6><span class="line" data-v-019874d6><span style="color:#C792EA;" data-v-019874d6>type</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#FFCB6B;" data-v-019874d6>InputNumberModel</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>=</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#C3E88D;" data-v-019874d6>default</span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>|</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#C3E88D;" data-v-019874d6>button</span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>|</span><span style="color:#BABED8;" data-v-019874d6> </span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span><span style="color:#C3E88D;" data-v-019874d6>switch</span><span style="color:#89DDFF;" data-v-019874d6>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-019874d6>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-019874d6>​</a></h2>`,8),k={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1702640222000}'),N={name:"components/input-number.md"},x=u({...N,setup(r){const n=v(3),o=v(16);return(w,l)=>{const d=F("f-input-number"),y=F("vp-demo"),D=F("f-avatar");return E(),m("div",null,[C,e(y,{source:""},{source:p(()=>[e(d,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s)},null,8,["modelValue"]),e(d,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=s=>n.value=s),model:"switch"},null,8,["modelValue"]),e(d,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=s=>n.value=s),model:"button"},null,8,["modelValue"])]),default:p(()=>[f]),_:1}),A,g,e(y,{source:""},{source:p(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=s=>o.value=s),model:"switch",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=s=>o.value=s),model:"switch",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=s=>o.value=s),model:"switch",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=s=>o.value=s),model:"switch",size:"mini"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[7]||(l[7]=s=>o.value=s),model:"button",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[8]||(l[8]=s=>o.value=s),model:"button",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[9]||(l[9]=s=>o.value=s),model:"button",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[10]||(l[10]=s=>o.value=s),model:"button",size:"mini"},null,8,["modelValue"])]),default:p(()=>[_]),_:1}),V,a("a",k,[e(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",z,[e(D,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[e(D,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=B(x,[["__scopeId","data-v-019874d6"]]);export{U as __pageData,P as default};