<script lang="ts" setup name="FBadge">
  import { Props } from './props'
  import { computed } from 'vue'
  import { isNumber } from '../../_utils'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * 类名集合
   */
  const classList = computed((): ClassList => {
    const { type, dot } = prop

    return [
      'f-badge__content',
      {
        [`f-badge__${type}`]: type,
        'f-badge__dot': dot
      }
    ] as const
  })

  /**
   * 展示的内容
   */
  const content = computed((): string => {
    const { dot, max, value } = prop

    if (dot) return ''

    if (isNumber(max) && isNumber(value)) {
      return max > value ? `${value}` : `${max}+`
    }

    return `${value}`
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { color, textColor } = prop

    return {
      '--f-badge-background': color,
      '--f-badge-text-color': textColor
    } as CSSProperties
  })
</script>

<template>
  <div class="f-badge" :style="styleList">
    <slot />
    <sup v-show="!show && (content || dot)" :class="classList">
      {{ content }}
    </sup>
  </div>
</template>
