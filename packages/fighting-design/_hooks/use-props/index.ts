import { reactive, toRef } from 'vue'
import { isString, isObject } from '../../_utils'
import type {
  FilterParamsInterface,
  FilterParamsListInterface,
  UsePropsReturnInterface
} from './interface'

/**
 * 对于 props 的一些操作
 *
 * @param prop 需要操作的 prop 对象
 * @returns
 */
export const useProps = (prop): UsePropsReturnInterface => {
  /**
   * 过滤 prop
   *
   * @param list 需要的参数列表
   * @returns { Object } 过滤后的 prop 响应式对象
   */
  const filter = (list: FilterParamsInterface): Record<string, unknown> => {
    /**
     * 过滤的 prop 结果
     */
    const result: Record<string, unknown> = reactive({})

    list.forEach((item: string | FilterParamsListInterface): void => {
      /**
       * 判断如果是字符串参数
       *
       * @see toRef https://cn.vuejs.org/api/reactivity-utilities.html#toref
       */
      if (isString(item)) {
        result[item] = toRef(prop, item)
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
        if ((item as FilterParamsListInterface).callback()) {
          result[(item as FilterParamsListInterface).key] = toRef(
            prop,
            (item as FilterParamsListInterface).key
          )
        }
      }
    })

    return result
  }

  return {
    filter
  }
}
