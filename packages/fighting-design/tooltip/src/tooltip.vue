<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FTooltip' })

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'tooltip')

  /** 类名列表 */
  const classList = classes(
    ['position', 'state', 'disabled', 'bold', 'noArrow', 'bright'],
    'f-tooltip'
  )

  /** 样式列表 */
  const style = styles(['background', 'fontColor'])
</script>

<template>
  <div
    v-if="$slots.default"
    role="tooltip"
    :f-content="content"
    :class="classList"
    :style
  >
    <slot />
  </div>
</template>
