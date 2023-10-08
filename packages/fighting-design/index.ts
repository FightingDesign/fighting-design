import { defineCustomElement } from 'vue'
import { version } from './package.json'
import { setWebComponentName, objectEntries } from './_utils'
import * as components from './components'

export * from './components'

const install = (): void => {
  objectEntries(components).forEach(([key, value]): void => {
    customElements.define(setWebComponentName(key), defineCustomElement(value))
  })
}

export default {
  version,
  install
}
