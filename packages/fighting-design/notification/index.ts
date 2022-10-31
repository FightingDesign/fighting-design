import { useMessage } from '../_hooks'

const { FMessage: Notification } = useMessage('notification')

import { installFn } from '../_utils'

export const FNotification = installFn(Notification, 'FMessage')

export * from './src/interface.d'
