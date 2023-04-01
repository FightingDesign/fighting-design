import FormItem from './src/form-item.vue'

import { install } from '../_utils'

export const FFormItem = install(FormItem)

/** form-item 组件实例类型 */
export type FormItemInstance = InstanceType<typeof FormItem>

export * from './src/interface'

export default FFormItem
