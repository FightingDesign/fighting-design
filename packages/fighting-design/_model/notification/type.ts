export const notificationTypes = ['default', 'primary', 'success', 'danger', 'warning'] as const

export const notificationPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

export const notificationDefaultIcon = {
  default: 'f-icon-prompt-fill',
  primary: 'f-icon-remind-fill',
  success: 'f-icon-success-fill',
  danger: 'f-icon-reeor',
  warning: 'f-icon-warning-fill'
} as const
