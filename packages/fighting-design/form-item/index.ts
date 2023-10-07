import FormItem from './src/form-item.vue'

import style from '../../fighting-theme/src/form.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFormItem: ComponentPublicInstance = installWebComponent(FormItem, style)

export * from './src/interface'

export default FFormItem
