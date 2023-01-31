<script lang="ts" setup name="FBadge">
  import { Props } from './props'
  import { computed } from 'vue'
  import { isNumber } from '../../_utils'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'badge')

  /** 类名列表 */
  const classList = classes(['type', 'dot'], 'f-badge')

  /** 样式列表 */
  const styleList = styles(['background', 'color'])

  /** 展示的内容 */
  const content = computed((): string => {
    const { dot, max, value } = prop

    if (dot) return ''

    if (isNumber(max) && isNumber(value)) {
      return max > value ? `${value}` : `${max}+`
    }

    return `${value}`
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <slot />
    <sup v-show="!show && (content || dot)" class="f-badge__content">
      {{ content }}
    </sup>
  </div>
</template>
