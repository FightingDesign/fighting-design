import { reactive } from 'vue'
import type { ordinaryFunctionInterface as a } from '../_interface'

/**
 * 过滤 props 需要使用的 props
 *
 * hooks 提出者：https://github.com/OnlyShadows
 * hooks 开发者：https://github.com/Tyh2001
 *
 * 需要传入两个泛型参数
 * @type { FPropsType } 传入的 props 类型
 * @type { needPropsType } 需要的 props 类型 / 返回值类型
 * @param props 原始 props
 * @param need 需要的键集合
 * @returns 需要的 props
 */
export const useFilterProps = <FPropsType, needPropsType>(
  props: FPropsType,
  need: string[]
) => {
  type objectAny = Record<string, unknown>

  const needProps: needPropsType | objectAny = reactive({} as const)

  //  过滤 props
  const filterProps: a = (): void => {
    for (const key of need) {
      if (Object.hasOwn(props as unknown as object, key)) {
        needProps[key] = (props as unknown as objectAny)[key]
      }
    }
  }

  //  获取结果
  const getProps = (): needPropsType => {
    filterProps()
    return needProps as needPropsType
  }

  return { getProps } as const
}
