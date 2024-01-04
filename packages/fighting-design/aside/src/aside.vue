<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FAside' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'aside')

  /** 样式列表 */
  const style = styles(['width', 'padding', 'background'])
</script>

<template>
  <aside class="f-aside" :style>
    <slot />
  </aside>
</template>
