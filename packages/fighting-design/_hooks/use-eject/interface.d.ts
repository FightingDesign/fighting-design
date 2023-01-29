import type { ComputedRef, CSSProperties, Ref } from 'vue'
import type { ClassList } from '../../_interface'

/**
 * useEject 返回值类型接口
 *
 * @param classList 类名列表
 * @param styleList 样式列表
 * @param elHeight 元素的高度
 * @param bottom 底部偏移量
 * @param offsetStyle 位置偏移量样式列表
 * @param isPosition 判断方位
 * @param visible 控制显示隐藏
 * @param clearTimer 清除计时器
 * @param closeMessage 关闭提示框
 * @param closeMessageEnd 关闭提示框之后的回调
 * @param startTime 开始计时
 */
export interface UseEjectReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
  elHeight: Ref<number>
  bottom: ComputedRef<number>
  offsetStyle: ComputedRef<CSSProperties>
  isPosition: ComputedRef<boolean>
  visible: Ref<boolean>
  clearTimer: () => void
  closeMessage: () => void
  closeMessageEnd: () => void
  startTime: () => void
}
