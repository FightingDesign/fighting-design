import{_ as t,c as e,o as a,M as n}from"./chunks/framework.fe94f300.js";const m=JSON.parse('{"title":"贡献指南","description":"","frontmatter":{},"headers":[],"relativePath":"docs/contributing.md","filePath":"docs/contributing.md","lastUpdated":1691386875000}'),s={name:"docs/contributing.md"},r=n(`<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h1><p>English | <a href="https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md" target="_blank" rel="noreferrer">Chinese</a></p><h2 id="👋-写在前面" tabindex="-1">👋 写在前面 <a class="header-anchor" href="#👋-写在前面" aria-label="Permalink to &quot;👋 写在前面&quot;">​</a></h2><p>你好！欢迎使用 fighting-design！</p><p>我很高兴你有兴趣为 fighting-design 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。</p><p>规范可能比较多，但是大多数都是一些比较细小的规范，请认真阅读。</p><h2 id="🚫-禁止抄袭" tabindex="-1">🚫 禁止抄袭 <a class="header-anchor" href="#🚫-禁止抄袭" aria-label="Permalink to &quot;🚫 禁止抄袭&quot;">​</a></h2><p>众所周知，在市面上的组件库有很多，很多时候我们需要开发的新组件在市面上早已经开发好了，但是请勿直接复制其它第三方源码进行使用！</p><p>开发组件库本身是一个学习进步的过程，不要仅仅是为了新增组件而新增组件，希望各位参与者可以在新增组件过程中学习到一些东西来提升自己的技术。如果在开发阶段的某个功能遇到了困难，你可以发起一个<a href="https://github.com/FightingDesign/fighting-design/discussions" target="_blank" rel="noreferrer">讨论</a>，或者也可以直接联系我或在群里求助，当然去学习参考其它开源库也是可以的，只是希望你在写的时候，是已经理解了问题，自己来动手实践的。</p><h2 id="🛠️-启动项目" tabindex="-1">🛠️ 启动项目 <a class="header-anchor" href="#🛠️-启动项目" aria-label="Permalink to &quot;🛠️ 启动项目&quot;">​</a></h2><p>在贡献之前，你需要先将 fighting-design 项目跑起来才行，那么前期的准备你需要：</p><ul><li>安装 <a href="http://nodejs.cn" target="_blank" rel="noreferrer">node</a>，版本 &gt;= 16</li><li>安装 <a href="https://pnpm.io/zh" target="_blank" rel="noreferrer">pnpm</a>，最新版即可</li></ul><p>如果你已经做好了前面的准备，可以直接跳过，从这里开始：</p><ul><li>Fork <a href="https://github.com/FightingDesign/fighting-design" target="_blank" rel="noreferrer">fighting-design</a></li></ul><p>接下来执行命令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone 项目</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:FightingDesign/fighting-design.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fighting-design</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖项</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动开发项目</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动文档</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev:docs</span></span></code></pre></div><h2 id="🔍-开发工具" tabindex="-1">🔍 开发工具 <a class="header-anchor" href="#🔍-开发工具" aria-label="Permalink to &quot;🔍 开发工具&quot;">​</a></h2><p>请先阅读 <a href="https://cn.vuejs.org/guide/typescript/overview.html#ide-support" target="_blank" rel="noreferrer">IDE 支持</a></p><p>编辑器强烈推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>，内置插件请务必安装以下几款：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Vue Language Features (Volar)</a> Vue3 官方开发插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">TypeScript Vue Plugin (Volar)</a> 用于支持在 TS 中 import <code>*.vue</code> 文件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a> 代码格式校验，如果不安装，那么 <a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config" target="_blank" rel="noreferrer">fighting-eslint-config</a> 则不生效</li><li><a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank" rel="noreferrer">Code Spell Checker</a> 用于检测单词拼写错误</li></ul><h2 id="🔓-命令说明" tabindex="-1">🔓 命令说明 <a class="header-anchor" href="#🔓-命令说明" aria-label="Permalink to &quot;🔓 命令说明&quot;">​</a></h2><p>fighting-design 内部设置了很多的命令，在 <a href="https://github.com/FightingDesign/fighting-design/blob/master/package.json" target="_blank" rel="noreferrer">package.json</a> 中可进行查看。下面详细介绍每一条命令：</p><div class="vp-table__container"><table><thead><tr><th>script 字段</th><th>对应命令</th><th>命令说明</th></tr></thead><tbody><tr><td><code>clear</code></td><td><code>pnpm clear</code></td><td>清除 dist 打包目录</td></tr><tr><td><code>start</code></td><td><code>pnpm start</code></td><td>启动测试开发项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/start" target="_blank" rel="noreferrer">start</a></td></tr><tr><td><code>dev:play</code></td><td><code>pnpm dev:play</code></td><td>启动演练场项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-playground" target="_blank" rel="noreferrer">fighting-playground</a></td></tr><tr><td><code>dev:docs</code></td><td><code>pnpm dev:docs</code></td><td>启动文档项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/docs" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><code>build</code></td><td><code>pnpm build</code></td><td>命令集合。打包所有组件、样式、类型。打包出来的就是最终需要发布的包 执行配置文件 <a href="https://github.com/FightingDesign/fighting-design/blob/master/vite.config.ts" target="_blank" rel="noreferrer">vite.config.ts</a></td></tr><tr><td><code>build:css</code></td><td><code>pnpm build:css</code></td><td>分别打包组件的样式，执行配置文件 <a href="https://github.com/FightingDesign/fighting-design/blob/master/vite.config.css.ts" target="_blank" rel="noreferrer">vite.config.css.ts</a></td></tr><tr><td><code>build:theme</code></td><td><code>pnpm build:theme</code></td><td>打包完整的主题样式，执行配置文件 <a href="https://github.com/FightingDesign/fighting-design/blob/master/vite.config.theme.ts" target="_blank" rel="noreferrer">vite.config.theme.ts</a></td></tr><tr><td><code>build:icon</code></td><td><code>pnpm build:icon</code></td><td>打包 <a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-icon" target="_blank" rel="noreferrer">fighting-icon</a>，执行配置文件 <a href="https://github.com/FightingDesign/fighting-design/blob/master/vite.config.icon.ts" target="_blank" rel="noreferrer">vite.config.icon.ts</a></td></tr><tr><td><code>build:docs</code></td><td><code>pnpm build:docs</code></td><td>打包文档项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/docs" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><code>build:start</code></td><td><code>pnpm build:start</code></td><td>打包 <code>start</code> 测试项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/start" target="_blank" rel="noreferrer">start</a></td></tr><tr><td><code>build:play</code></td><td><code>pnpm build:play</code></td><td>打包 <code>演练场</code> 项目 <a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-playground" target="_blank" rel="noreferrer">fighting-playground</a></td></tr><tr><td><code>serve:docs</code></td><td><code>pnpm serve:docs</code></td><td>预览打包后的文档</td></tr><tr><td><code>new</code></td><td><code>pnpm new xxx</code></td><td>构建全新组件，生产组件所需要的文件，执行配置文件 <a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-add-component/index.ts" target="_blank" rel="noreferrer">index.ts</a>，详情参考 <a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-add-component/README.md" target="_blank" rel="noreferrer">README.md</a></td></tr><tr><td><code>test</code></td><td><code>pnpm test</code></td><td>执行单元测试</td></tr><tr><td><code>prettier</code></td><td><code>pnpm prettier</code></td><td>全局格式化</td></tr><tr><td><code>commit</code></td><td><code>pnpm commit</code></td><td>commit 钩子</td></tr><tr><td><code>lint</code></td><td><code>pnpm lint</code></td><td>全局 eslint 检测，规则参考 <a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/eslint-config/index.js" target="_blank" rel="noreferrer"></a></td></tr><tr><td><code>lint:fix</code></td><td><code>pnpm lint:fix</code></td><td>全局 eSLint 检测 + 修复</td></tr><tr><td><code>changelog</code></td><td><code>pnpm changelog</code></td><td>同步文档的更新日志</td></tr><tr><td><code>ver</code></td><td><code>pnpm ver x.x.x</code></td><td>设置新的版本号</td></tr><tr><td><code>format</code></td><td><code>pnpm format</code></td><td>全局格式化 + 修复</td></tr></tbody></table></div><h2 id="🚧-开发规范" tabindex="-1">🚧 开发规范 <a class="header-anchor" href="#🚧-开发规范" aria-label="Permalink to &quot;🚧 开发规范&quot;">​</a></h2><p>主要源文件都在 <a href="https://github.com/FightingDesign/fighting-design/tree/master/packages" target="_blank" rel="noreferrer">packages</a> 目录下，其中每个子目录都有单独的 <code>README.md</code> 对指定目录进行说明，每个模块详细的规范参考下面文档：</p><p><strong>详细的规范在下面链接，千万不要忽略下面链接！！！</strong></p><p><strong>详细的规范在下面链接，千万不要忽略下面链接！！！</strong></p><p><strong>详细的规范在下面链接，千万不要忽略下面链接！！！</strong></p><ul><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-add-component/README.md" target="_blank" rel="noreferrer">fighting-add-component</a> 创建新组件</li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-design/README.md" target="_blank" rel="noreferrer">fighting-design</a> 组件源文件目录</li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-theme/README.md" target="_blank" rel="noreferrer">fighting-theme</a> 样式主题目录</li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config/README.md" target="_blank" rel="noreferrer">fighting-eslint-config</a> Eslint 配置项</li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/README.md" target="_blank" rel="noreferrer">docs</a> 文档编写规范</li></ul><h2 id="🛸-提交规范" tabindex="-1">🛸 提交规范 <a class="header-anchor" href="#🛸-提交规范" aria-label="Permalink to &quot;🛸 提交规范&quot;">​</a></h2><p>Git 允许我们在每次提交时，附带一个提交信息作为说明，当执行 <code>commit</code> 的时候，需要严格按照下方说明规范进行填写说明信息，提交信息必须是下面信息中的一个，后面跟随 <code>英文的冒号 + 空格 + 信息</code></p><p>例如：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">feat: 新增 xxx 功能</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>类型必须是下面类型之一，并对照类型描述填写。</p><div class="vp-table__container"><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>build</code></td><td>打包</td></tr><tr><td><code>chore</code></td><td>改变构建流程或者增加依赖库、工具等</td></tr><tr><td><code>ci</code></td><td>CI 相关更改</td></tr><tr><td><code>docs</code></td><td>文档改变</td></tr><tr><td><code>feat</code></td><td>新功能</td></tr><tr><td><code>fix</code></td><td>修复</td></tr><tr><td><code>perf</code></td><td>性能优化</td></tr><tr><td><code>refactor</code></td><td>既不修复错误也不添加功能的代码更改</td></tr><tr><td><code>revert</code></td><td>发布新版本</td></tr><tr><td><code>style</code></td><td>标记、空格、格式、缺少分号</td></tr><tr><td><code>test</code></td><td>增加测试/测试用例</td></tr></tbody></table></div><p>但 fighting-design 内置了 <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a> 插件可以辅助我们进行添加提交信息，那么就需要执行下面命令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用插件的提示来设置提交信息</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span></code></pre></div><h2 id="✏️-关于-pr" tabindex="-1">✏️ 关于 PR <a class="header-anchor" href="#✏️-关于-pr" aria-label="Permalink to &quot;✏️ 关于 PR&quot;">​</a></h2><p>在你提交 <code>PR</code> 之前，请务必保证你 <code>fork</code> 的仓库是当前最新的代码，以免发生冲突。</p><p>如果你并不了解如何提交 <code>PR</code>，可以参考我这篇文章 <a href="https://juejin.cn/post/7108740596738719751" target="_blank" rel="noreferrer">Github 如何提交 PR？</a></p><h2 id="🔑-财务贡献" tabindex="-1">🔑 财务贡献 <a class="header-anchor" href="#🔑-财务贡献" aria-label="Permalink to &quot;🔑 财务贡献&quot;">​</a></h2><p>开发不易，欢迎大家赞助！</p><img width="200px" src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/weixin.jpg"><img width="200px" src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/zhifubao.jpg"><h2 id="💌-非常感谢" tabindex="-1">💌 非常感谢 <a class="header-anchor" href="#💌-非常感谢" aria-label="Permalink to &quot;💌 非常感谢&quot;">​</a></h2><p>感谢所有已经为 fighting-design <a href="https://github.com/FightingDesign/fighting-design/graphs/contributors" target="_blank" rel="noreferrer">做出贡献的人</a>！</p><a href="https://github.com/FightingDesign/fighting-design/graphs/contributors"><img src="https://contrib.rocks/image?repo=FightingDesign/fighting-design"></a>`,47),i=[r];function o(d,l,c,g,p,h){return a(),e("div",null,i)}const b=t(s,[["render",o]]);export{m as __pageData,b as default};
