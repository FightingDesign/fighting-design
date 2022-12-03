<script lang="ts" setup class="FMain">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'main')

  /**
   * 样式列表
   */
  const styleList = styles(['padding'])
</script>

<template>
  <main role="main" class="f-main" :style="styleList">
    <slot />
  </main>
</template>
