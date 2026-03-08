import ColorPicker from './src/color-picker.vue'

import { install } from '../_utils'

export const FColorPicker = install(ColorPicker)

export type ColorPickerInstance = InstanceType<typeof ColorPicker>

export * from './src/interface'

export default ColorPicker
