<script lang="ts" setup name="FCard">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { CardPropsType } from './props'

  const prop: CardPropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { round, shadow } = prop

      return [
        'f-card',
        {
          'f-card__round': round,
          [`f-card__shadow-${shadow}`]: shadow
        }
      ] as const
    }
  )
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
