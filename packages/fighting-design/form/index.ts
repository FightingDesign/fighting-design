import Form from './src/form.vue'

import style from '../../fighting-theme/src/form.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FForm: ComponentPublicInstance = installWebComponent(Form, style)

export * from './src/interface'

export default FForm
