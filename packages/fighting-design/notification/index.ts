import Notification from './src/method'

import { installFn } from '../_utils'

export const FNotification = installFn(Notification, 'FNotification')

export type { FMessageInstance as FNotificationInstance } from '../_interface'
