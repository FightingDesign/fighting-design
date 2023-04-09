import notificationVue from './src/notification.vue'
import { installFn } from '../_utils'
// import { useTips } from '../_hooks'
import { useMessage } from '../_hooks'

// const { renderInstance } = useTips(notificationVue)
const { Message } = useMessage(notificationVue, 'notification')

export const FNotification = installFn(Message, 'FNotification')

export * from './src/interface'
