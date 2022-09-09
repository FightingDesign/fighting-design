import Radio from './src/radio.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Radio)

export const FRadio = Radio

export type FRadioInstance = InstanceType<typeof FRadio>
