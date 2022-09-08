// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { InjectionKey } from 'vue';
import type { RadioGroupProps } from './radioGroup';
// import type  {IRadio} from './radioGroup.vue'
export type TSimple = string | number | boolean
export type TRaw = string | number

export interface RadioGroupContext extends RadioGroupProps {
  changeEvent: (val: RadioGroupProps['modelValue']) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol('radioGroupKey')
