<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FBox' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'box')

  /** 样式列表 */
  const style = styles(['padding', 'width', 'height', 'background', 'display'])
</script>

<template>
  <div class="f-box" :role="role || 'none'" :style>
    <slot />
  </div>
</template>
