<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FSpace' })

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'space')

  /** 样式列表 */
  const classList = classes(['spacing', 'nowrap', 'vertical'], 'f-space')

  /** 类名列表 */
  const style = styles(['rowGap', 'columnGap'])
</script>

<template>
  <div v-if="$slots.default" role="none" :class="classList" :style>
    <slot />
  </div>
</template>
