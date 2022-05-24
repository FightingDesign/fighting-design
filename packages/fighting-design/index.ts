import type { App } from 'vue'
import { FButton } from '@fighting-design/fighting-components'
import { FIcon } from '@fighting-design/fighting-components'
import { FButtonGroup } from '@fighting-design/fighting-components'
import { FLink } from '@fighting-design/fighting-components'
import { FImage } from '@fighting-design/fighting-components'

const components = {
  FButton,
  FButtonGroup,
  FIcon,
  FLink,
  FImage
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export {
  FButton,
  FButtonGroup,
  FIcon,
  FLink,
  FImage
}

export default {
  install,
  ...components
}
