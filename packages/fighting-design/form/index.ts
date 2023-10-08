import Form from './src/form.vue'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FForm: ComponentPublicInstance = installWebComponent(Form, '')

/** form 组件实例类型 */
export type FormInstance = InstanceType<typeof Form>

export * from './src/interface'

export default FForm
