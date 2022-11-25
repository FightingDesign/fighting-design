<script lang="ts" setup name="FTrigger">
  import { Props } from './props'
  import { ref, computed, onMounted } from 'vue'
  import { sizeChange, runCallback } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { TriggerPropsType } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: TriggerPropsType = defineProps(Props)

  /**
   * 是否展示主内容
   */
  const showContent: Ref<boolean> = ref<boolean>(true)

  /**
   * 打开
   */
  const handelOpen: OrdinaryFunctionInterface = (): void => {
    if (prop.trigger === 'hover') {
      showContent.value = true
    }

    if (prop.trigger === 'click') {
      showContent.value = !showContent.value
    }

    runCallback(prop.onOpen, showContent.value)
    runCallback(prop.onChange, showContent.value)
  }

  /**
   * 关闭
   */
  const handelClose: OrdinaryFunctionInterface = (): void => {
    showContent.value = false
    runCallback(prop.onClose, showContent.value)
    runCallback(prop.onChange, showContent.value)
  }

  /**
   * 打开事件
   */
  const openEvent: ComputedRef<'mouseover' | 'click'> = computed(
    (): 'mouseover' | 'click' => {
      return prop.trigger === 'hover' ? 'mouseover' : 'click'
    }
  )

  /**
   * 关闭事件
   */
  const closeEvent: ComputedRef<'mouseleave' | ''> = computed(
    (): 'mouseleave' | '' => {
      return prop.trigger === 'hover' ? 'mouseleave' : ''
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { spacing, enterDuration, leaveDuration } = prop

    return {
      '--f-trigger-spacing-size': sizeChange(spacing),
      '--f-trigger-enter-duration': enterDuration && enterDuration + 's',
      '--f-trigger-leave-duration': leaveDuration && leaveDuration + 's'
    } as CSSProperties
  })

  onMounted((): void => {
    /**
     * 给 document 注册点击事件，如果点击的是其它地方则隐藏
     */
    document.addEventListener('click', (): void => {
      if (prop.trigger === 'click' && showContent.value) {
        handelClose()
      }
    })
  })
</script>

<template>
  <div
    class="f-trigger"
    :style="styleList"
    @[openEvent].stop="handelOpen"
    @[closeEvent].stop="handelClose"
  >
    <!-- 触发器 -->
    <div class="f-trigger__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <transition name="f-trigger">
      <div
        v-show="showContent"
        :class="['f-trigger__content-box', { 'f-trigger__arrow': arrow }]"
      >
        <div :class="['f-trigger__content']">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
