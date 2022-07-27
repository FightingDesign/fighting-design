<script lang="ts" setup name="FList">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'

  const props = defineProps(Props)

  provide(listPropsKey, props)

  const listClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { maxHeight, split } = props

      return [
        'f-list',
        {
          'f-list-scroll': maxHeight,
          'f-list-split': split
        }
      ] as const
    }
  )

  const listStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { maxHeight, borderColor } = props

    return {
      maxHeight,
      borderColor
    } as const
  })
</script>

<template>
  <ul :class="listClass" :style="listStyle">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </ul>
</template>
