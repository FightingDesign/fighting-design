export type CheckboxLabelType = string | number | boolean

export interface CheckboxChangeEventInterface {
  (value: CheckboxLabelType): void
}

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small'

export interface CheckboxGroupInterface {
  disabled: boolean
  modelValue: CheckboxLabelType
  label: string
  changeEvent: CheckboxChangeEventInterface
  border: boolean
  size: string
}
