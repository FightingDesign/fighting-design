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
import { FProgress } from './progress'
import { FSpace } from './space'
import { FDialog } from './dialog'
import { FTooltip } from './tooltip'
import { FDrawer } from './drawer'
import { FPageHeader } from './page-header'
import { FRate } from './rate'
import { FAlert } from './alert'
import { FMenu } from './menu'
import { FMenuItem } from './menu-item'
import { FMenuItemGroup } from './menu-item-group'
import { FNovelCoronavirus } from './novel-coronavirus'
import { FMask } from './mask'

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
  FProgress,
  FSpace,
  FDialog,
  FTooltip,
  FDrawer,
  FPageHeader,
  FRate,
  FAlert,
  FMenu,
  FMenuItem,
  FMenuItemGroup,
  FNovelCoronavirus,
  FMask
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
  FProgress,
  FSpace,
  FDialog,
  FTooltip,
  FDrawer,
  FPageHeader,
  FRate,
  FAlert,
  FMenu,
  FMenuItem,
  FMenuItemGroup,
  FNovelCoronavirus,
  FMask
}

export default {
  install,
  ...components
}
