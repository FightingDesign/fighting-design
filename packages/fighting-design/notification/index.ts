import Notification from '../_model/notification/method'

import { installFn } from '../_utils'

export const FNotification = installFn(Notification, 'FNotification')

export type { FMessageInstance as FNotificationInstance } from '../_interface'
