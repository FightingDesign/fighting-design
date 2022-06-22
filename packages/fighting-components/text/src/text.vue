<template>
  <span :class="classList" :style="styleList">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup name="FText">
import { Props } from './text'
import { computed } from 'vue'

const prop = defineProps(Props)

const classList = computed(() => {
  const { type, block, bold } = prop
  return [
    'f-text',
    {
      [`f-text-${type}`]: type,
      'f-text-block': block,
      'f-text-bold': bold
    }
  ]
})

const styleList = computed(() => {
  const { size, color, lineHeight, spacing, textIndent, background, decoration, padding } = prop
  const style = {
    fontSize: size,
    color,
    lineHeight,
    letterSpacing: spacing,
    textIndent: textIndent,
    backgroundColor: background || '#FFF',
    textDecoration: decoration,
    padding
  }
  return style
})
</script>
