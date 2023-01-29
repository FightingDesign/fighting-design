import type { ComputedRef, CSSProperties, Ref } from 'vue'
import type { ClassList } from '../../_interface'

/**
 * useEject 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 * @param { Object } elHeight 元素的高度
 * @param { Object } bottom 底部偏移量
 * @param { Object } offsetStyle 位置偏移量样式列表
 * @param { Object } isPosition 判断方位
 * @param { Object } visible 控制显示隐藏
 * @param { Function } clearTimer 清除计时器
 * @param { Function } closeMessage 关闭提示框
 * @param { Function } closeMessageEnd 关闭提示框之后的回调
 * @param { Function } startTime 开始计时
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
