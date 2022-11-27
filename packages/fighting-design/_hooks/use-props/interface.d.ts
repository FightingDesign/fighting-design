export interface FilterParamsListInterface {
  key: string
  callback: Function
}

export type FilterParamsInterface = (string | FilterParamsListInterface)[]

export interface FilterInterface {
  (list: FilterParamsInterface): Record<string, unknown>
}

export interface UsePropsReturnInterface {
  filter: FilterInterface
}

export interface UsePropsInterface {
  (prop): UsePropsReturnInterface
}
