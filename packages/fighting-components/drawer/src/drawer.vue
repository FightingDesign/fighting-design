<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watchEffect, computed } from 'vue'
  import { FIcon, FMask } from '@fighting-design/fighting-components'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type {
    handleCloseInterface as a,
    transitionEventInterface as b
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const drawerStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { direction, size } = prop

      if (['left', 'right'].includes(direction)) {
        return { width: size } as const
      } else if (['top', 'bottom'].includes(direction)) {
        return { height: size } as const
      }

      return { width: size } as const
    }
  )

  const handleClose: a = (): void => {
    emit('update:visible', false)
  }

  const open: b = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const openEnd: b = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const close: b = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const closeEnd: b = (evt: MouseEvent): void => {
    emit('close-end', evt)
  }

  watchEffect((): void => {
    const { lockScroll, visible } = prop
    if (lockScroll && visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })
</script>

<template>
  <f-mask
    v-model:visible="visible"
    :append-to-body="appendToBody"
    :z-index="zIndex"
    @open="open"
    @open-end="openEnd"
    @close="close"
    @close-end="closeEnd"
    @click-modal="handleClose"
  >
    <div :class="['f-drawer', `f-drawer-${direction}`]" :style="drawerStyle">
      <header v-if="withHeader" class="f-drawer-header">
        <span class="f-drawer-title">{{ title }}</span>
        <f-icon icon="f-icon-close" @click.self="handleClose" />
      </header>

      <section v-if="$slots.default" class="f-drawer-body">
        <slot />
      </section>

      <footer v-if="$slots.footer" class="f-drawer-footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-mask>
</template>
