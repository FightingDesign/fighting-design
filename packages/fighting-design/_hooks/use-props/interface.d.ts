export interface FilterParamsList {
  key: string
  callback: Function
}

export type FilterParams = (string | FilterParamsList)[]

export interface UsePropsReturn {
  filter(list: FilterParams): Record<string, unknown>
}
