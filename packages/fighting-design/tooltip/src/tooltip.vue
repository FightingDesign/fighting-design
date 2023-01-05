<script lang="ts" setup name="FTooltip">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'tooltip')

  /** 类名列表 */
  const classList = classes(['position', 'state', 'disabled', 'bold', 'noArrow', 'bright'], 'f-tooltip')

  /** 样式列表 */
  const styleList = styles(['background', 'fontColor'])
</script>

<template>
  <div v-if="$slots.default" :f-content="content" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
