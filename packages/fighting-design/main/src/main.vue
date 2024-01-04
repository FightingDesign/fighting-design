<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FMain' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'main')

  /** 样式列表 */
  const style = styles(['padding'])
</script>

<template>
  <main role="main" class="f-main" :style>
    <slot />
  </main>
</template>
