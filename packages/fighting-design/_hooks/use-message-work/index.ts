import { useList, removeInstance, useRun } from '..'
import { ref, computed, getCurrentInstance } from 'vue'
import type { MessageProps, NotificationProps } from '../../components'
import type { CSSProperties, ComputedRef, Ref, ComponentInternalInstance } from 'vue'
import type { ClassList } from '../../_interface'

export interface UseMessageWorkReturn {
  classList: ComputedRef<ClassList>
  style: ComputedRef<CSSProperties>
  visible: Ref<boolean>
  isPosition: ComputedRef<boolean>
  offsetStyle: ComputedRef<CSSProperties>
  offsetVal: Ref<number>
  onBeforeLeave: () => void
  onAfterLeave: () => void
  clearTimer: () => void
  startTime: () => void
  handelClose: () => void
}

/**
 * message 和 notification 组件内部工作方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } instance 组件实例
 * @param { Object } prop 参数
 * @param { string } name 组件名
 * @returns { Object }
 */
export const useMessageWork = (
  prop: MessageProps | NotificationProps,
  name: 'message' | 'notification'
): UseMessageWorkReturn => {
  const { classes, styles } = useList(prop, name)
  const { run } = useRun()

  /** 获取到当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  /** 控制显示隐藏 */
  const visible = ref<boolean>(true)

  /** 类名列表 */
  const classList = classes(['type', 'placement', 'round'], `f-${name}`)

  /** 样式列表 */
  const style = styles(['color', 'background', 'zIndex'], 'zIndex')

  /**
   * 判断方位
   *
   * @see Array.prototype.includes() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   */
  const isPosition = computed((): boolean => prop.placement.includes('top'))

  /** 偏移量 */
  const offsetVal = ref(prop.offset)

  /** 定时器 */
  let timeout: NodeJS.Timeout | undefined

  /** 关闭方法 */
  const handelClose = (evt?: MouseEvent): void => {
    visible.value = false
    run(prop.onClose, evt)
    clearTimeout(timeout)
  }

  /** 动画关闭之后移除组件实例对象 */
  const onBeforeLeave = (): void => {
    removeInstance(instance)
  }

  /** 移除元素节点 */
  const onAfterLeave = (): void => {
    if (instance.vnode.el) {
      /**
       * @see Node.parentElement https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentElement
       * @see Node.removeChild https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
       */
      instance.vnode.el.parentElement.removeChild(instance.vnode.el)
    }
  }

  /** 延迟关闭 */
  const delayClose = (): void => {
    if (prop.duration > 0) {
      timeout = setTimeout((): void => {
        handelClose()
      }, prop.duration)
    }
  }

  delayClose()

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
    /** 样式对象 */
    const styles: CSSProperties = {}

    if (prop.placement.includes('bottom')) {
      styles.bottom = offsetVal.value + 'px'
    } else {
      styles.top = offsetVal.value + 'px'
    }

    return styles
  })

  /** 清除计时器 */
  const clearTimer = (): void => {
    if (!timeout) return
    clearTimeout(timeout)
  }

  /** 开始计时 */
  const startTime = (): void => {
    delayClose()
  }

  return {
    classList,
    style,
    visible,
    isPosition,
    offsetStyle,
    offsetVal,
    onBeforeLeave,
    onAfterLeave,
    clearTimer,
    startTime,
    handelClose
  }
}
