import FormItem from './src/form-item.vue'

import style from '../../fighting-theme/src/form-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFormItem: ComponentPublicInstance = installWebComponent(FormItem, style)

/** form-item 组件实例类型 */
export type FormItemInstance = InstanceType<typeof FormItem>

export * from './src/interface'

export default FFormItem
