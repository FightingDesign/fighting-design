<script lang="ts" setup name="FToolbar">
  import { Props, Emits } from './toolbar'
  import { computed } from 'vue'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'
  import type { handleClickInterface as b } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const classList: ComputedRef<a> = computed((): a => {
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
  })

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

  const handleClick: b = (evt: MouseEvent): void => {
    const node: HTMLElement | undefined = (evt.path as HTMLElement[]).find(
      (item: HTMLElement): boolean => {
        return item.className === 'f-toolbar-item'
      }
    )
    const key: string | undefined = node ? node.dataset.key : ''
    emit('click', { evt, key })
  }
</script>

<template>
  <div :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
