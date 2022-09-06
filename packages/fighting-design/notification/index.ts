import Notification from './src/method'

import { installFn } from '../_utils'

export const FMessage = /* @__PURE__ */ (() => installFn(Notification, 'FNotification'))()

export type { FMessageInstance as FNotificationInstance } from '../_interface'
