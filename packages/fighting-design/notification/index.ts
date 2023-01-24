import { useMessage } from '../_hooks'

import { installFn } from '../_utils'

const { instance: Notification } = useMessage('notification')

export const FNotification = installFn(Notification, 'FMessage')

export * from './src/interface.d'
