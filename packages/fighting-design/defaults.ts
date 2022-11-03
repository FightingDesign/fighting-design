import { defineCustomElement } from 'vue'
import * as components from './components'
import { version } from './package.json'
import { setWebComponentName } from './_utils'

const install = (): void => {
  Object.entries(components).forEach(([key, value]): void => {
    customElements.define(setWebComponentName(key), defineCustomElement(value))
  })

  // app.config.globalProperties.FMessage = components.FMessage
  // app.config.globalProperties.FNotification = components.FNotification
  // return app
}

export default {
  version,
  install
}
