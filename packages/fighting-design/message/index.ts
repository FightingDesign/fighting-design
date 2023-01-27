import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useMessage } from '../_hooks'

const { instance: Message } = useMessage(messageVue)

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface.d'
