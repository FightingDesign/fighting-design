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
import { FBackTop } from './back-top'
import { FBreadcrumb } from './breadcrumb'
import { FBreadcrumbItem } from './breadcrumb-item'
import { FText } from './text'
import { FLoading } from './loading'
import { FCaptcha } from './captcha'
import { FAffix } from './affix'

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
  FAvatar,
  FBackTop,
  FBreadcrumbItem,
  FBreadcrumb,
  FText,
  FLoading,
  FCaptcha,
  FAffix
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
  FAvatar,
  FBackTop,
  FBreadcrumbItem,
  FBreadcrumb,
  FText,
  FLoading,
  FCaptcha,
  FAffix
}

export default {
  install,
  ...components
}
