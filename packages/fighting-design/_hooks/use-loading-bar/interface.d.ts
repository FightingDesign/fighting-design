import type { OrdinaryFunctionInterface } from '../../_interface'
export type { OrdinaryFunctionInterface } from '../../_interface'

export interface UseLoadingBarInterface {
  (): UseLoadingBarReturnInterface
}

export interface UseLoadingBarReturnInterface {
  readonly start: OrdinaryFunctionInterface
  readonly finish: OrdinaryFunctionInterface
  readonly error: OrdinaryFunctionInterface
}
