<script lang="ts" setup>
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { useTransition } from '../../_hooks'
  import { toRef } from 'vue'
  import { useVisible, useList } from '../../_hooks'
  import { EMIT_VISIBLE } from '../../_tokens'

  defineOptions({ name: 'FDrawer' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_VISIBLE])

  const { styles, classes } = useList(prop, 'drawer')
  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit)
  const { handleOpen, handleOpenEnd, handleClose, handleCloseEnd } = useTransition(prop)

  /** 样式列表 */
  const styleList = styles(['width'])

  /** 类名列表 */
  const classList = classes(['fullscreen', 'maskBlur', 'direction'], 'f-drawer')

  /** 点击遮罩层关闭 */
  const closePopup = (): void => {
    if (!prop.maskClose) return
    emit(EMIT_VISIBLE, false)
  }
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
        v-show="isVisible"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        :class="classList"
        :style="styleList"
      >
        <!-- 遮罩层 -->
        <div v-if="showMask" class="f-drawer__mask" />

        <!-- 主内容 -->
        <div class="f-drawer__wrapper" @click.self="closePopup">
          <transition name="f-drawer__container-trans">
            <div v-show="isVisible" class="f-drawer__container">
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
