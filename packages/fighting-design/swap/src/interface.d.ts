export type { SwapPropsType } from './props'

export type SwapType = 'sound' | 'swap' | 'default'

export interface SwapOnChangeInterface {
  (target: boolean): void
}
