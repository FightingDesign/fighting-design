import { radioEmits } from './radio'
import type { ExtractPropTypes } from 'vue'
import type RadioGroup from './radio-group.vue'
export const radioGroupProps ={
  disabled:Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  
  label: {
    type: String,
    default: undefined
  },
  textColor: {
    type: String,
    default: ''
  }
}
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits

export type RadioGroupEmits = typeof radioGroupEmits
export type RadioGroupInstance = InstanceType<typeof RadioGroup>
