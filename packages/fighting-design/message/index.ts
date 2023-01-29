import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useTips } from '../_hooks'

const { renderInstance: Message } = useTips(messageVue)

export const FMessage = installFn(Message, 'FMessage')

export * from './src/interface.d'
