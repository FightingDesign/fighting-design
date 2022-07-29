<script lang="ts" setup name="FSpace">
  import { computed } from 'vue'
  import { Props } from './space'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const spaceClassList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { wrap, vertical, spacing } = prop

      return [
        'f-space',
        `f-space-${spacing}`,
        {
          'f-space-wrap': wrap,
          'f-space-vertical': vertical
        }
      ] as const
    }
  )

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
