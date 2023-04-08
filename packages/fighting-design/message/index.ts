import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useMessage } from './src/hooks'

const { Message } = useMessage(messageVue)

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface'
