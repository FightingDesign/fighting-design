import { reactive } from 'vue'
import type { ordinaryFunctionInterface as a } from '../_interface'

/**
 * 过滤 props 需要使用的 props
 * 
 * 需要传入两个泛型参数
 * @type { FPropsType } 传入的 props 类型
 * @type { needPropsType } 需要的 props 类型 / 返回值类型
 * @param props 原始 props
 * @param need 需要的键集合
 * @returns 需要的 props
 */
export const useFilterProps = <FPropsType, needPropsType>(props: FPropsType, need: string[]) => {
  // 结果
  const needProps: needPropsType = reactive({})

  /**
   * 过滤 props
   */
  const filterProps: a = (): void => {
    for (const key of need) {
      if (Object.hasOwn(props, key)) {
        needProps[key] = props[key]
      }
    }
  }

  /**
   * 获取结果
   * @returns 
   */
  const getProps = (): needPropsType => {
    filterProps()
    return needProps
  }

  return { getProps }
}
