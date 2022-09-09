export type labelType = string | number | boolean

export interface changeEventInterface {
  (value: labelType): void
}

export type radioGroupSize = 'large' | 'middle' | 'small' | 'mini'

export interface RadioGroundInterface {
  disabled: boolean
  modelValue: labelType
  label: string
  vertical: boolean
  size: radioGroupSize
  columnGap: string | number
  rowGap: string | number
  border: boolean
  circle: boolean
  changeEvent: changeEventInterface
}
