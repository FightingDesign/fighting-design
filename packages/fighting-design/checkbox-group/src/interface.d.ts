export type CheckboxGroupLabelType = string | number | boolean

export interface CheckboxChangeEventInterface {
  (value: CheckboxGroupLabelType): void
}

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small'

export interface CheckboxGroupInterface {
  disabled: boolean
  modelValue: CheckboxGroupLabelType
  label: string
  changeEvent: CheckboxChangeEventInterface
  border: boolean
  size: string
}
