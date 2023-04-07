import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useTips } from '../_hooks'

const { renderInstance } = useTips(messageVue)

export const FMessage = installFn(renderInstance, 'FMessage')

export * from './src/interface'
