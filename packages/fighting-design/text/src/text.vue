<script lang="ts" setup name="FText">
  import { Props } from './props'
  import { reactive } from 'vue'
  import { useList, useGlobal } from '../../_hooks'

  const prop = defineProps(Props)

  const { getType } = useGlobal(prop)

  /** 替换 type 后得到的 props */
  const params = reactive({
    ...prop,
    type: getType()
  })

  const { classes, styles } = useList(params, 'text')

  /** 类名列表 */
  const classList = classes(['type', 'block', 'bold', 'ellipsis', 'center'], 'f-text')

  /** 样式列表 */
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
