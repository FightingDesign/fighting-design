<script lang="ts" setup name="FSkeleton">
  import { Props } from './props'
  import { computed, useSlots } from 'vue'
  import { useList } from '../../_hooks'
  import type { Slots } from 'vue'

  const prop = defineProps(Props)

  const { classes } = useList(prop, 'skeleton')

  /** 类名列表 */
  const classList = classes(['round', 'animated', 'size'], 'f-skeleton')

  /**
   * 如果 loading 为 true，展示骨架屏
   *
   * 否则展示插槽内容
   */
  const isRender = computed((): boolean => {
    const slots: Slots = useSlots()

    /** 判断是否有插槽 */
    if (slots.default) {
      return prop.loading === true
    }
    return true
  })
</script>

<template>
  <template v-if="isRender">
    <div v-for="n in rows" :key="n" role="section" :class="classList" />
  </template>

  <slot v-else />
</template>
