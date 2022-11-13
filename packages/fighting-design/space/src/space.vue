<script lang="ts" setup name="FSpace">
  import { computed } from 'vue'
  import { Props } from './props'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { SpacePropsType } from './props'

  const prop: SpacePropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { wrap, vertical, spacing } = prop

      return [
        'f-space',
        {
          [`f-space__${spacing}`]: spacing,
          'f-space__wrap': wrap,
          'f-space__vertical': vertical
        }
      ] as const
    }
  )

  /**
   * 类名列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { rowGap, columnGap } = prop

    return { rowGap, columnGap } as const
  })
</script>

<template>
  <div v-if="$slots.default" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
