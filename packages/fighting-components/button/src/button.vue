<template>
  <button
    :class="[
      'f-button',
      `f-button-${type}`,
      {
        'f-button-round': round,
        'f-button-block': block,
        'f-button-disabled': disabled || loading,
        'f-button-simple': simple,
        'f-button-text': text,
        'f-button-border': text && border,
        [`f-button-${size}`]: size !== 'middle'
      }
    ]"
    :style="[`box-shadow: ${shadow}`]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :name="name"
    :type="nativeType"
    @click="onClick"
  >
    <span
      :class="['f-text', { 'is-blob': blob }]"
      :style="{ fontSize, color: fontColor }"
    >
      <i v-if="isShowLeftIcon" :class="['f-icon', iconClass]" />
      <slot />
      <i v-if="iconPosition === 'right'" :class="['f-icon', icon]" />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { Props, Emits } from './button'
import type { onClickInterface } from '@fighting-design/fighting-type'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const onClick: onClickInterface = (evt: Event): void => {
  if (prop.disabled || prop.loading) return
  if (prop.link) {
    window.open(prop.link, prop.target)
  }
  emit('click', evt)
}

const iconClass: ComputedRef<string> = computed<string>((): string => {
  if (prop.loading) {
    return `${prop.loadingIcon || 'f-icon-loading'} f-icon--loading`
  }
  return prop.icon
})

const isShowLeftIcon: ComputedRef<boolean> = computed<boolean>((): boolean => {
  return !!(prop.loading || (prop.iconPosition === 'left' && prop.icon))
})
</script>

<script lang="ts">
export default {
  name: 'FButton'
}
</script>
