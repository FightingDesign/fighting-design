import Form from './src/form.vue'

import { install } from '../_utils'

export const FForm = install(Form)

/** form 组件实例类型 */
export type FormInstance = InstanceType<typeof Form>

export * from './src/interface'

export default FForm
