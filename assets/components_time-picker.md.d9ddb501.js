import{d as D,f as y,A as s,c as F,C as o,y as n,v as t,M as r,o as m,a as e}from"./chunks/framework.fe94f300.js";const h=r('<h1 id="time-picker-时间选择器" tabindex="-1">Time Picker 时间选择器 <a class="header-anchor" href="#time-picker-时间选择器" aria-label="Permalink to &quot;Time Picker 时间选择器&quot;">​</a></h1><p>选取你想要的时间</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/time-picker" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/time-picker.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>使用 <code>v-model:time</code> 绑定一个值</p>',6),u=t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki material-theme-palenight"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-time-picker"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model:time"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"value1"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"lang"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ts"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"setup"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"ref"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"vue"),t("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," value1 "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#89DDFF"}},"''"),t("span",{style:{color:"#A6ACCD"}},")")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}},">")])])])],-1),C=r('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:time</code></td><td>绑定值</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>clear</code></td><td>是否可清空</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>size</code></td><td>尺寸</td><td><a href="/components/interface.html#fightingsize">FightingSize</a></td><td><code>large</code> <code>middle</code> <code>small</code> <code>mini</code></td><td>middle</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TimePickerInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TimePickerProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',6),f={href:"https://github.com/Tyh2001",target:"_blank"},k=JSON.parse('{"title":"Time Picker 时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/time-picker.md","filePath":"components/time-picker.md","lastUpdated":1690866089000}'),g={name:"components/time-picker.md"},v=D({...g,setup(A){const a=y("");return(b,l)=>{const c=s("f-time-picker"),p=s("vp-demo"),i=s("f-avatar");return m(),F("div",null,[h,o(p,{source:""},{source:n(()=>[o(c,{time:a.value,"onUpdate:time":l[0]||(l[0]=d=>a.value=d)},null,8,["time"])]),default:n(()=>[u]),_:1}),C,t("a",f,[o(i,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{k as __pageData,v as default};
