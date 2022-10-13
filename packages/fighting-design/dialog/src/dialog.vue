<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'
  import { FIcon } from '../../icon'
  import { FMask } from '../../mask'
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
  <f-mask
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :modal="modal"
    :modal-close="modalClose"
    :z-index="zIndex"
    :modal-blur="modalBlur"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    <div role="dialog" class="f-dialog" :style="{ width: sizeChange(width) }">
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
  </f-mask>
</template>
