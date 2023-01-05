<script lang="ts" setup name="FSpace">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'space')

  /** 样式列表 */
  const classList = classes(['spacing', 'nowrap', 'vertical'], 'f-space')

  /** 类名列表 */
  const styleList = styles(['rowGap', 'columnGap'])
</script>

<template>
  <div v-if="$slots.default" role="none" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
