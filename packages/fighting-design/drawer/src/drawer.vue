<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watch, ref } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FPopup } from '../../popup'
  import type { Ref } from 'vue'
  import type { OrdinaryFunctionInterface as a } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)

  const closeDrawer: a = (): void => {
    emit('update:visible', false)
  }

  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      // 监视 isVisible，如果变为假，则关闭
      if (!newVal) {
        closeDrawer()
      }
    }
  )

  watch(
    (): boolean => prop.visible,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :mask-close="maskClose"
    :z-index="zIndex"
    :mask-blur="maskBlur"
    :direction="direction"
    :popup-size="size"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    <div class="f-drawer">
      <!-- 头部 -->
      <header class="f-drawer__header">
        <slot name="header">
          <span class="f-drawer__header-title">{{ title }}</span>
          <f-close-btn
            v-if="showCloseIcon"
            :icon="closeIcon"
            @click="closeDrawer"
          >
            <slot name="closeIcon" />
          </f-close-btn>
        </slot>
      </header>

      <!-- 身体 -->
      <section v-if="$slots.default" class="f-drawer__body">
        <slot />
      </section>

      <!-- 页脚 -->
      <footer v-if="$slots.footer" class="f-drawer__footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-popup>
</template>
