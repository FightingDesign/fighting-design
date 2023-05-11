import { ref, computed, reactive, onMounted } from 'vue'
import { sizeChange } from '../../_utils'
import { useRun } from '..'
import { TRIGGER_CONTENT_BOX_CLASS, TRIGGER_CLASS } from '../../_tokens'
import type { TriggerProps } from '../../trigger'
import type { CSSProperties, Ref, ComputedRef } from 'vue'
import type { HandleMouse } from '../../_interface'

/**
 * useTrigger 返回值类型接口
 *
 * @param { Object } visible 是否展示主内容
 * @param { Object } styleList 样式列表
 * @param { Object } positionStyle 主要内容坐标样式
 * @param { Function } onBeforeEnter 在元素被插入到 DOM 之前被调用
 * @param { Function } close 关闭触发器
 */
export interface UseTriggerReturn {
  visible: Ref<boolean>
  styleList: ComputedRef<CSSProperties>
  positionStyle: ComputedRef<CSSProperties>
  onBeforeEnter: (el: Element) => void
  close: HandleMouse
}

/**
 * 触发器组件方法封装
 *
 * @param { Object } prop prop 参数
 * @param { Object } node 内容节点元素
 * @returns { Object }
 */
export const useTrigger = (
  prop: TriggerProps,
  node: Ref<HTMLDivElement | undefined>
): UseTriggerReturn => {
  const { run } = useRun()

  /** 是否展示主内容 */
  const visible = ref<boolean>(false)

  /** 主要内容坐标信息 */
  const position = reactive({ x: '', y: '' })

  /** 主要内容坐标样式 */
  const positionStyle = computed((): CSSProperties => {
    return {
      '--trigger-content-x': position.x,
      '--trigger-content-y': position.y
    }
  })

  /** 设置内容位置 */
  const setPosition = (): void => {
    /** 获取到元素节点 */
    const element: HTMLDivElement | undefined = node.value

    if (!element) return

    /**
     * 获取当前元素相对于浏览器窗口的坐标信息
     *
     * @see getBoundingClientRect https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
     */
    const { left, top, height } = element.getBoundingClientRect()

    /**
     * x 轴偏移距离
     *
     * 返回文档/页面水平方向滚动的像素值
     *
     * @see Window.scrollX https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollX
     */
    const x: number = left + window.scrollX
    /** y 轴偏移距离 */
    const y: number = top + window.scrollY + height

    position.x = x + 'px'
    position.y = y + 'px'
  }

  /** 记录提示框是否应该显示 */
  let contentVisible = false

  /**
   * 打开触发器
   *
   * @param { Object } evt 事件对象
   */
  const open = (evt: MouseEvent): void => {
    if (prop.disabled) return

    if (visible.value) {
      contentVisible = true
      return
    }

    setPosition()

    visible.value = true
    contentVisible = true

    run(prop.onOpen, visible.value, evt)
    run(prop.onChange, visible.value, evt)
  }

  /**
   * 关闭触发器
   *
   * @param { Object } evt 事件对象
   */
  const close = (evt: MouseEvent): void => {
    if (prop.disabled) return

    contentVisible = false

    setTimeout((): void => {
      if (!contentVisible) {
        visible.value = false

        run(prop.onClose, visible.value, evt)
        run(prop.onChange, visible.value, evt)
      }
    }, 300)
  }

  /**
   * 内容部分移入
   */
  const contentLave = (): void => {
    contentVisible = true
  }

  /**
   * 挂载之后给元素添加事件监听器
   */
  onMounted((): void => {
    if (node.value) {
      if (prop.trigger === 'hover') {
        node.value.addEventListener('mouseenter', open)
        node.value.addEventListener('mouseleave', close)
      }

      if (prop.trigger === 'click') {
        node.value.addEventListener('click', open)
      }
    }
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { spacing, enterDuration, leaveDuration } = prop

    return {
      '--trigger-spacing-size': sizeChange(spacing),
      '--trigger-enter-duration': enterDuration && enterDuration + 's',
      '--trigger-leave-duration': leaveDuration && leaveDuration + 's'
    } as CSSProperties
  })

  /**
   * 文档监听
   *
   * @param { Object } evt 事件对象
   */
  const documentListen = (evt: MouseEvent): void => {
    /** 获取到点击的元素 */
    const element = evt.target as HTMLElement

    /**
     * @see Element.closest() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest
     */
    if (element.closest('.' + TRIGGER_CONTENT_BOX_CLASS) || element.closest('.' + TRIGGER_CLASS)) {
      return
    }

    /** 否则关闭触发器 */
    close(evt)

    /** 关闭之后移除事件监听 */
    window.removeEventListener('click', documentListen, true)
    window.removeEventListener('resize', setPosition)
  }

  /**
   * 在元素被插入到 DOM 之前被调用
   *
   * @see Transition https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks
   */
  const onBeforeEnter = (el: Element): void => {
    if (prop.trigger === 'hover') {
      (el as HTMLElement).addEventListener('mouseenter', contentLave);
      (el as HTMLElement).addEventListener('mouseleave', close)
    }

    /**
     * 当浏览器比例缩放发生变化的时候，重写位置信息
     *
     * @see resize https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event
     */
    window.addEventListener('resize', setPosition)

    /**
     * 给 window 注册点击事件用于关闭触发器
     *
     * 这里需要给 addEventListener 传递第三个参数为 true
     *
     * 表示为事件捕获阶段触发
     *
     * 因为父组件有可能使用 @click.stop 阻止事件冒泡，默认为 false 就不会触发方法
     *
     * @see EventTarget.addEventListener() https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
     */
    window.addEventListener('click', documentListen, true)
  }

  return {
    visible,
    styleList,
    positionStyle,
    onBeforeEnter,
    close
  }
}
