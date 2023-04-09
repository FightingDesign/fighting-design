import notificationVue from './src/notification.vue'
import { installFn } from '../_utils'
import { useMessage } from '../_hooks'

const { Message } = useMessage(notificationVue, 'notification')

export const FNotification = installFn(Message, 'FNotification')

export * from './src/interface'
