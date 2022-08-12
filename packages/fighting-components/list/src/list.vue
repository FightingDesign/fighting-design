<script lang="ts" setup name="FList">
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { FPropsType } from './list'

  const props: FPropsType = defineProps(Props)

  provide(listPropsKey, props)

  const listClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { maxHeight, zebra, center, size } = props

      return [
        'f-list',
        `f-list-${size}`,
        {
          'f-list-scroll': maxHeight,
          'f-list-zebra': zebra,
          'f-list-center': center
        }
      ] as const
    }
  )

  const listStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { maxHeight, borderColor, listStyle } = props

    return {
      maxHeight,
      borderColor,
      listStyle
    } as const
  })
</script>

<template>
  <ul :class="listClass" :style="listStyle">
    <!-- <slot name="header" /> -->
    <slot />
    <!-- <slot name="footer" /> -->
  </ul>
</template>
