import type { RadioGroundProps } from './radio-group'

export interface changeEventInterface {
  (value: RadioGroundProps['modelValue']): void
}

export interface RadioGroundInterface {
  disabled: boolean
  modelValue: string | number | boolean
  label: string
  vertical: boolean
  columnGap: string | number
  rowGap: string | number
  changeEvent: changeEventInterface
} 
