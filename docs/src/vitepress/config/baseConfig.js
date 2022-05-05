/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

// for local-linked development
const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = async () => ({
  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    }
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ],
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            'link',
            {
              rel: 'preload',
              href: '/assets/inter-latin.7b37fe23.woff2',
              as: 'font',
              type: 'font/woff2',
              crossorigin: 'anonymous'
            }
          ]
        ]
      : []),
    [
      'script',
      {},
      require('fs').readFileSync(
        require('path').resolve(
          __dirname,
          './inlined-scripts/applyDarkMode.js'
        ),
        'utf-8'
      )
    ]
  ],

  markdown: {
    highlight: await require('./highlight')()
  },

  shouldPreload: (link) => {
    // make algolia chunk prefetch instead of preload
    return !link.includes('Algolia')
  }
})
