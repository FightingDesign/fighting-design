import type { App } from 'vue'

import FMessage from './message'
export type { FMessageInstance } from './message'

import * as components from './components'
export * from './components'

const plugins = {
  FMessage
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]): void => {
    app.component(key, value)
    // console.log(value)
  })

  Object.entries(plugins).forEach(([key, value]): void => {
    app.config.globalProperties[key] = value
    // console.log(key, value)
  })
}

export default {
  install
}
