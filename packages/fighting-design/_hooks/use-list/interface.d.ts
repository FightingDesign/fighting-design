import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassList } from '../../_interface'

/**
 * useList 返回值类型接口
 *
 * @param classes 类名列表
 * @param styles 样式列表
 * @param className 其它需要直接加入的类名
 */
export interface UseListReturnInterface {
  classes(list: FilterParamsInterface, className?: string): ComputedRef<ClassList>
  styles(list: FilterParamsInterface): ComputedRef<CSSProperties>
}
