<script lang="ts" setup>
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, provide } from 'vue'
  import { useTrigger, useList } from '../../_hooks'
  import { TRIGGER_CONTENT_BOX_CLASS, TRIGGER_CLASS } from '../../_tokens'
  import type { TriggerProvide } from './interface'

  defineOptions({name: 'FTrigger'})

  const prop = defineProps(Props)

  /** 触发器节点元素 */
  const triggerEl = ref<HTMLDivElement | undefined>()

  const { classes } = useList(prop, 'trigger')
  const { visible, styleList, close, onBeforeEnter, onAfterLeave } = useTrigger(
    prop,
    triggerEl
  )

  /** 类名列表 */
  const classList = classes(['arrow'], TRIGGER_CONTENT_BOX_CLASS)

  /**
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvide>(TRIGGER_CLOSE_KEY, { close })

  /** 向外导出关闭方法 */
  defineExpose({ close })
</script>

<template>
  <div :class="TRIGGER_CLASS">
    <!-- 触发器 -->
    <div ref="triggerEl" class="f-trigger__trigger">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <teleport to="body">
      <transition
        name="f-trigger"
        @before-enter="onBeforeEnter"
        @after-leave="onAfterLeave"
      >
        <div v-show="visible" :class="classList" :style="styleList">
          <div class="f-trigger__content">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
