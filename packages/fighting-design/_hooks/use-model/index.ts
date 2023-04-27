import { computed } from 'vue'
import type { WritableComputedRef } from 'vue'

/** emit 类型 */
type Emit = (event: 'update:modelValue', val: string | number) => void

export interface UseModelReturn<T, K extends keyof T> {
  keyword: WritableComputedRef<T[K]>
}

/**
 * 用于文本框输入类型组件单项数据了丢失问题封装
 * 
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 集合
 * @param { string } propName prop 指定的返回键名
 * @param { Object } emit emit 集合
 * @param { string } emitName emit 指定的返回键名
 * @returns { Object } 自定义计算属性
 */
export const useModel = <T, K extends keyof T>(
  prop: T,
  propName: K,
  emit: Emit,
  emitName: 'update:modelValue'
): UseModelReturn<T, K> => {

  /**
   * 自定义计算属性
   *
   * @see computed() https://cn.vuejs.org/api/reactivity-core.html#computed
   */
  const keyword = computed({
    get: (): T[K] => {
      return prop[propName]
    },
    set: (val: T[K]): void => {
      emit(emitName, val as string | number)
    }
  })

  return { keyword }
}
