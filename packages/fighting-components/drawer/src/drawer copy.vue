<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watchEffect, computed } from 'vue'
  import { FIcon } from '@fighting-design/fighting-components'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type {
    handleCloseInterface
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

  const open: transitionEventInterface = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const openEnd: transitionEventInterface = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const close: transitionEventInterface = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const closeEnd: transitionEventInterface = (evt: MouseEvent): void => {
    emit('close-end', evt)
  }
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-drawer"
      :duration="400"
      @before-enter="open"
      @after-enter="openEnd"
      @before-leave="close"
      @after-leave="closeEnd"
    >
      <div
        v-show="visible"
        :class="[
          'f-drawer-mask',
          'f-drawer-cover',
          {
            'f-drawer-mask-modal': modal
          }
        ]"
        :style="{ zIndex }"
        @click.self="handleClose"
      >
        <div
          :class="['f-drawer', `f-drawer-${direction}`]"
          :style="drawerStyle"
        >
          <header v-if="withHeader" class="f-drawer-header">
            <span class="f-drawer-title">{{ title }}</span>
            <f-icon icon="f-icon-close" @click.self="handleClose" />
          </header>

          <section class="f-drawer-body">
            <slot />
          </section>
        </div>
      </div>
    </transition>
  </teleport>
</template>
