import { version } from './package.json'
import type { App } from 'vue'
import type { AppInstallInterface } from './_interface'
import * as components from './components'
export * from './components'

export const install: AppInstallInterface = (app: App): App => {
  Object.entries(components).forEach(([key, value]): void => {
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
