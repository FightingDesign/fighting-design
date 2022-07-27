<script lang="ts" setup name="FList">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'

  const prop = defineProps(Props)

  provide(listPropsKey, prop)

  const listClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { maxHeight, split } = prop

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
    const { maxHeight } = prop

    return {
      maxHeight
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
