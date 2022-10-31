import { useMessage } from '../_hooks'

const { instance: Message } = useMessage('message')

import { installFn } from '../_utils'

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface.d'
