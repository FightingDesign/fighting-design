import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassList } from '../../_interface'

/**
 * useButton 返回值类型接口
 * 
 * @param classList 类名列表
 * @param styleList 样式列表
 */
export interface UseButtonReturn {
  classList: ComputedRef<ClassList>,
  styleList: ComputedRef<CSSProperties>
}
