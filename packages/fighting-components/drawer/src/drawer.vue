<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { watchEffect, computed } from 'vue'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type {
    transitionEventInterface,
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
    // if (prop.beforeClose) {
    //   prop.beforeClose()
    // } else {
    emit('update:visible', false)
    // }
  }

  watchEffect(() => {
    const { lockScroll, visible } = prop
    if (lockScroll && visible) {
      // TODO 优化点可以参考element-plus对于禁止body滚动的方案
      // 源码地址: https://github.com/element-plus/element-plus/blob/dev/packages/hooks/use-lockscreen/index.ts
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
      name="drawer"
      :duration="400"
      @before-enter="open"
      @after-enter="openEnd"
      @before-leave="close"
      @after-leave="closeEnd"
    >
      <div v-show="visible" class="f__drawer__wrapper" :style="{ zIndex }">
        <div class="f__drawer__container">
          <div
            :class="[{ f__drawer__cover__open: modal }, 'f__drawer__cover']"
            @click.self="handleClose"
          />
          <div :class="['f__drawer', direction]" :style="drawerStyle">
            <header v-if="withHeader" class="f__drawer__title">
              <span>{{ title }}</span>
              <i
                class="f-icon f-icon-close f__drawer__title__close"
                @click.self="handleClose"
              />
            </header>
            <section class="f__drawer__body">
              <slot />
            </section>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
