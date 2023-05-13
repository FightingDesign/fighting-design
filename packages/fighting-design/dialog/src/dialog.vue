<script lang="ts" setup>
  import { Props } from './props'
  import { FCloseBtn } from '../../close-btn'
  import { FPopup } from '../../popup'
  import { toRef } from 'vue'
  import { useVisible, useList } from '../../_hooks'
  import { isBoolean } from '../../_utils'
  import { EMIT_VISIBLE } from '../../_tokens'

  defineOptions({name: 'FDialog'})

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_VISIBLE]: (visible: boolean): boolean => isBoolean(visible)
  })

  const { styles, classes } = useList(prop, 'dialog')
  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit)

  /** 样式列表 */
  const styleList = styles(['width', 'height'])

  /** 类名列表 */
  const classList = classes(['fullscreen'], 'f-dialog')
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :mask-close="maskClose"
    :z-index="zIndex"
    :mask-blur="maskBlur"
    :fullscreen="fullscreen"
    :on-open="onOpen"
    :on-open-end="onOpenEnd"
    :on-close="onClose"
    :on-close-end="onCloseEnd"
  >
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :class="classList"
      :style="styleList"
    >
      <!-- 头部 -->
      <header class="f-dialog__header">
        <!-- 头部前缀 -->
        <div class="f-dialog__header-before">
          <slot name="headerBefore" />
        </div>

        <!-- 头部标题 -->
        <h2 class="f-dialog__header-center">{{ title }}</h2>

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
      <div v-if="$slots.default" class="f-dialog__body">
        <section class="f-dialog__section">
          <slot />
        </section>

        <!-- 页脚 -->
        <footer v-if="$slots.footer" class="f-dialog__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </f-popup>
</template>
