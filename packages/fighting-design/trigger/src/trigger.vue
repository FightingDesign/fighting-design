<script lang="ts" setup name="FTrigger">
  import { Props, TRIGGER_CLOSE_KEY } from './props'
  import { ref, provide } from 'vue'
  import { useTrigger } from '../../_hooks'

  import type { TriggerProvide } from './interface'

  const prop = defineProps(Props)

  /** 触发器节点元素 */
  const triggerEl = ref<HTMLDivElement | undefined>()

  const {
    visible,
    openEvent,
    closeEvent,
    styleList,
    cardinStyleList,
    onBeforeEnter,
    handelOpen,
    handelClose
  } = useTrigger(prop, triggerEl)

  /**
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvide>(TRIGGER_CLOSE_KEY, {
    handelClose
  })

  /** 向外导出关闭方法 */
  defineExpose({ visible })
</script>

<template>
  <div class="f-trigger" :style="styleList">
    <!-- 触发器 -->
    <div ref="triggerEl" class="f-trigger__trigger" @[openEvent].stop="handelOpen">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <teleport to="body">
      <transition name="f-trigger" @before-enter="onBeforeEnter">
        <div
          v-show="visible"
          :class="['f-trigger__content-box', { 'f-trigger__arrow': arrow }]"
          :style="cardinStyleList"
          @[closeEvent].stop="handelClose"
        >
          <div class="f-trigger__content">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
