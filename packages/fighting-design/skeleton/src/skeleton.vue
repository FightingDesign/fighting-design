<script lang="ts" setup>
  import { Props } from './props'
  import { computed, useSlots } from 'vue'
  import { useList } from '../../_hooks'
  import { isNumber } from '../../_utils'
  import type { Slots } from 'vue'

  defineOptions({ name: 'FSkeleton' })

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'skeleton')

  /** 类名列表 */
  const classList = classes(
    [
      'round',
      'animated',
      'size',
      {
        key: 'difference',
        callback: (): boolean => {
          return prop.difference && isNumber(prop.rows) && prop.rows >= 3
        }
      }
    ],
    'f-skeleton'
  )

  /** 样式列表 */
  const style = styles(['rowGap'])

  /**
   * 如果 loading 为 true 展示骨架屏
   *
   * 否则展示插槽内容
   */
  const isRender = computed((): boolean => {
    /** 获取到插槽内容 */
    const slots: Slots = useSlots()

    /** 判断是否有插槽 */
    if (slots.default) {
      return prop.loading === true
    }
    return true
  })
</script>

<template>
  <div v-if="isRender" role="section" :class="classList" :style>
    <div v-for="n in rows" :key="n" class="f-skeleton__item" />
  </div>

  <slot v-else />
</template>
