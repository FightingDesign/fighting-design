export type { SwapPropsType } from './swap'

export type SwapType = 'sound' | 'swap' | 'default'

export interface SwapOnChangeInterface {
  (target: boolean): void
}
