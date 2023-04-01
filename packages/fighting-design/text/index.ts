import Text from './src/text.vue'

import { install } from '../_utils'

export const FText = install(Text)

/** text 组件实例类型 */
export type TextInstance = InstanceType<typeof Text>

export * from './src/interface'

export default FText
