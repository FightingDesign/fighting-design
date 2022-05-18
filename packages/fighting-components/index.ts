import type { App } from 'vue'
import { FButton } from './button'
import { FIcon } from './icon'
import { FButtonGroup } from './button-group'

const components = {
  FButton,
  FButtonGroup,
  FIcon
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export {
  FButton,
  FButtonGroup,
  FIcon
}

export default {
  install,
  ...components
}
