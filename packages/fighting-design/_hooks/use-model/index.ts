import { computed } from 'vue'
import type { WritableComputedRef } from 'vue'

type Emit<T, K extends keyof T> = (key: string | number | symbol, value: T[K]) => void

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
export const useModel = <T, K extends keyof T, E extends Emit<T, K>, N extends keyof E>(
  prop: T,
  propName: K,
  emit: E,
  emitName: N
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
      emit(emitName, val)
    }
  })

  return { keyword }
}
