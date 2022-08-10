<script lang="ts" setup name="FText">
  import { Props } from './text'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { FPropsType } from './text'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
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
      padding,
      width
    } = prop

    return {
      color,
      background,
      textIndent,
      lineHeight,
      padding,
      fontSize: size,
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
