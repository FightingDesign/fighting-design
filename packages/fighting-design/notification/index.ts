import notificationVue from './src/notification.vue'
import { installFn } from '../_utils'
import { useTips } from '../_hooks'

const { instance: Notification } = useTips(notificationVue)

export const FNotification = installFn(Notification, 'FMessage')

export * from './src/interface.d'
