<script lang="ts" setup name="FDrawer">
  import { Props, Emits } from './drawer'
  import { computed } from 'vue'
  import { FIcon } from '../../icon'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { HandleEventInterface as a } from '../../_interface'
  import type { HandleCloseInterface as b } from './interface'

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

  const handleClose: b = (target: 'mask' | 'icon'): void => {
    if (target === 'mask' && !prop.maskClose) return
    emit('update:visible', false)
  }

  const open: a = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const openEnd: a = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const close: a = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const closeEnd: a = (evt: MouseEvent): void => {
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
      <!-- 遮罩层 -->
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
        @click.self="handleClose('mask')"
      >
        <!-- 抽屉 -->
        <div
          :class="['f-drawer', { [`f-drawer-${direction}`]: direction }]"
          :style="drawerStyle"
        >
          <!-- 头部 -->
          <header v-if="showHeader" class="f-drawer-header">
            <slot name="title">
              <div class="f-drawer-header-default">
                <span class="f-drawer-title">{{ title }}</span>
                <f-icon
                  v-if="showCloseBtn"
                  icon="f-icon-close"
                  @click.self="handleClose('icon')"
                />
              </div>
            </slot>
          </header>

          <!-- 内容 -->
          <section class="f-drawer-body">
            <slot />
          </section>

          <!-- 页脚 -->
          <footer v-if="showFooter" class="f-drawer-footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </transition>
  </teleport>
</template>
