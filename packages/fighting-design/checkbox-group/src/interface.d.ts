export type CheckboxGroupLabelType = string | number | boolean

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small'

export interface ChangeEventInterface {
  (val: CheckboxGroupLabelType): void
}
