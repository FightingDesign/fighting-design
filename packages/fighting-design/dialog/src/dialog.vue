<script lang="ts" setup name="FDialog">
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { FPopup } from '../../popup'
  import { toRef } from 'vue'
  import { useVisible } from '../../_hooks'
  import { sizeChange, isBoolean } from '../../_utils'
  import { EMIT_VISIBLE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_VISIBLE]: (visible: boolean): boolean => isBoolean(visible)
  })

  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit)
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :mask-close="maskClose"
    :z-index="zIndex"
    :mask-blur="maskBlur"
    :on-open="onOpen"
    :on-open-end="onOpenEnd"
    :on-close="onClose"
    :on-close-end="onCloseEnd"
  >
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :class="['f-dialog', { 'f-dialog__fullscreen': fullscreen }]"
      :style="{ width: sizeChange(width) }"
    >
      <!-- 头部 -->
      <header class="f-dialog__header">
        <slot name="header">
          <span class="f-dialog__header-title">{{ title }}</span>
          <f-close-btn v-if="showCloseIcon" :icon="closeIcon" :on-click="closeVisible">
            <slot name="closeIcon" />
          </f-close-btn>
        </slot>
      </header>

      <!-- 身体 -->
      <section v-if="$slots.default" class="f-dialog__body">
        <slot />
      </section>

      <!-- 页脚 -->
      <footer v-if="$slots.footer" class="f-dialog__footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-popup>
</template>
