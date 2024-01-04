<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import { isNumber } from '../../_utils'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FBadge' })

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'badge')

  /** 类名列表 */
  const classList = classes(['type', 'dot'], 'f-badge')

  /** 样式列表 */
  const style = styles(['background', 'color'])

  /** 展示的内容 */
  const content = computed((): string | number => {
    const { dot, max, value } = prop

    if (dot) return ''

    if (isNumber(max) && isNumber(value)) {
      return value > max ? max + '+' : value
    }

    return value
  })

  /** 展示状态 */
  const isShow = computed((): boolean => {
    const { value, show } = prop

    // 非数字的情况下，show 便可以直接控制展示状态
    if (!isNumber(value) && show) {
      return true
    }

    /**
     * 如果 value 是 number 类型
     *
     * 不仅要控制展示状态，而且值还不能小于 0
     */
    return show && isNumber(value) && value > 0
  })
</script>

<template>
  <div :class="classList" :style>
    <slot />

    <transition name="f-badge">
      <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sup -->
      <sup v-if="isShow" class="f-badge__content">
        {{ content }}
      </sup>
    </transition>
  </div>
</template>
