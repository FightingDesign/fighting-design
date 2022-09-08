import { isNumber, isString } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'
function isBoolean (v:unknown):Boolean{
  return typeof v == 'boolean'
}

export const radioProps = {
  disabled:Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  label:{
    type: [String, Number, Boolean],
    default: ''
  }
}

export const radioEmits = {
  'update:modelValue': (val:RadioProps['modelValue'] ):Boolean =>
    isString(val) || isNumber(val) || isBoolean(val),

  change: (val:RadioProps['modelValue'] ):Boolean =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>
