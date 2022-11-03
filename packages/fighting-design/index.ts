import { defineCustomElement } from 'vue'
import * as components from './components'
import { version } from './package.json'
import { setWebComponentName } from './_utils'
import type { FightingDesignWebComponentsReturn } from './_interface'

export const register = (): void => {
  Object.entries(components).forEach(([key, value]): void => {
    customElements.define(setWebComponentName(key), defineCustomElement(value))
  })
}

export default {
  version,
  register
} as FightingDesignWebComponentsReturn
