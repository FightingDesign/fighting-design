<script lang="ts" setup>
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { useTransition } from '../../_hooks'
  import { useVisible, useList } from '../../_hooks'

  defineOptions({ name: 'FDrawer' })

  const prop = defineProps(Props)
  const visible = defineModel<boolean>('visible', {
    default: false,
    type: Boolean
  })

  const { styles, classes } = useList(prop, 'drawer')
  const { closeVisible, maskClose } = useVisible(prop, visible)
  const { handleOpen, handleOpenEnd, handleClose, handleCloseEnd } = useTransition(prop)

  /** 样式列表 */
  const style = styles(
    ['width', 'zIndex', 'maskBackground', 'maskOpacity'],
    ['zIndex', 'maskOpacity']
  )

  /** 类名列表 */
  const classList = classes(['fullscreen', 'maskBlur', 'direction'], 'f-drawer')
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-drawer__trans"
      @before-enter="handleOpen"
      @after-enter="handleOpenEnd"
      @before-leave="handleClose"
      @after-leave="handleCloseEnd"
    >
      <div
        v-show="visible"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        :class="classList"
        :style
      >
        <!-- 遮罩层 -->
        <div v-if="showMask" class="f-drawer__mask" />

        <!-- 主内容 -->
        <div class="f-drawer__wrapper" @click.self="maskClose">
          <transition name="f-drawer__container-trans">
            <div v-show="visible" class="f-drawer__container">
              <!-- 头部 -->
              <header v-if="showHeader" class="f-drawer__header">
                <slot name="header">
                  <span class="f-drawer__header-title">{{ title }}</span>
                  <f-close-btn
                    v-if="showCloseIcon"
                    :icon="closeIcon"
                    :on-click="closeVisible"
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
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
