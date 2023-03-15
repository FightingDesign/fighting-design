<script lang="ts" setup name="FTrigger">
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, computed, provide } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useRun } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { TriggerProvide } from './interface'

  const prop = defineProps(Props)

  const { run } = useRun()

  /** 是否展示主内容 */
  const showContent = ref<boolean>(false)

  /** 打开 */
  const handelOpen = (): void => {
    if (prop.disabled) return
    showContent.value = true
    run(prop.onOpen, showContent.value)
    run(prop.onChange, showContent.value)
  }

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
  const closeEvent = computed((): 'mouseleave' | '' => {
    return prop.trigger === 'hover' ? 'mouseleave' : ''
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
    document.removeEventListener('click', documentListen)
  }

  /**
   * 弹窗打开
   *
   * 给 document 添加事件监听用于关闭触发器
   */
  const onBeforeEnter = (): void => {
    document.addEventListener('click', documentListen)
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
  <div class="f-trigger" :style="styleList" @[closeEvent].stop="handelClose">
    <!-- 触发器 -->
    <div class="f-trigger__trigger" @[openEvent].stop="handelOpen">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-trigger" @before-enter="onBeforeEnter">
      <div
        v-show="showContent"
        :class="['f-trigger__content-box', { 'f-trigger__arrow': arrow }]"
      >
        <div class="f-trigger__content">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
