<script lang="ts" setup name="FText">
  import { Props } from './text'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { type, block, bold } = prop

      return [
        'f-text',
        {
          [`f-text-${type}`]: type,
          'f-text-block': block,
          'f-text-bold': bold
        }
      ]
    }
  )

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const {
      size,
      color,
      lineHeight,
      spacing,
      textIndent,
      background,
      decoration,
      padding
    } = prop

    return {
      color,
      background,
      textIndent,
      lineHeight,
      padding,
      fontSize: size,
      letterSpacing: spacing,
      textDecoration: decoration
    }
  })
</script>

<template>
  <span :class="classList" :style="styleList">
    <slot />
  </span>
</template>
