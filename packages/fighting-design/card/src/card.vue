<script lang="ts" setup name="FCard">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ClassListInterface } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * 类名列表
   */
  const classList = computed((): ClassListInterface => {
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

    <div class="f-card__body" :style="{ padding: sizeChange(padding) }">
      <slot />
    </div>
  </div>
</template>
