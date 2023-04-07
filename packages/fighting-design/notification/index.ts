import notificationVue from './src/notification.vue'
import { installFn } from '../_utils'
import { useTips } from '../_hooks'

const { renderInstance } = useTips(notificationVue)

export const FNotification = installFn(renderInstance, 'FMessage')

export * from './src/interface'
