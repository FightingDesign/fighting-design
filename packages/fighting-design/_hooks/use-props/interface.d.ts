/**
 * 带有回调的 filter 方法类型接口
 *
 * @param { String } key prop 的键
 * @param { Function } callback 验证回调
 */
export interface FilterParamsList {
  key: string
  callback: () => boolean
}

/** 过滤方法参数类型接口 */
export type FilterParams = (string | FilterParamsList)[]

/**
 * useProps 返回值类型接口
 *
 * @param { Function } filter 过滤 prop
 * @param { Function } interceptors 拦截 prop
 */
export interface UsePropsReturn {
  filter: (list: FilterParams) => Record<string, unknown>
  interceptors: (param: string, role: () => boolean, def?: null | string) => Ref<string> | null | string
}
