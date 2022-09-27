import type { ComponentInternalInstance } from 'vue'
import type { NotificationPropsType } from '../notification/src/notification'
import type { notificationType } from '../notification/src/interface'

interface NotificationInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export type FNotificationFnWithType = {
  [key in notificationType]: (text: string) => void
}

export type NotificationOptions = InstanceOptions<NotificationPropsType>

export interface FNotificationFn {
  (options: NotificationOptions | string): NotificationInstance
}
