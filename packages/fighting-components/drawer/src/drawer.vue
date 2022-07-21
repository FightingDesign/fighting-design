<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watchEffect, computed } from 'vue'
  import { FIcon, FMask } from '@fighting-design/fighting-components'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { handleCloseInterface } from './interface'

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

  const handleClose: handleCloseInterface = (): void => {
    emit('update:visible', false)
  }

  watchEffect(() => {
    const { lockScroll, visible } = prop
    if (lockScroll && visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })
</script>

<template>
  <f-mask v-model:visible="visible" @click-modal="handleClose">
    <div :class="['f-drawer', `f-drawer-${direction}`]" :style="drawerStyle">
      <header v-if="withHeader" class="f-drawer-header">
        <span class="f-drawer-title">{{ title }}</span>
        <f-icon icon="f-icon-close" @click.self="handleClose" />
      </header>

      <section class="f-drawer-body">
        <slot />
      </section>
    </div>
  </f-mask>
</template>
