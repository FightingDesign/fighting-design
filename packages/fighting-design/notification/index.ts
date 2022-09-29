import Notification from '../_model/notification/method'

import { installFn } from '../_utils'

export const FNotification = installFn(Notification, 'FNotification')

export type { NotificationInstance } from '../_interface'

export type { NotificationPropsType } from './src/notification'

export type { NotificationType, NotificationPlacementType } from './src/interface'

declare module 'vue' {
  export interface ComponentCustomProperties {
    FNotification: typeof FNotification
  }
}
