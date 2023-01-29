import { useList, useTips } from '..'
import { onMounted, nextTick, ref, computed } from 'vue'
import type { Ref, CSSProperties } from 'vue'
import type { MessageProps } from '../../message'
import type { NotificationProps } from '../../notification'
import type { UseEjectReturn } from './interface'

export * from './interface.d'

/**
 * 针对 message notification 组件公共方法封装
 * 
 * @param prop props 参数
 * @param component 组件名
 * @param el 元素节点
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
       * @see getBoundingClientRec https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRec
       */
      elHeight.value = el.value ? el.value.getBoundingClientRect().height : 0
    })
  })

  /** 判断方位 */
  const isPosition = computed((): boolean => prop.placement.includes(component === 'message' ? 'top' : 'right'))

  /** 计算组件之间偏移量 */
  const siblingOffset = computed((): number => getSiblingOffset(prop.placement, prop.id, !isPosition.value))

  /** 计算偏移量 */
  const offset = computed((): number => prop.offset + siblingOffset.value)

  /** 底部偏移量 */
  const bottom = computed((): number => elHeight.value + offset.value)

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
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
