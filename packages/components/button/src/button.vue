<template>
  <button
    :class="[
      'f-button',
      `f-button-${type}`,
      {
        'f-button-round': round,
        'f-button-block': block,
        'f-button-disabled': disabled,
        [`f-button-${size}`]: size !== 'middle'
      }
    ]"
    :style="[
      `box-shadow: ${shadow}`,
      {
        background: linearGradient
          ? `linear-gradient(to right, ${linearGradient})`
          : color
      }
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :name="name"
    :type="nativeType"
    @click="onClick"
  >
    <span
      :class="['f-text', { 'is-blob': blob }]"
      :style="{ fontSize, color: fontColor }"
    >
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { prop } from './prop'

const props = defineProps(prop)
const emit = defineEmits(['click'])

const onClick = (evt: Event): void => {
  if (props.disabled || props.loading) return

  if (props.link) {
    window.open(props.link, props.target)
  }

  emit('click', evt)
}
</script>

<script lang="ts">
export default {
  name: 'FButton'
}
</script>
