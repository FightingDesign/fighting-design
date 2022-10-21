<script lang="ts" setup name="FCard">
  import { Props } from './card'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const classList: ComputedRef<a> = computed((): a => {
    const { round, shadow } = prop

    return [
      'f-card',
      {
        'f-card__round': round,
        [`f-card__shadow-${shadow}`]: shadow
      }
    ] as const
  })
</script>

<template>
  <div :class="classList">
    <div v-if="$slots.header || title" class="f-card__header">
      <slot name="header">{{ title }}</slot>
    </div>

    <div class="f-card__body" :style="{ padding }">
      <slot />
    </div>
  </div>
</template>
