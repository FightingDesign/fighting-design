import notificationVue from './src/notification.vue'
import { installFn } from '../_utils'
import { useMessage } from '../_hooks'

const { instance: Notification } = useMessage(notificationVue)

export const FNotification = installFn(Notification, 'FMessage')

export * from './src/interface.d'
