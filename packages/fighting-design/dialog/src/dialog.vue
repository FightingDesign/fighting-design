<script lang="ts" setup>
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { useTransition } from '../../_hooks'
  import { useVisible, useList } from '../../_hooks'

  defineOptions({ name: 'FDialog' })

  const prop = defineProps(Props)
  const visible = defineModel<boolean>('visible', {
    default: false,
    type: Boolean
  })

  const { styles, classes } = useList(prop, 'dialog')
  const { closeVisible, maskClose } = useVisible(prop, visible)
  const { handleOpen, handleOpenEnd, handleClose, handleCloseEnd } = useTransition(prop)

  /** 样式列表 */
  const style = styles(
    ['width', 'zIndex', 'maskBackground', 'maskOpacity'],
    ['maskOpacity', 'zIndex']
  )

  /** 类名列表 */
  const classList = classes(['fullscreen', 'maskBlur'], 'f-dialog')
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-dialog__trans"
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
        <div v-if="showMask" class="f-dialog__mask" />

        <!-- 主内容 -->
        <div class="f-dialog__wrapper" @click.self="maskClose">
          <transition name="f-dialog__container-trans">
            <div v-show="visible" class="f-dialog__container">
              <!-- 头部 -->
              <header v-if="showHeader" class="f-dialog__header">
                <!-- 头部前缀 -->
                <div class="f-dialog__header-before">
                  <slot name="headerBefore" />
                </div>

                <!-- 头部标题 -->
                <div class="f-dialog__header-center">{{ title }}</div>

                <!-- 头部后缀 -->
                <div class="f-dialog__header-after">
                  <slot name="headerAfter">
                    <f-close-btn
                      v-if="showCloseIcon"
                      round
                      color="#3c4043"
                      :size="30"
                      :icon="closeIcon"
                      :on-click="closeVisible"
                    >
                      <slot name="closeIcon" />
                    </f-close-btn>
                  </slot>
                </div>
              </header>

              <!-- 身体 -->
              <section v-if="$slots.default" class="f-dialog__body">
                <slot />
              </section>

              <!-- 页脚 -->
              <footer v-if="$slots.footer" class="f-dialog__footer">
                <slot name="footer" />
              </footer>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
