<script lang="ts" setup name="FTrigger">
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, computed, provide, reactive, onMounted, onUnmounted } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useRun } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { TriggerProvide } from './interface'

  const prop = defineProps(Props)

  const { run } = useRun()

  /** 是否展示主内容 */
  const showContent = ref<boolean>(false)

  /** 触发器节点元素 */
  const triggerEl = ref<HTMLDivElement>()

  /** 主要内容坐标信息 */
  const position = reactive({ x: '', y: '' })

  /** 主要内容坐标样式 */
  const cardinStyleList = computed((): CSSProperties => {
    return {
      '--trigger-content-x': position.x,
      '--trigger-content-y': position.y
    }
  })

  const setPosition = (): void => {
    /** 获取到元素节点 */
    const element: HTMLDivElement | undefined = triggerEl.value

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

  /** 打开触发器 */
  const handelOpen = (): void => {
    if (prop.disabled) return

    setPosition()

    showContent.value = true
    run(prop.onOpen, showContent.value)
    run(prop.onChange, showContent.value)
  }

  /**
   * 当浏览器比例缩放发生变化的时候，重写位置信息
   *
   * @see resize https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event
   */
  onMounted((): void => {
    window.addEventListener('resize', setPosition)
  })

  /** 卸载之后移除事件  */
  onUnmounted((): void => {
    window.removeEventListener('resize', setPosition)
  })

  /** 关闭 */
  const handelClose = (): void => {
    showContent.value = false
    run(prop.onClose, showContent.value)
    run(prop.onChange, showContent.value)
  }

  /** 打开事件 */
  const openEvent = computed((): 'mouseover' | 'click' => {
    return prop.trigger === 'hover' ? 'mouseover' : 'click'
  })

  /** 关闭事件 */
  // const closeEvent = computed((): 'mouseleave' | '' => {
  //   return prop.trigger === 'hover' ? 'mouseleave' : ''
  // })

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
    /**
     * 获取点击的孩子节点是否存在 f-trigger 类名的标签
     *
     * @see Event.composedPath() https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
     * @see Array.prototype.some() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     */
    const isHaveTrigger: boolean = (evt.composedPath() as HTMLElement[]).some(
      (item: HTMLElement): boolean => item.className === 'f-trigger'
    )

    /** 如果有，则说明点击是孩子节点，则不需要关闭 */
    if (isHaveTrigger) return

    /** 否则关闭触发器 */
    handelClose()

    /** 关闭之后移除事件监听 */
    window.removeEventListener('click', documentListen)
  }

  /**
   * 在元素被插入到 DOM 之前被调用
   *
   * @see Transition https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks
   */
  const onBeforeEnter = (): void => {
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
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvide>(TRIGGER_CLOSE_KEY, {
    handelClose: (): void => {
      showContent.value = false
    }
  })

  defineExpose({ handelClose })
</script>

<template>
  <!-- <div class="f-trigger" :style="styleList" @[closeEvent].stop="handelClose"> -->
  <div class="f-trigger" :style="styleList">
    <!-- 触发器 -->
    <div ref="triggerEl" class="f-trigger__trigger" @[openEvent].stop="handelOpen">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <teleport to="body">
      <transition name="f-trigger" @before-enter="onBeforeEnter">
        <div
          v-show="showContent"
          :class="['f-trigger__content-box', { 'f-trigger__arrow': arrow }]"
          :style="cardinStyleList"
        >
          <div class="f-trigger__content">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
