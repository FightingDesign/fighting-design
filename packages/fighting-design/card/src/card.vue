<script lang="ts" setup name="FCard">
  import { Props } from './card'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { classListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { round, shadow } = prop

    return [
      'f-card',
      {
        'f-card-round': round,
        [`f-card-shadow-${shadow}`]: shadow
      }
    ] as const
  })
</script>

<template>
  <div :class="classList">
    <div v-if="$slots.header || title" class="f-card-header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="f-card-body" :style="{ padding }">
      <slot />
    </div>
  </div>
</template>
