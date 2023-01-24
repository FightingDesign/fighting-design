import { useMessage } from '../_hooks'

import { installFn } from '../_utils'

const { instance: Message } = useMessage('message')

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface.d'
