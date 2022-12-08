export interface FilterParamsList {
  key: string
  callback: Function
}

export type FilterParams = (string | FilterParamsList)[]

export interface UsePropsReturnInterface {
  filter: FilterInterface
}
