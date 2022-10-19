import * as components from './components'
import { version } from './package.json'
import type { App } from 'vue'
import type { AppInstallInterface } from './_interface'

const install: AppInstallInterface = (app: App): App => {
  Object.entries(components).forEach(([key, value]): void => {
    // https://cn.vuejs.org/api/application.html#app-component
    app.component(key, value)
  })

  app.config.globalProperties.FMessage = components.FMessage
  app.config.globalProperties.FNotification = components.FNotification
  return app
}

export default {
  version,
  install
}
