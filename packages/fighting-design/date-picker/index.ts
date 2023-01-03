import DatePicker from './src/date-picker.vue'

import { install } from '../_utils'

export const FDatePicker = install(DatePicker)

export type DatePickerInstance = InstanceType<typeof DatePicker>

export * from './src/interface.d'

export default FDatePicker
