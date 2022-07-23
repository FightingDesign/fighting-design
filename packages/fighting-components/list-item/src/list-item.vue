<script lang="ts" setup name="FListItem">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { computed, inject } from 'vue'
  import { Props, Emits } from './list-item'

  defineProps(Props)
  defineEmits(Emits)

  const injectListProps = inject('list-style')

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { zebra, size, center, maxHeight, single } = injectListProps

      return [
        'f-list-item',
        `f-list-item-${size}`,
        {
          zebra,
          center,
          single,
          scroll: maxHeight
        }
      ]
    }
  )

  const buttonStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { maxHeight, background, borderColor, textColor } = injectListProps

      return {
        maxHeight: maxHeight || '',
        backgroundColor: background || '',
        borderColor: borderColor || '',
        color: textColor || ''
      } as const
    }
  )
</script>

<template>
  <li :class="classList" :style="{ ...buttonStyleList }">
    <slot name="option" />
    <slot />
  </li>
</template>
