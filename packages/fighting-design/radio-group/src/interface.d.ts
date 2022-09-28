export type RadioLabelType = string | number | boolean

export interface ChangeEventInterface {
  (value: RadioLabelType): void
}

export type RadioGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface RadioGroundInterface {
  disabled: boolean
  modelValue: RadioLabelType
  label: string
  vertical: boolean
  size: RadioGroupSizeType
  columnGap: string | number
  rowGap: string | number
  border: boolean
  circle: boolean
  changeEvent: ChangeEventInterface
}
