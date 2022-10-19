export type { CheckboxGroupPropsType } from './checkbox-group'

export type CheckboxGroupLabelType = string | number | boolean

export type CheckboxGroupSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface ChangeEventInterface {
  (val: CheckboxGroupLabelType): void
}
