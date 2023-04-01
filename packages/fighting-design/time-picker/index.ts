import TimePicker from './src/time-picker.vue'

import { install } from '../_utils'

export const FTimePicker = install(TimePicker)

/** time-picker 组件实例类型 */
export type TimePickerInstance = InstanceType<typeof TimePicker>

export * from './src/interface'

export default FTimePicker
