<script lang="ts" setup name="FListItem">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { computed, inject } from 'vue'
  import { listPropsKey, Props } from '../../list/src/list'

  const injectListProps = inject(listPropsKey)!
  const prop = defineProps(Props)

  const listItemClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { zebra, size, center, single, hoverShow, split } = injectListProps
      const { maxHeight } = prop

      return [
        'f-list-item',
        `f-list-item-${size}`,
        {
          'f-list-item-zebra': zebra,
          'f-list-item-center': center,
          'f-list-item-single': single,
          'f-list-item-scroll': maxHeight,
          'f-list-item-hover': hoverShow,
          'f-list-item-base-border': !split
        }
      ] as const
    }
  )

  const listItemStyle: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, borderColor, textColor, split } = injectListProps
      const { maxHeight } = prop

      return {
        maxHeight,
        background,
        borderColor: !split && borderColor,
        color: textColor
      } as const
    }
  )
</script>

<template>
  <li :class="listItemClass" :style="listItemStyle">
    <slot name="option" />
    <slot />
  </li>
</template>
