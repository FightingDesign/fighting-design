import { ref, computed, reactive, onMounted, watch } from 'vue'
import { useRun } from '..'
import { sizeChange } from '../../_utils'
import { TRIGGER_CONTENT_BOX_CLASS, TRIGGER_CLASS } from '../../_tokens'
import type { TriggerProps, TriggerTrigger } from '../../trigger'
import type { CSSProperties, Ref, ComputedRef } from 'vue'
import type { HandleMouse } from '../../_interface'

/**
 * useTrigger 返回值类型接口
 *
 * @param { Object } visible 是否展示主内容
 * @param { Object } styleList 主要内容坐标样式
 * @param { Function } close 关闭触发器
 * @param { Function } onBeforeEnter 在元素被插入到 DOM 之前被调用
 * @param { Function } onAfterLeave 在过度离开完成，移除 DOM 时调用
 */
export interface UseTriggerReturn {
  visible: Ref<boolean>
  styleList: ComputedRef<CSSProperties>
  close: HandleMouse
  onBeforeEnter: (el: Element) => void
  onAfterLeave: (el: Element) => void
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

  /** 主要内容坐标信息 */
  const position = reactive({ x: '', y: '' })

  /** 主要内容坐标样式 */
  const styleList = computed((): CSSProperties => {
    const { spacing, enterDuration, leaveDuration } = prop

    return {
      '--trigger-content-x': position.x,
      '--trigger-content-y': position.y,
      '--trigger-spacing-size': sizeChange(spacing),
      '--trigger-enter-duration': enterDuration && enterDuration + 's',
      '--trigger-leave-duration': leaveDuration && leaveDuration + 's'
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

  /** 是否展示主内容 */
  const visible = ref<boolean>(false)

  /**
   * 记录提示框是否应该显示，而 visible 表示为展示状态
   *
   * 判断触发器展示还是隐藏最核心的控制变量，主要控制内容是否展示，默认不展示
   *
   * 当内容展示的时候，将 contentVisible 设置为 true，表示为应该展示
   *
   * 当鼠标从触发器移入到内容的时候，会触发 close 方法，将其设置为 false，表示需要隐藏了
   *
   * 但是同时，内容移入触发了移入事件，又将其改为 true，表示需要展示
   *
   * 中间使用 setTimeout 函数来延迟改变状态，来处理时间差
   */
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

    const _ = (): void => {
      visible.value = false

      run(prop.onClose, visible.value, evt)
      run(prop.onChange, visible.value, evt)
    }

    if (prop.trigger === 'click') {
      _()
      return
    }

    setTimeout((): void => {
      if (!contentVisible) {
        _()
      }
    }, 300)
  }

  /** 内容部分移入 */
  const contentLave = (): void => {
    contentVisible = true
  }

  /** 添加事件监听器 */
  const addEventListener = (): void => {
    if (node.value) {
      if (prop.trigger === 'hover') {
        node.value.addEventListener('mouseenter', open)
        node.value.addEventListener('mouseleave', close)
      }

      if (prop.trigger === 'click') {
        node.value.addEventListener('click', open)
      }
    }
  }

  // 挂载之后给元素添加事件监听器
  onMounted(addEventListener)

  // 状态改变时重新添加事件监听器
  watch((): TriggerTrigger => prop.trigger, addEventListener)

  /**
   * 文档监听
   *
   * @param { Object } evt 事件对象
   */
  const documentListen = (evt: MouseEvent): void => {
    /** 获取到点击的元素 */
    const element = evt.target as HTMLElement

    /**
     * 点击的部分如果是触发器元素，则不触发关闭
     *
     * @see Element.closest() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest
     */
    if (
      element.closest('.' + TRIGGER_CONTENT_BOX_CLASS) ||
      element.closest('.' + TRIGGER_CLASS)
    ) {
      return
    }

    // 否则关闭触发器
    close(evt)

    // 关闭之后移除事件监听
    window.removeEventListener('click', documentListen, true)
    window.removeEventListener('resize', setPosition)
  }

  /**
   * 在元素被插入到 DOM 之前被调用
   *
   * @see Transition https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks
   * @param { Object } el 元素节点
   */
  const onBeforeEnter = (el: Element): void => {
    if (prop.trigger === 'hover') {
      const node = el as HTMLElement
      node.addEventListener('mouseenter', contentLave)
      node.addEventListener('mouseleave', close)
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

  /**
   * 在过度离开完成，移除 DOM 时调用
   *
   * @param { Object } el 元素节点
   */
  const onAfterLeave = (el: Element): void => {
    if (prop.trigger === 'hover') {
      const node = el as HTMLElement
      node.removeEventListener('mouseenter', contentLave)
      node.removeEventListener('mouseleave', close)
    }
  }

  return {
    visible,
    styleList,
    close,
    onBeforeEnter,
    onAfterLeave
  }
}
