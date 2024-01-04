<script lang="ts" setup>
  import { Props } from './props'
  import { useList, useGlobal } from '../../_hooks'

  defineOptions({ name: 'FText' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)
  const { classes, styles } = useList(getProp(['type']), 'text')

  /** 类名列表 */
  const classList = classes(['type', 'block', 'bold', 'ellipsis', 'center'], 'f-text')

  /** 样式列表 */
  const style = styles([
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
  <p :class="classList" :style>
    <slot />
  </p>
</template>
