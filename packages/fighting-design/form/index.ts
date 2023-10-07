import Form from './src/form.vue'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FForm: ComponentPublicInstance = installWebComponent(Form, '')

export * from './src/interface'

export default FForm
