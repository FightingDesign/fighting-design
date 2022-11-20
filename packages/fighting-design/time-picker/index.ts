import TimePicker from './src/time-picker.vue'

import { install } from '../_utils'

export const FTimePicker = install(TimePicker)

export type TimePickerInstance = InstanceType<typeof TimePicker>

export * from './src/interface.d'

export default TimePicker
