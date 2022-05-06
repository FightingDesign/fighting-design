const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']

module.exports = async () => ({
  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    }
  },

  markdown: {
    highlight: await require('./highlight')()
  }
})
