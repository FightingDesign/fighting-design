import { h } from 'vue'
import FIconSmileLine from '../../_components/svg/f-icon-smile-line.vue'
import FIconLightbulb from '../../_components/svg/f-icon-lightbulb.vue'
import FIconThumbUp from '../../_components/svg/f-icon-thumb-up.vue'
import FIconCircleCross from '../../_components/svg/f-icon-circle-cross.vue'
import FIconWarning from '../../_components/svg/f-icon-warning.vue'

export const notificationTypes = ['default', 'primary', 'success', 'danger', 'warning'] as const

export const notificationPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

export const notificationDefaultIcon = {
  default: h(FIconSmileLine),
  primary: h(FIconLightbulb),
  success: h(FIconThumbUp),
  danger: h(FIconCircleCross),
  warning: h(FIconWarning)
} as const
