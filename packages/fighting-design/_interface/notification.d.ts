import type { ComponentInternalInstance } from 'vue'
import type { NotificationPropsType } from '../notification/src/props'
import type { NotificationType } from '../notification/src/interface'

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

type InstanceOptions<T> = Partial<Mutable<T>> & {
  onDestroy?: () => void
}

export interface NotificationInstance {
  visible: number
  bottom: number
  id: string
  vm: ComponentInternalInstance
  close: () => void
}

export type NotificationFnWithType = {
  [key in NotificationType]: (text: string) => void
}

export type NotificationOptions = InstanceOptions<NotificationPropsType>

export interface FNotificationFn {
  (options: NotificationOptions | string): NotificationInstance
}
