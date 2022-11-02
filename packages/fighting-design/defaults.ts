import { defineCustomElement } from 'vue'
import * as components from './components'
import { version } from './package.json'
import { setWebComponentName } from './_utils'
import type { App, ComponentPublicInstance } from 'vue'
import type { AppInstallInterface } from './_interface'

const install: AppInstallInterface = (app: App): App => {
  Object.entries(components).forEach(([key, value]): void => {
    let styles = ''

    import(`../fighting-theme/src/${key.toLowerCase().slice(1)}.scss`).then(res => {
      styles = res.default
      if (res.default) {
        setStyle()
      }
    })

    function setStyle (): void {
      value.styles = [styles]
      customElements.define(setWebComponentName(key), defineCustomElement(value as unknown as ComponentPublicInstance))
    }
  })

  // app.config.globalProperties.FMessage = components.FMessage
  // app.config.globalProperties.FNotification = components.FNotification
  return app
}

export default {
  version,
  install
}
