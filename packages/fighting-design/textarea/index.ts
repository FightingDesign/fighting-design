import Textarea from './src/textarea.vue'

import { install } from '../_utils'

export const FTextarea = install(Textarea)

export type TextareaInstance = InstanceType<typeof Textarea>

export * from './src/interface.d'

export default FTextarea
