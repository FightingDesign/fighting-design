export type RadioLabelType = string | number | boolean

export interface changeEventInterface {
  (value: RadioLabelType): void
}

export type RadioGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface RadioGroundInterface {
  disabled: boolean
  modelValue: RadioLabelType
  label: string
  vertical: boolean
  size: radioGroupSize
  columnGap: string | number
  rowGap: string | number
  border: boolean
  circle: boolean
  changeEvent: changeEventInterface
}
