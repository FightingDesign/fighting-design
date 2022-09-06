import Notification from './src/method'

import { installFn } from '../_utils'

/* @__PURE__ */ installFn(Notification, 'FNotification')

export const FNotification = Notification

export type { FMessageInstance as FNotificationInstance } from '../_interface'
