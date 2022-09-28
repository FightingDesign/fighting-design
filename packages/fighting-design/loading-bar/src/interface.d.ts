import type { OrdinaryFunctionInterface as a } from '../../_interface'

export interface UseLoadingBarInterface {
  (): UseLoadingBarReturnInterface
}

export interface UseLoadingBarReturnInterface {
  readonly start: a
  readonly finish: a
  readonly error: a
}
