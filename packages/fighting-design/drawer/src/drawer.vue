<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watch, ref } from 'vue'
  import { FIcon } from '../../icon'
  import { FPopup } from '../../popup'
  // import type { CSSProperties, ComputedRef } from 'vue'
  // import type {
  //   HandleEventInterface as a,
  //   OrdinaryFunctionInterface as b
  // } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)

  const closeDrawer = (): void => {
    emit('update:visible', false)
  }

  watch(
    () => isVisible.value,
    (newVal) => {
      if (!newVal) {
        closeDrawer()
      }
    }
  )

  watch(
    () => prop.visible,
    (newVal) => {
      isVisible.value = newVal
    }
  )

  // const drawerStyle: ComputedRef<CSSProperties> = computed(
  //   (): CSSProperties => {
  //     const { direction, size } = prop

  //     if (['left', 'right'].includes(direction)) {
  //       return { width: size } as const
  //     } else if (['top', 'bottom'].includes(direction)) {
  //       return { height: size } as const
  //     }

  //     return { width: size } as const
  //   }
  // )
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
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
  >
    <div :class="['f-drawer', { [`f-drawer-${direction}`]: direction }]">
      <!-- 头部 -->
      <header class="f-drawer-header">
        <slot name="header">
          <span class="f-drawer-header-title">{{ title }}</span>
          <f-icon
            v-if="showCloseIcon"
            :size="21"
            :icon="closeIcon || 'f-icon-close'"
            @click="closeDrawer"
          />
        </slot>
      </header>

      <!-- 身体 -->
      <section v-if="$slots.default" class="f-drawer-body">
        <slot />
      </section>

      <!-- 页脚 -->
      <footer v-if="$slots.footer" class="f-drawer-footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-popup>
</template>
