<script lang="ts" setup name="FText">
  import { Props } from './text'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { type, block, bold, ellipsis, center } = prop

    return [
      'f-text',
      {
        [`f-text__${type}`]: type,
        'f-text__block': block,
        'f-text__bold': bold,
        'f-text__center': center,
        'f-text__ellipsis': ellipsis
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    return {
      '--f-text-color': prop.color,
      '--f-text-background': prop.background,
      '--f-text-text-decoration': prop.decoration,
      '--f-text-width': sizeChange(prop.width),
      '--f-text-font-size': sizeChange(prop.size),
      '--f-text-padding': sizeChange(prop.padding),
      '--f-text-letter-spacing': sizeChange(prop.spacing),
      '--f-text-line-height': sizeChange(prop.lineHeight),
      '--f-text-text-indent': sizeChange(prop.indent)
    } as const
  })
</script>

<template>
  <p :class="classList" :style="styleList">
    <slot />
  </p>
</template>
