import Radio from './src/radio.vue'
import RadioGroup from './src/radioGroup.vue'
import { install } from '../_utils'

/* @__PURE__ */ install(Radio)
/* @__PURE__ */ install(RadioGroup)
export const FRadio = Radio
export const FRadioGroup = RadioGroup

export type FRadioInstance = InstanceType<typeof FRadio>
export type FRadioGroupInstance = InstanceType<typeof FRadioGroup>
