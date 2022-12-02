export interface FilterParamsListInterface {
  key: string
  callback: Function
}

export type FilterParamsInterface = (string | FilterParamsListInterface)[]

export interface UsePropsReturnInterface {
  filter: FilterInterface
}
