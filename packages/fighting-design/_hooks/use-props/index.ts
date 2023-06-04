import { reactive, toRef } from 'vue'
import { isString, isObject } from '../../_utils'
import type { Ref } from 'vue'

/**
 * 带有回调的 filter 方法类型接口
 *
 * @param { string } key prop 的键
 * @param { string } actualKey 转换的 prop 的键
 * @param { Function } callback 验证回调
 */
export interface FilterParamsList {
  key: string
  actualKey?: string
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
  interceptors: (
    param: string,
    role: () => boolean,
    def?: null | string
  ) => Ref<string> | null | string
}

/**
 * 对于 props 的一些操作
 *
 * 目前支持过滤属性、拦截器
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 需要操作的 prop 对象
 * @returns { Object } 针对 prop 处理的一些方法
 */
export const useProps = <T extends object>(prop: T): UsePropsReturn => {
  /**
   * 过滤 prop
   *
   * @param { string | Array } list 需要的参数列表
   * @returns { Object } 过滤后的 prop 响应式对象
   */
  const filter = (list: FilterParams): Record<string, unknown> => {
    /** 过滤的 prop 结果 */
    const result: Record<string, unknown> = reactive({})

    list.forEach((item: string | FilterParamsList): void => {
      /**
       * 判断如果是字符串参数
       *
       * @see toRef https://cn.vuejs.org/api/reactivity-utilities.html#toref
       */
      if (isString(item)) {
        result[item] = toRef(prop, item as never)
      } else if (isObject(item)) {
        /** 如果是对象类型 */
        /**
         * 如果是 object 类型
         *
         * 则代表有一定的判断条件才需要过滤
         *
         * callback 参数返回一个 boolean
         *
         * 如果为真才过滤该属性
         */
        if (item.callback && item.callback()) {
          result[item.actualKey || item.key] = toRef(prop, item.key as never)
        }
      }
    })

    return result
  }

  /**
   * prop 拦截器，可拦截指定的属性，传入 rule 回调进行验证
   *
   * @param { string } param 参数
   * @param { Function } rule 验证回调
   * @param { string } [def] 默认值
   * @returns { Object | string | null } 响应式数据或 null
   */
  const interceptors = (
    param: string,
    rule: () => boolean,
    def: null | string = null
  ): Ref<string> | null | string => {
    return rule() ? toRef(prop, param as never) : def
  }

  return {
    filter,
    interceptors
  }
}
