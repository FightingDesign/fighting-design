import type { RadioGroundProps } from './radio-group'

export interface changeEventInterface {
  (value: RadioGroundProps['modelValue']): void
}

export type labelType = string | number | boolean

export interface RadioGroundInterface {
  disabled: boolean
  modelValue: labelType
  label: string
  vertical: boolean
  columnGap: string | number
  rowGap: string | number
  border: boolean
  changeEvent: changeEventInterface
} 
