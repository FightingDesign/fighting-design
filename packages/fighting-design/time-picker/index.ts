import TimePicker from './src/time-picker.vue'

import style from '../../fighting-theme/src/time-picker.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTimePicker: ComponentPublicInstance = installWebComponent(TimePicker, style)

/** time-picker 组件实例类型 */
export type TimePickerInstance = InstanceType<typeof TimePicker>

export * from './src/interface'

export default FTimePicker
