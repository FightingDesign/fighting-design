export type { InputPropsType } from './input'

export type InputType = 'text' | 'password'

export type InputSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface InputFocusInterface {
  (evt: FocusEvent): void
}

export interface InputChangeInterface {
  (val: string): void
}

export interface InputSearchInterface {
  ({ evt: Event, value: string }): void
}

export interface InputEnterInterface {
  (evt: Event): void
}
