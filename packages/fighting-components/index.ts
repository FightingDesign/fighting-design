import type { App } from 'vue'
import * as components from './components'
export * from './components'

const plugins = {
  FMessage: components.FMessage
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  Object.entries(plugins).forEach(([key, value]): void => {
    app.config.globalProperties[key] = value
  })
}

export default {
  install
}
