<script lang="ts" setup name="FDrawer">
  import { FIcon } from '@fighting-design/fighting-components/icon'
  import { Props, Emits } from './drawer'
  import { watchEffect, computed } from 'vue'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const drawerStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { direction, size } = prop

      if (['left', 'right'].includes(direction)) {
        return { width: size }
      } else if (['top', 'bottom'].includes(direction)) {
        return { height: size }
      }

      return { width: size }
    }
  )

  const handleClose = () => {
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
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition name="drawer" :duration="400">
      <div v-show="visible" class="f__drawer__wrapper">
        <div class="f__drawer__container">
          <div
            :class="[{ f__drawer__cover__open: modal }, 'f__drawer__cover']"
            @click.self="handleClose"
          />
          <div :class="['f__drawer', direction]" :style="drawerStyle">
            <header v-if="withHeader" class="f__drawer__title">
              <span>{{ title }}</span>
              <f-icon
                size="30px"
                icon="f-icon-close"
                class="f__drawer__title__close"
                @click="handleClose"
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
