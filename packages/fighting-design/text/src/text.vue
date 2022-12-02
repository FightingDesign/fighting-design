<script lang="ts" setup name="FText">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'text')

  /**
   * 类名列表
   */
  const classList = classes(
    ['type', 'block', 'bold', 'ellipsis', 'center'],
    'f-text'
  )

  /**
   * 样式列表
   */
  const styleList = styles([
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
