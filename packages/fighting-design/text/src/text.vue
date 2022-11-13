<script lang="ts" setup name="FText">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { TextPropsType } from './props'

  const prop: TextPropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
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
    }
  )

  /**
   * 样式列表
   */
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
    } as CSSProperties
  })
</script>

<template>
  <p :class="classList" :style="styleList">
    <slot />
  </p>
</template>
