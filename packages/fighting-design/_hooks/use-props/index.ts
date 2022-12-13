import { reactive, toRef } from 'vue'
import { isString, isObject } from '../../_utils'
import type { Ref } from 'vue'
import type { FilterParams, FilterParamsList, UsePropsReturn } from './interface'

export * from './interface.d'

/**
 * 对于 props 的一些操作
 *
 * @param prop 需要操作的 prop 对象
 */
export const useProps = <T extends object>(prop: T): UsePropsReturn => {
  /**
   * 过滤 prop
   *
   * @param list 需要的参数列表
   * @returns { Object } 过滤后的 prop 响应式对象
   */
  const filter = (list: FilterParams): Record<string, unknown> => {
    /**
     * 过滤的 prop 结果
     */
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
          result[item.key] = toRef(prop, item.key as never)
        }
      }
    })

    return result
  }

  /**
   * prop 拦截器，可拦截指定的属性，传入 rule 回调进行验证
   *
   * @param param 参数
   * @param rule 验证回调
   * @param def 默认值
   * @returns 响应式数据或 null
   */
  const interceptors = (param: string, rule: () => boolean, def: null | string = null): Ref<string> | null | string => {
    return rule() ? toRef(prop, param as never) : def
  }

  return {
    filter,
    interceptors
  }
}
