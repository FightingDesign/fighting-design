import type { FightingType, FightingSize } from '../../_interface'
import type { ComputedRef } from 'vue'
import type { LangContentKey, LangKey } from '../../_lang'

/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param type 组件的类型
 * @param size 组件的尺寸
 */
export interface UseGlobalProp {
  type?: FightingType
  size?: FightingSize | string | number
}

/**
 * useGlobal 返回值类型接口
 *
 * @param getType 获取组件的类型
 * @param getSize 获取组件的尺寸
 * @param getLang 获取组件的语言
 */
export interface UseGlobalReturn {
  getType: (def?: FightingType) => ComputedRef<FightingType>
  getSize: (def?: FightingSize, parentSize?: FightingSize | null) => ComputedRef<FightingSize>
  getLang: <T extends LangContentKey>(componentName: T) => ComputedRef<LangKey[T]>
}
