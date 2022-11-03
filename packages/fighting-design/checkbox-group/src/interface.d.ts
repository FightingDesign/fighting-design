export type { CheckboxGroupPropsType } from './props'

export type CheckboxGroupLabelType = string | number | boolean

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface ChangeEventInterface {
  (val: CheckboxGroupLabelType): void
}

export interface CheckboxGroupChangeInterface {
  (val: CheckboxGroupLabelType): boolean
}
