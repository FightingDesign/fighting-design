export type { RadioGroundProps } from './props'

export type RadioLabelType = string | number | boolean

export interface RadioChangeInterface {
  (value: RadioLabelType): void
}

export interface RadioGroundInterface {
  readonly disabled: boolean
  readonly modelValue: RadioLabelType
  readonly label: string
  readonly vertical: boolean
  readonly size: RadioGroupSizeType
  readonly columnGap: string | number
  readonly rowGap: string | number
  readonly border: boolean
  readonly circle: boolean
  readonly change: RadioChangeInterface
  readonly changeEvent: ChangeEventInterface
}
