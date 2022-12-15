import FormItem from './src/form-item.vue'

import { install } from '../_utils'

export const FFormItem = install(FormItem)

export type FormItemInstance = InstanceType<typeof FormItem>

export * from './src/interface.d'

export default FormItem
