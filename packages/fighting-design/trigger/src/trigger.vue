<script lang="ts" setup>
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, provide } from 'vue'
  import { useTrigger, useList } from '../../_hooks'
  import { TRIGGER_CONTENT_BOX_CLASS, TRIGGER_CLASS } from '../../_tokens'
  import type { TriggerProvide } from './interface'

  defineOptions({ name: 'FTrigger' })

  const prop = defineProps(Props)

  /** 触发器节点元素 */
  const triggerRef = ref<HTMLDivElement | undefined>()

  const { classes, styles } = useList(prop, 'trigger')
  const { visible, styleList, close, onBeforeEnter, onAfterLeave } = useTrigger(
    prop,
    triggerRef
  )

  /** 类名列表 */
  const classList = classes(['arrow'], TRIGGER_CONTENT_BOX_CLASS)

  /** 样式列表 */
  const widthStyle = styles(['width'])

  /**
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvide>(TRIGGER_CLOSE_KEY, { close })

  // 向外导出关闭方法
  defineExpose({ close })
</script>

<template>
  <div :class="TRIGGER_CLASS">
    <!-- 触发器 -->
    <div ref="triggerRef" class="f-trigger__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <teleport to="body">
      <transition
        name="f-trigger"
        @before-enter="onBeforeEnter"
        @after-leave="onAfterLeave"
      >
        <div v-show="visible" :class="classList" :style="[styleList, widthStyle]">
          <div class="f-trigger__content">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
