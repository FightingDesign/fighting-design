import DatePicker from './src/date-picker.vue'

import style from '../../fighting-theme/src/date-picker.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDatePicker: ComponentPublicInstance = installWebComponent(DatePicker, style)

/** date-picker 组件实例类型 */
export type DatePickerInstance = InstanceType<typeof DatePicker>

export * from './src/interface'

export default FDatePicker
