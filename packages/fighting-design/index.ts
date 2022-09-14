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
import { FProgress } from './progress'
import { FSpace } from './space'
import { FDialog } from './dialog'
import { FTooltip } from './tooltip'
import { FDrawer } from './drawer'
import { FPageHeader } from './page-header'
import { FAlert } from './alert'
import { FList } from './list'
import { FListItem } from './list-item'
import { FToolbar } from './toolbar'
import { FToolbarItem } from './toolbar-item'
import { FMessage } from './message'
import { FWatermark } from './watermark'
import { FEmpty } from './empty'
import { FSkeleton } from './skeleton'
import { FNotification } from './notification'
import { LoadingBar as useLoadingBar } from './loading-bar'
import { FSvg } from './svg'
import { FRipple } from './ripple'
import { FRadio } from './radio'
import { FRadioGroup } from './radio-group'
import { FImagePreview } from './image-preview'

const components = {
  FButton,
  FIcon,
  FButtonGroup,
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
  FBreadcrumb,
  FBreadcrumbItem,
  FText,
  FLoading,
  FProgress,
  FSpace,
  FDialog,
  FTooltip,
  FDrawer,
  FPageHeader,
  FAlert,
  FList,
  FListItem,
  FToolbar,
  FToolbarItem,
  FMessage,
  FWatermark,
  FEmpty,
  FSkeleton,
  FNotification,
  useLoadingBar,
  FSvg,
  FRipple,
  FRadio,
  FRadioGroup,
  FImagePreview
}

export const install = (app: App): App => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })

  app.config.globalProperties.FMessage = components.FMessage
  app.config.globalProperties.FNotification = components.FNotification
  return app
}

export {
  FButton,
  FIcon,
  FButtonGroup,
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
  FBreadcrumb,
  FBreadcrumbItem,
  FText,
  FLoading,
  FProgress,
  FSpace,
  FDialog,
  FTooltip,
  FDrawer,
  FPageHeader,
  FAlert,
  FList,
  FListItem,
  FToolbar,
  FToolbarItem,
  FMessage,
  FWatermark,
  FEmpty,
  FSkeleton,
  FNotification,
  useLoadingBar,
  FSvg,
  FRipple,
  FRadio,
  FRadioGroup,
  FImagePreview
}

export default {
  install,
  ...components
}
