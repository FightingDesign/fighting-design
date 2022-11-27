import { reactive, toRef } from 'vue'
import { isString, isObject } from '../../_utils'
import type { FilterParamsInterface, FilterParamsListInterface, FilterInterface, UsePropsReturnInterface, UsePropsInterface } from './interface'

/**
 * 对于 props 的一些操作
 * 
 * @param prop 
 * @returns 
 */
export const useProps: UsePropsInterface = (prop): UsePropsReturnInterface => {
  /**
   * 过滤 prop
   * 
   * @param list 需要的参数列表
   * @returns 
   */
  const filter: FilterInterface = (list: FilterParamsInterface): Record<string, unknown> => {
    /**
     * 过滤的 prop 结果
     */
    const result: Record<string, unknown> = reactive({})

    list.forEach((item: string | FilterParamsListInterface): void => {
      /**
       * 判断如果是字符串参数
       * 
       * 并且 prop 对象上存在该值
       * 
       * 则添加响应式数据
       */
      // if (isString(item) && prop[item]) {
      if (isString(item)) {
        result[item] = toRef(prop, item)
        console.log(item)

      }
      /**
       * 如果是 object 类型
       * 
       * 则代表有一定的判断条件才需要过滤
       */
      else if (isObject(item)) {
        /**
         * callback 参数返回一个 boolean
         * 
         * 如果为真才过滤该属性
         */
        if ((item as FilterParamsListInterface).callback()) {
          result[(item as FilterParamsListInterface).key] = toRef(prop, (item as FilterParamsListInterface).key)
        }
      }
    })

    return result
  }

  return {
    filter
  } as UsePropsReturnInterface
}
