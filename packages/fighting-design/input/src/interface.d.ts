export type { InputPropsType } from './props'

export type InputType = 'text' | 'password'

export type InputSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface InputChangeInterface {
  (val: string): void
}

export interface InputSearchInterface {
  ({ evt: Event, value: string }): void
}

export interface InputHandleShowPasswordInterface {
  (target: 'down' | 'up'): void
}
