import type { App } from 'vue'
import { FButton } from './button'
import { FIcon } from './icon'
import { FButtonGroup } from './button-group'
import { FLink } from './link'
import { FImage } from './image'
import { FCard } from './card'
import { FTag } from './tag'
import { FDivider } from './divider'

const components = {
  FButton,
  FButtonGroup,
  FIcon,
  FLink,
  FImage,
  FCard,
  FTag,
  FDivider
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export { FButton, FButtonGroup, FIcon, FLink, FImage, FCard, FTag }

export default {
  install,
  ...components
}
