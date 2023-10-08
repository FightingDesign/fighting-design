import Text from './src/text.vue'

import style from '../../fighting-theme/src/text.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FText: ComponentPublicInstance = installWebComponent(Text, style)

/** text 组件实例类型 */
export type TextInstance = InstanceType<typeof Text>

export * from './src/interface'

export default FText
