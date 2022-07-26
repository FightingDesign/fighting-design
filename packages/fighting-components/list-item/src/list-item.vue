<script lang="ts" setup name="FListItem">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { computed, inject } from 'vue'
  import { listPropsKey } from '../../list/src/list'

  const injectListProps = inject(listPropsKey)!

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { zebra, size, center, maxHeight, single } = injectListProps

      return [
        'f-list-item',
        `f-list-item-${size}`,
        {
          'f-list-item-zebra': zebra,
          'f-list-item-center': center,
          'f-list-item-single': single,
          'f-list-item-scroll': maxHeight
        }
      ] as const
    }
  )

  const buttonStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { maxHeight, background, borderColor, textColor } = injectListProps

      return {
        maxHeight,
        background,
        borderColor,
        color: textColor
      } as const
    }
  )
</script>

<template>
  <li :class="classList" :style="buttonStyleList">
    <slot name="option" />
    <slot />
  </li>
</template>
