import type { FightingType, FightingSize } from '../../_interface'
import type { ComputedRef } from 'vue'
import type { LangContentKey, LangKey } from '../../_lang'

/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param { string } [type] 组件的类型
 * @param { string } [size] 组件的尺寸
 */
export interface UseGlobalProp {
  type?: FightingType | null
  size?: FightingSize | string | number
}

/**
 * useGlobal 返回值类型接口
 *
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 * @param { Function } getLang 获取组件的语言
 * @param { Function } getProp 获取组件修改指定参数后的 props
 */
export interface UseGlobalReturn {
  getType: (def?: FightingType) => ComputedRef<FightingType>
  getSize: (
    def?: FightingSize,
    parentSize?: FightingSize | null
  ) => ComputedRef<FightingSize>
  getLang: <T extends LangContentKey>(componentName: T) => ComputedRef<LangKey[T]>
  getProp: (target: ('type' | 'size')[], def?: string[]) => object
}
