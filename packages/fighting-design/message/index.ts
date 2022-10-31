// import Message from '../_model/message/method'
import { useMessage } from '../_hooks'

const { FMessage: Message } = useMessage('message')

import { installFn } from '../_utils'

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface.d'
