<script lang="ts" setup name="FLoadingBar">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * 样式列表
   */
  const classList = computed((): ClassList => {
    const { type } = prop

    return ['f-loading-bar', { [`f-loading-bar__${type}`]: type }] as const
  })
</script>

<template>
  <div :class="classList" />
</template>
