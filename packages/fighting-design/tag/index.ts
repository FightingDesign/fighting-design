import Tag from './src/tag.vue'

import style from '../../fighting-theme/src/tag.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTag: ComponentPublicInstance = installWebComponent(Tag, style)

/** tag 组件实例类型 */
export type TagInstance = InstanceType<typeof Tag>

export * from './src/interface'

export default FTag
