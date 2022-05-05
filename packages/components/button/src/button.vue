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
import { computed, ComputedRef } from 'vue'
import { prop } from './prop'

const props = defineProps(prop)
// const emit = defineEmits(['click'])
const emit = defineEmits<{
  (e: 'click', evt: Event): void
}>()

const onClick = (evt: Event): void => {
  if (props.disabled || props.loading) return

  if (props.link) {
    window.open(props.link, props.target)
  }

  emit('click', evt)
}

const iconClass: ComputedRef<string> = computed<string>((): string => {
  if (props.loading) {
    return `${props.loadingIcon || 'f-icon-loading'} f-icon--loading`
  }
  return props.icon
})

const isShowLeftIcon: ComputedRef<boolean> = computed<boolean>((): boolean => {
  return !!(props.loading || (props.iconPosition === 'left' && props.icon))
})
</script>

<script lang="ts">
export default {
  name: 'FButton'
}
</script>
