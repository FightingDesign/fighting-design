<script lang="ts" setup>
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { useRun } from '../../_hooks'
  import { toRef } from 'vue'
  import { useVisible, useList } from '../../_hooks'
  import { EMIT_VISIBLE } from '../../_tokens'

  defineOptions({ name: 'FDialog' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_VISIBLE])

  const { run } = useRun()
  const { styles, classes } = useList(prop, 'dialog')
  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit)

  /** 样式列表 */
  const styleList = styles(['width'])

  /** 类名列表 */
  const classList = classes(['fullscreen', 'maskBlur'], 'f-dialog')

  /**
   * 打开动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpen = (node: Element): void => {
    /** 开启状态隐藏滚动条 */
    document.body.style.overflow = 'hidden'
    run(prop.onOpen, node)
  }

  /**
   * 打开动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleOpenEnd = (node: Element): void => {
    run(prop.onOpenEnd, node)
  }

  /**
   * 关闭动画开始执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleClose = (node: Element): void => {
    document.body.style.overflow = ''
    run(prop.onClose, node)
  }

  /**
   * 关闭动画结束执行的回调
   *
   * @param { Object } node 元素节点
   */
  const handleCloseEnd = (node: Element): void => {
    run(prop.onCloseEnd, node)
  }

  /** 点击遮罩层关闭 */
  const closePopup = (): void => {
    if (!prop.maskClose) return
    emit(EMIT_VISIBLE, false)
  }
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
        v-show="isVisible"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        :class="classList"
        :style="styleList"
      >
        <!-- 遮罩层 -->
        <div v-if="showMask" class="f-dialog__mask" />

        <!-- 主内容 -->
        <div class="f-dialog__wrapper" @click.self="closePopup">
          <transition name="f-dialog__container-trans">
            <div v-show="isVisible" class="f-dialog__container">
              <!-- 头部 -->
              <header class="f-dialog__header">
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
