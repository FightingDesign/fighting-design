export type { SwitchPropsType } from './props'

export type SwitchSizeType = 'large' | 'middle' | 'small'

export interface SwitchChangeInterface {
  (target: boolean): void
}
