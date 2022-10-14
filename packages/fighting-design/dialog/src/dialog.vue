<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'
  import { FIcon } from '../../icon'
  import { FPopup } from '../../popup'
  import { ref, watch } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)

  const closeDialog = (): void => {
    emit('update:visible', false)
  }

  watch(
    () => isVisible.value,
    (newVal) => {
      if (!newVal) {
        closeDialog()
      }
    }
  )

  watch(
    () => prop.visible,
    (newVal) => {
      isVisible.value = newVal
    }
  )
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :popup-close="popupClose"
    :z-index="zIndex"
    :popup-blur="popupBlur"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :class="['f-dialog', { 'f-dialog-fullscreen': fullscreen }]"
      :style="{ width: sizeChange(width) }"
    >
      <!-- 头部 -->
      <header class="f-dialog-header">
        <slot name="header">
          <span class="f-dialog-header-title">{{ title }}</span>
          <f-icon
            v-if="showCloseIcon"
            :size="21"
            :icon="closeIcon || 'f-icon-close'"
            @click="closeDialog"
          />
        </slot>
      </header>

      <!-- 身体 -->
      <section v-if="$slots.default" class="f-dialog-body">
        <slot />
      </section>

      <!-- 页脚 -->
      <footer v-if="$slots.footer" class="f-dialog-footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-popup>
</template>
