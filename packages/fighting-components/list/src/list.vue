<script lang="ts" setup name="FList">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { provide, computed } from 'vue'
  import { Props, listPropsKey } from './list'
  import type { FPropsType } from './list'

  const props: FPropsType = defineProps(Props)

  provide(listPropsKey, props)

  const listClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { maxHeight, split, showNum, showDisc } = props

      return [
        'f-list',
        {
          'f-list-scroll': maxHeight,
          'f-list-split': split,
          'f-list-show-number': !showDisc && showNum,
          'f-list-show-disc': !showNum && showDisc
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
  <ol :class="listClass" :style="listStyle">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </ol>
</template>
