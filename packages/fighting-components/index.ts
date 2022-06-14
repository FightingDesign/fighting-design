import type { App } from 'vue'
import { FButton } from './button'
import { FIcon } from './icon'
import { FButtonGroup } from './button-group'
import { FLink } from './link'
import { FImage } from './image'
import { FCard } from './card'
import { FTag } from './tag'
import { FDivider } from './divider'
import { FFooter } from './footer'
import { FHeader } from './header'
import { FAside } from './aside'
import { FMain } from './main'
import { FLayout } from './layout'
import { FSwitch } from './switch'
import { FBadge } from './badge'
import { FAvatar } from './avatar'

const components = {
  FButton,
  FButtonGroup,
  FIcon,
  FLink,
  FImage,
  FCard,
  FTag,
  FDivider,
  FFooter,
  FHeader,
  FAside,
  FMain,
  FLayout,
  FSwitch,
  FBadge,
  FAvatar
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
  FImage,
  FCard,
  FTag,
  FDivider,
  FFooter,
  FHeader,
  FAside,
  FMain,
  FLayout,
  FSwitch,
  FBadge,
  FAvatar
}

export default {
  install,
  ...components
}
