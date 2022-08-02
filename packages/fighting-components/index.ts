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
import { FNovelCoronavirus } from './novel-coronavirus'
import { FList } from './list'
import { FListItem } from './list-item'
import { FMask } from './mask'
import type { FMessageInstance } from './message'
import { FToolbar } from './toolbar'
import { FToolbarItem } from './toolbar-item'
import { FMessage } from './message'

const COMPONENTS = {
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
  FNovelCoronavirus,
  FList,
  FListItem,
  FMask,
  FToolbar,
  FToolbarItem
}

const PLUGINS = {
  FMessage
}

const install = (app: App): void => {
  Object.entries(COMPONENTS).forEach(([key, value]) => {
    app.component(key, value)
  })
  Object.entries(PLUGINS).forEach(([key, value]) => {
    app.config.globalProperties[key] = value
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
  FNovelCoronavirus,
  FList,
  FListItem,
  FMask,
  FMessage,
  FToolbar,
  FToolbarItem
}

export type { FMessageInstance }

export default {
  install,
  ...COMPONENTS
}
