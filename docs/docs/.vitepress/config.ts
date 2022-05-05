// import { nav } from './utils/nav'
// import { sidebar } from './utils/sidebar'
// const getBase = require('../../src/vitepress/config/baseConfig')
import getBase from '../../src/vitepress/config/baseConfig'

const config = (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      }
    },

    title: 'Fighting Design',
    head: [
      ['link', { rel: 'icon', href: 'https://tianyuhao.cn/fighting/imgs/logo.png' }]
    ],
    description: 'Fighting Design 是一个用 TypeScript + Template 编写的 Vue3 组件库。Fighting Design 是一个简洁而又轻量级的 Vue3 组件库，为开发者、设计师和产品经历准备。有希望开发者可以借用 Fighting Design 的组件设计思想，在不久的将来，孕育出更高阶的组件库。', // 页面的描述 添加到 mate 标签中
    darkMode: true,

    // 主题配置
    themeConfig: {
      // nav,
      // sidebar,
      darkMode: true,
      algolia: {
        indexName: 'vuejs-v3',
        appId: 'BH4D9OD16A',
        apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
      },

      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vue' },
        { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
      ],
      logo: 'https://tianyuhao.cn/fighting/imgs/logo.png',

      // 

      nav: [
        {
          text: 'API Reference',
          activeMatch: `^/api/`,
          link: '/api/'
        },
        {
          text: 'Sponsor',
          link: '/sponsor/'
        }
      ],

      sidebar: {
        '/guide/': [
          {
            text: 'Essentials',
            items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              {
                text: 'Application & Component Instances',
                link: '/guide/instance'
              },
              { text: 'Template Syntax', link: '/guide/template-syntax' },
              {
                text: 'Data Properties and Methods',
                link: '/guide/data-methods'
              },
              {
                text: 'Computed Properties and Watchers',
                link: '/guide/computed'
              },
              {
                text: 'Class and Style Bindings',
                link: '/guide/class-and-style'
              },
              { text: 'Conditional Rendering', link: '/guide/conditional' },
              { text: 'List Rendering', link: '/guide/list' },
              { text: 'Event Handling', link: '/guide/events' },
              { text: 'Form Input Bindings', link: '/guide/forms' },
              { text: 'Components Basics', link: '/guide/component-basics' }
            ]
          },
          {
            text: 'Components In-Depth',
            items: [
              {
                text: 'Component Registration',
                link: '/guide/component-registration'
              },
              { text: 'Props', link: '/guide/component-props' },
              { text: 'Non-Prop Attributes', link: '/guide/component-attrs' },
              { text: 'Custom Events', link: '/guide/component-custom-events' },
              { text: 'Slots', link: '/guide/component-slots' },
              {
                text: 'Provide / inject',
                link: '/guide/component-provide-inject'
              },
              {
                text: 'Dynamic & Async Components',
                link: '/guide/component-dynamic-async'
              },
              { text: 'Template refs', link: '/guide/component-template-refs' },
              {
                text: 'Handling Edge Cases',
                link: '/guide/component-edge-cases'
              }
            ]
          },
          {
            text: 'Transitions & Animation',
            items: [
              { text: 'Overview', link: '/guide/transitions-overview' },
              {
                text: 'Enter & Leave Transitions',
                link: '/guide/transitions-enterleave'
              },
              { text: 'List Transitions', link: '/guide/transitions-list' },
              { text: 'State Transitions', link: '/guide/transitions-state' }
            ]
          },
          {
            text: 'Reusability',
            items: [
              { text: 'Mixins', link: '/guide/mixins' },
              { text: 'Custom Directives', link: '/guide/custom-directive' }
            ]
          },
          {
            text: 'Composition API',
            items: [
              {
                text: 'Introduction',
                link: '/guide/composition-api-introduction'
              },
              { text: 'Setup', link: '/guide/composition-api-setup' },
              {
                text: 'Lifecycle Hooks',
                link: '/guide/composition-api-lifecycle-hooks'
              },
              {
                text: 'Provide / Inject',
                link: '/guide/composition-api-provide-inject'
              },
              {
                text: 'Template Refs',
                link: '/guide/composition-api-template-refs'
              }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Teleport', link: '/guide/teleport' },
              { text: 'Render Function', link: '/guide/render-function' },
              { text: 'Plugins', link: '/guide/plugins' }
            ]
          },
          {
            text: 'Digging Deeper',
            items: [
              { text: 'Reactivity in Depth', link: '/guide/reactivity' },
              {
                text: 'Reactivity Fundamentals',
                link: '/guide/reactivity-fundamentals'
              },
              {
                text: 'Reactivity in Computed and Watch',
                link: '/guide/reactivity-computed-watchers'
              },
              {
                text: 'Rendering Mechanisms and Optimizations',
                link: '/guide/optimizations'
              }
            ]
          },
          {
            text: 'Tooling',
            items: [
              {
                text: 'Single File Components',
                link: '/guide/single-file-component'
              },
              { text: 'Testing', link: '/guide/testing' },
              { text: 'TypeScript Support', link: '/guide/typescript-support' },
              { text: 'Mobile', link: '/guide/mobile' },
              {
                text: 'Production Deployment',
                link: '/guide/tooling/deployment'
              }
            ]
          },
          {
            text: 'Scaling Up',
            items: [
              { text: 'Routing', link: '/guide/routing' },
              { text: 'State Management', link: '/guide/state-management' },
              { text: 'Server-Side Rendering', link: '/guide/ssr' }
            ]
          },
          {
            text: 'Accessibility',
            items: [
              { text: 'Basics', link: '/guide/a11y-basics' },
              { text: 'Semantics', link: '/guide/a11y-semantics' },
              { text: 'Standards', link: '/guide/a11y-standards' },
              { text: 'Resources', link: '/guide/a11y-resources' }
            ]
          }
        ],
        '/api/': [
          {
            text: 'Global API',
            items: [
              { text: 'Application', link: '/api/application' },
              { text: 'Utilities', link: '/api/utilities' }
            ]
          },
          {
            text: 'Component',
            items: [
              { text: 'Options: State', link: '/api/options-state' },
              { text: 'Options: Rendering', link: '/api/options-rendering' },
              {
                text: 'Options: Lifecycle Hooks',
                link: '/api/options-lifecycle'
              },
              {
                text: 'Options: Composition',
                link: '/api/options-composition'
              },
              { text: 'Options: Misc', link: '/api/options-misc' },
              {
                text: 'Instance',
                link: '/api/component-instance'
              }
            ]
          },
          {
            text: 'Composition API',
            items: [
              { text: 'setup()', link: '/api/composition-setup' },
              { text: 'Reactivity', link: '/api/composition-reactivity' },
              { text: 'Lifecycle', link: '/api/composition-lifecycle' }
            ]
          },
          {
            text: 'Built-ins',
            items: [
              { text: 'Directives', link: '/api/built-in-directives' },
              { text: 'Components', link: '/api/built-in-components' },
              { text: 'Special Attributes', link: '/api/special-attributes' }
            ]
          },
          {
            text: 'Single File Component',
            items: [
              { text: 'Specification', link: '/api/sfc-spec' },
              { text: '<script setup>', link: '/api/sfc-script-setup' },
              { text: '<style> Features', link: '/api/sfc-style' }
            ]
          },
          {
            text: 'TypeScript',
            items: [{ text: 'Utility Types', link: '/api/types-utility' }]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Render Function Helpers', link: '/api/render-function' },
              { text: 'Compiler Transforms', link: '/api/compiler' },
              { text: 'Server-Side Rendering', link: '/api/ssr' },
              { text: 'Custom Renderer', link: '/api/custom-renderer' }
            ]
          }
        ]
      }
    }
  }
})()

export default config

// const base = getBase()

// export default {
// const config = (async () => {
//   ...base,
//   title: 'Fighting Design',
//     head: [
//       ['link', { rel: 'icon', href: 'https://tianyuhao.cn/fighting/imgs/logo.png' }]
//     ],
//       description: 'Fighting Design 是一个用 TypeScript + Template 编写的 Vue3 组件库。Fighting Design 是一个简洁而又轻量级的 Vue3 组件库，为开发者、设计师和产品经历准备。有希望开发者可以借用 Fighting Design 的组件设计思想，在不久的将来，孕育出更高阶的组件库。', // 页面的描述 添加到 mate 标签中
//         darkMode: true,

//           // 主题配置
//           themeConfig: {
//   nav,
//     sidebar,
//     darkMode: true,
//       logo: 'https://tianyuhao.cn/fighting/imgs/logo.png'
// }
// })