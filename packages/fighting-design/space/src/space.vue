<script lang="ts" setup name="FSpace">
  import { computed } from 'vue'
  import { Props } from './space'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const spaceClassList: ComputedRef<a> = computed((): a => {
    const { wrap, vertical, spacing } = prop

    return [
      'f-space',
      {
        [`f-space__${spacing}`]: spacing,
        'f-space__wrap': wrap,
        'f-space__vertical': vertical
      }
    ] as const
  })

  const spaceStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { rowGap, columnGap } = prop

      return { rowGap, columnGap } as const
    }
  )
</script>

<template>
  <div v-if="$slots.default" :class="spaceClassList" :style="spaceStyleList">
    <slot />
  </div>
</template>
