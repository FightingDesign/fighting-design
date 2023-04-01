import Textarea from './src/textarea.vue'

import { install } from '../_utils'

export const FTextarea = install(Textarea)

/** textarea 组件实例类型 */
export type TextareaInstance = InstanceType<typeof Textarea>

export * from './src/interface'

export default FTextarea
