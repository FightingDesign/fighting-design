<script lang="ts" setup>
  import { Props } from './props'
  import { toRef } from 'vue'
  import { isBoolean } from '../../_utils'
  import { useVisible } from '../../_hooks'
  import { FCloseBtn } from '../../close-btn'
  import { FPopup } from '../../popup'
  import { EMIT_VISIBLE } from '../../_tokens'

  defineOptions({name: 'FDrawer'})

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_VISIBLE]: (visible: boolean): boolean => isBoolean(visible)
  })

  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit)
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :mask-close="maskClose"
    :z-index="zIndex"
    :mask-blur="maskBlur"
    :direction="direction"
    :popup-size="size"
    :on-open="onOpen"
    :on-open-end="onOpenEnd"
    :on-close="onClose"
    :on-close-end="onCloseEnd"
  >
    <div class="f-drawer">
      <!-- 头部 -->
      <header class="f-drawer__header">
        <slot name="header">
          <span class="f-drawer__header-title">{{ title }}</span>
          <f-close-btn v-if="showCloseIcon" :icon="closeIcon" :on-click="closeVisible">
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
  </f-popup>
</template>
