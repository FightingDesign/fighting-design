export type { RatePropsType } from './props'

export interface RateMouseoverInterface {
  (index: number): void
}

export interface RateHandleClickInterface {
  (index: number): void
}

export interface RateChangeInterface {
  (val: number): number
}
