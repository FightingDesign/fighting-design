<template>
  <button
    :class="[
      'f-button',
      `f-button-${size}`,
      { 'f-button-round': round, 'f-button-block': block }
    ]"
    :style="{ background: color }"
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

const onClick = (): void => {
  if (props.link) {
    window.open(props.link, props.target)
  }
}
</script>

<script lang="ts">
export default {
  name: 'FButton'
}
</script>
