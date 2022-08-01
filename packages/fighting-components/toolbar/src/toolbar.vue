<script lang="ts" setup name="FToolbar">
  import { Props } from './toolbar'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { size, background, round, fixed } = prop

      return [
        'f-toolbar',
        `f-toolbar-${size}`,
        ...[!background ? 'f-toolbar-default' : ''],
        {
          'f-toolbar-round': round,
          'f-toolbar-fixed': fixed
        }
      ] as const
    }
  )

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { textColor, background, fixed, fixedStyle } = prop

    const style = {
      color: textColor,
      background
    } as const

    if (fixed) {
      return { ...style, ...fixedStyle } as const
    }
    return style
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <slot />
  </div>
</template>
