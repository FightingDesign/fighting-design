<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'
  import { FIcon } from '../../icon'
  import { FMask } from '../../mask'
  import { ref, watch } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isVisible = ref(prop.visible)

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
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    <div role="dialog" class="f-dialog">
      <!-- 头部 -->
      <header class="f-dialog-header">
        <slot name="header">
          <span class="f-dialog-header-title">{{ title }}</span>
          <f-icon
            v-if="showCloseIcon"
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
