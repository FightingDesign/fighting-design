import DatePicker from './src/date-picker.vue'

import { install } from '../_utils'

export const FDatePicker = install(DatePicker)

/** date-picker 组件实例类型 */
export type DatePickerInstance = InstanceType<typeof DatePicker>

export * from './src/interface'

export default FDatePicker
