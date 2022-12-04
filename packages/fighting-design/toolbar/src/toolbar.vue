<script lang="ts" setup name="FToolbar">
  import { Props } from './props'
  import { computed, useSlots } from 'vue'
  import { runCallback } from '../../_utils'
  import type { CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ToolbarClickParamsInterface } from './interface'

  const prop = defineProps(Props)
  const slot = useSlots()

  /**
   * 类名列表
   */
  const classList = computed((): ClassListInterface => {
    const { size, round, fixed } = prop

    return [
      'f-toolbar',
      {
        [`f-toolbar__${size}`]: size,
        'f-toolbar__round': round,
        'f-toolbar__fixed': fixed
      }
    ] as const
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { textColor, background, width, height } = prop

    return {
      color: textColor,
      background,
      width,
      height
    } as const
  })

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (!slot.default) return

    const target: HTMLElement = evt.target as HTMLElement

    if (target.className === 'f-toolbar-item') {
      const index: string | undefined = target.dataset.index

      runCallback(prop.onClick, { evt, index } as ToolbarClickParamsInterface)
    }
  }
</script>

<template>
  <div :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
