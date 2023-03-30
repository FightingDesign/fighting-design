import { useList, useTips } from '..'
import { onMounted, nextTick, ref, computed } from 'vue'
import type { Ref, CSSProperties, ComputedRef } from 'vue'
import type { MessageProps } from '../../message'
import type { NotificationProps } from '../../notification'
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

/**
 * 针对 message notification 组件公共方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { 'message' | 'notification' } component 组件名
 * @param { Object } el 元素节点
 * @returns { Object }
 */
export const useEject = (
  prop: MessageProps | NotificationProps,
  component: 'message' | 'notification',
  el: Ref<HTMLDivElement | null>
): UseEjectReturn => {
  /** 元素的高度 */
  const elHeight = ref<number>(0)

  /** 控制显示隐藏 */
  const visible = ref<boolean>(false)

  /** 计时器 */
  const timer = ref<NodeJS.Timeout>()

  const { classes, styles } = useList(prop, component)
  const { getSiblingOffset, removeInstance } = useTips()

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], `f-${component}`)

  /** 样式列表 */
  const styleList = styles(['color', 'background', 'zIndex'], 'zIndex')

  onMounted((): void => {
    nextTick((): void => {
      /**
       * 设置元素的高度
       *
       * @see Element.getBoundingClientRect() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
       */
      elHeight.value = el.value ? el.value.getBoundingClientRect().height : 0
    })
  })

  /** 判断方位 */
  const isPosition = computed((): boolean =>
    prop.placement.includes(component === 'message' ? 'top' : 'right')
  )

  /** 计算组件之间偏移量 */
  const siblingOffset = computed((): number =>
    getSiblingOffset(prop.placement, prop.id, !isPosition.value)
  )

  /** 计算偏移量 */
  const offset = computed((): number => prop.offset + siblingOffset.value)

  /** 底部偏移量 */
  const bottom = computed((): number => elHeight.value + offset.value)

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
    /** 样式对象 */
    const styles: CSSProperties = {}

    if (prop.placement.includes('bottom')) {
      styles.bottom = offset.value + 'px'
    } else {
      styles.top = offset.value + 'px'
    }

    return styles
  })

  /** 清除计时器 */
  const clearTimer = (): void => {
    if (!timer.value) return
    clearTimeout(timer.value)
  }

  /** 关闭提示框 */
  const closeMessage = (): void => {
    clearTimer()
    visible.value = false
  }

  /**
   * 关闭提示框之后的回调
   *
   * 移除组件实例
   */
  const closeMessageEnd = (): void => {
    removeInstance(prop.placement, prop.id)
  }

  /**
   * 开始计时
   *
   * 到时间隐藏提示框
   */
  const startTime = (): void => {
    if (!prop.duration) return
    timer.value = setTimeout((): void => {
      closeMessage()
    }, prop.duration)
  }

  /** 初始化之后开始计时 并且展示提示 */
  onMounted((): void => {
    startTime()
    visible.value = true
  })

  return {
    classList,
    styleList,
    elHeight,
    bottom,
    offsetStyle,
    isPosition,
    visible,
    clearTimer,
    closeMessage,
    closeMessageEnd,
    startTime
  }
}
