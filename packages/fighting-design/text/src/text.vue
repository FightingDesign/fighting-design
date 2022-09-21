<script lang="ts" setup name="FText">
  import { Props } from './text'
  import { computed } from 'vue'
  import { isString } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { type, block, bold, ellipsis, center } = prop
    return [
      'f-text',
      `f-text-${type}`,
      {
        'f-text-block': block,
        'f-text-bold': bold,
        'f-text-center': center,
        'f-text-ellipsis': ellipsis
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const {
      size,
      color,
      lineHeight,
      spacing,
      textIndent,
      background,
      decoration,
      padding,
      width
    } = prop

    return {
      color,
      background,
      textIndent,
      lineHeight,
      padding,
      fontSize: isString(size) ? size : size + 'px',
      width,
      letterSpacing: spacing,
      textDecoration: decoration
    } as const
  })
</script>

<template>
  <span :class="classList" :style="styleList">
    <slot />
  </span>
</template>
