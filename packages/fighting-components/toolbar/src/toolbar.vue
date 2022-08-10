<script lang="ts" setup name="FToolbar">
  import { Props } from './toolbar'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { FPropsType } from './toolbar'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { size, round, fixed, vague } = prop

      return [
        'f-toolbar',
        `f-toolbar-${size}`,
        {
          'f-toolbar-round': round,
          'f-toolbar-fixed': fixed,
          'f-toolbar-vague': vague
        }
      ] as const
    }
  )

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { textColor, background, fixed, fixedStyle, width, height } = prop

    const style = {
      color: textColor,
      background,
      width,
      height
    } as const

    if (fixed && fixedStyle) {
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
