import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassList } from '../../_interface'

/**
 * useAvatar 内部样式 hook 方法返回值类型接口
 *
 * @param { Object } nodeClassList img 元素的类名列表
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseAvatarReturn {
  nodeClassList: ComputedRef<ClassList>
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}
