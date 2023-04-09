import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useMessage } from '../_hooks'

const { Message } = useMessage(messageVue, 'message')

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface'
