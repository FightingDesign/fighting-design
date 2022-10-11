import { reactive } from 'vue'

/**
 * 过滤 props 需要使用的 props
 *
 * 需要传入两个泛型参数
 * @type { F } 传入的 props 类型
 * @type { N } 需要的 props 类型 / 返回值类型
 * @param props 原始 props
 * @param need 需要的键集合
 * @returns 需要的 props
 */
export const useFilterProps = <T, F>(props: T, arr: string[]): F => {
  const needProps = reactive({}) as Record<string, unknown>

  for (const key of arr) {
    if (key) {
      needProps[key] = (props as Record<string, unknown>)[key]
    }
  }

  return needProps as F
}
