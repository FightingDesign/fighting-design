<script lang="ts" setup name="FText">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { TextPropsType } from './props'

  const prop: TextPropsType = defineProps(Props)

  const { classes, styles } = useList(prop, 'text')

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    ['type', 'block', 'bold', 'ellipsis', 'center'],
    'f-text'
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles([
    'color',
    'background',
    'decoration',
    'width',
    'size',
    'padding',
    'spacing',
    'lineHeight',
    'indent'
  ])
</script>

<template>
  <p :class="classList" :style="styleList">
    <slot />
  </p>
</template>
