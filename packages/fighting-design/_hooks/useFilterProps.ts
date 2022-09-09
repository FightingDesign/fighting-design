import { reactive } from 'vue'

/**
 * 过滤 props 需要使用的 props
 *
 * hooks 提出者：https://github.com/OnlyShadows
 * hooks 开发者：https://github.com/Tyh2001
 *
 * 需要传入两个泛型参数
 * @type { F } 传入的 props 类型
 * @type { N } 需要的 props 类型 / 返回值类型
 * @param props 原始 props
 * @param need 需要的键集合
 * @returns 需要的 props
 * @examples let r = useFilterProps({ name: 'zs', age: 20 }, ['name']);
 */
export const useFilterProps = <T extends Record<string, unknown>, F extends keyof T>(
  props: T,
  arr: F[]
): Record<F, T[F]> => {
  const result = reactive({}) as Record<F, T[F]>

  for (const item of arr) {
    if (item) {
      result[item] = props[item]
    }
  }

  return result
}
