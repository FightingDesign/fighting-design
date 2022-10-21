import { h } from 'vue'
import {
  FIconSmileLineVue,
  FIconLightbulbVue,
  FIconThumbUpVue,
  FIconCircleCrossVue,
  FIconWarningVue
} from '../../_components/svg/index'

export const notificationTypes = ['default', 'primary', 'success', 'danger', 'warning'] as const

export const notificationPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

export const notificationDefaultIcon = {
  default: h(FIconSmileLineVue),
  primary: h(FIconLightbulbVue),
  success: h(FIconThumbUpVue),
  danger: h(FIconCircleCrossVue),
  warning: h(FIconWarningVue)
} as const
