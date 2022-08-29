<script lang="ts" setup name="FLoadingBar">
  import { Props } from './loading-bar'
  import { computed } from 'vue'
  import type { FPropsType } from './loading-bar'
  import type { ComputedRef } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { type } = prop

    return ['f-loading-bar', { [`f-loading-bar-${type}`]: type }] as const
  })
</script>

<template>
  <div :class="classList" />
</template>
