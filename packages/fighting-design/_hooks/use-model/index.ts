import { computed } from 'vue'
import type { WritableComputedRef } from 'vue'

/**
 * useModel 返回值类型接口
 *
 * @param { Function } keyword 自定义计算属性
 */
export interface UseModelReturn<T> {
  keyword: WritableComputedRef<T>
}

/**
 * 用于文本框输入类型组件单项数据了丢失问题封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Function } get getter 方法
 * @param { Function } set setter 方法
 * @returns { Object } 自定义计算属性
 */
export const useModel = <T>(get: () => T, set: (val: T) => void): UseModelReturn<T> => {
  const keyword: WritableComputedRef<T> = computed({ get, set })

  return { keyword }
}
