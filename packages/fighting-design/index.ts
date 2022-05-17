import type { App } from 'vue'
import { FButton } from '@fighting-design/fighting-components'
import { FIcon } from '@fighting-design/fighting-components'
import { FButtonGroup } from '@fighting-design/fighting-components'

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
