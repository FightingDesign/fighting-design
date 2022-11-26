<script lang="ts" setup name="FTrigger">
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, computed, onMounted, provide, reactive } from 'vue'
  import { sizeChange, runCallback } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { TriggerPropsType, TriggerProvideInterface } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: TriggerPropsType = defineProps(Props)

  /**
   * 是否展示主内容
   */
  const showContent: Ref<boolean> = ref<boolean>(false)

  /**
   * 打开
   */
  const handelOpen: OrdinaryFunctionInterface = (): void => {
    showContent.value = true
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
    document.addEventListener(
      'click',
      (evt: MouseEvent): void => {
        /**
         * 获取点击的孩子节点是否存在 f-trigger 类名的标签
         *
         * @see composedPath https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
         * @see some https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
         */
        const isHaveTrigger: boolean = (
          evt.composedPath() as HTMLElement[]
        ).some((item: HTMLElement): boolean => item.className === 'f-trigger')

        // 如果有，则说明点击是孩子节点，则不需要关闭
        if (isHaveTrigger) return

        // 否则关闭触发器
        handelClose()
      },
      false
    )
  })

  /**
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvideInterface>(
    TRIGGER_CLOSE_KEY,
    reactive({
      handelClose: (): void => {
        showContent.value = false
      }
    } as TriggerProvideInterface)
  )
</script>

<template>
  <div class="f-trigger" :style="styleList" @[closeEvent].stop="handelClose">
    <!-- 触发器 -->
    <div class="f-trigger__trigger" @[openEvent].stop="handelOpen">
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