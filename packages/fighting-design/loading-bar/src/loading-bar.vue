<script lang="ts" setup name="FLoadingBar">
  import { Props } from './loading-bar'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { type } = prop

    return ['f-loading-bar', { [`f-loading-bar__${type}`]: type }] as const
  })
</script>

<template>
  <div :class="classList" />
</template>
