import { reactive, toRef } from 'vue'

/**
 * 对于 props 的一些操作
 * 
 * @param prop 
 * @returns 
 */
export const useProps = (prop) => {
  /**
   * 过滤 prop
   * 
   * @param list 需要的参数列表
   * @returns 
   */
  const filter = (list: string[]) => {
    const result: Record<string, unknown> = reactive({})

    for (const item of list) {
      if (prop[item]) {
        result[item] = toRef(prop, item)
      }
    }

    return result
  }

  return {
    filter
  }
}
