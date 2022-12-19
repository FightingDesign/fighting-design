import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { head } from './utils/head'
import { defineConfig } from 'vitepress'
// import { fightingPlugin } from './config/index'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: 'Fighting Design',
  head,
  description,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FightingDesign/fighting-design'
      }
    ],
    logo: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
  },
  markdown: {
    // 自定义 markdown 语法
    // => fightingPlugin(md)
    config: (md) => {

      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom',
        cssPreprocessor: 'scss',
        // customStyleTagName: 'style lang="less"',
        scriptImports: [
          "import * as FightingDesign from '../../packages/fighting-design/index.ts'",
          "import * as FightingIcon from '@fighting-design/fighting-icon'"
        ],
        // [
        //   "import * as FightingIcon from '@fighting-design/fighting-icon'",
        //   "import * as FightingDesign from '../../packages/fighting-design/index.ts'"
        // ],
        scriptReplaces: [
          {
            searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
            replaceValue: 'const { defineComponent: _defineComponent } = Vue'
          },
          // {
          //   searchValue: /import ({.*}) from 'fighting-design'/g,
          //   replaceValue: (s, s1) => `const ${s1} = FightingDesign`
          // }
          {
            searchValue: /import ({.*}) from '@fighting-design\/fighting-icon'/g,
            replaceValue: (s, s1) => `const ${s1} = FightingIcon`
          },
          {
            searchValue: /import ({.*}) from 'fighting-design'/g,
            replaceValue: (s, s1) => `const ${s1} = FightingDesign`
          }
        ]
      })
    }

  }
})
