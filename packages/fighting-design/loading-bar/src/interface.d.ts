import type { ordinaryFunctionInterface as a } from '../../_interface'

export interface useLoadingBarInterface {
  (): useLoadingBarReturnInterface
}

export interface useLoadingBarReturnInterface {
  readonly start: a
  readonly finish: a
  readonly error: a
}
