<script lang="ts" setup name="Ripple">
  import { Props } from './props'
  import { Ripples } from '../../_utils'
  import { computed, ref, toRefs } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /**
   * dom 节点
   */
  const FRipple = ref<HTMLElement>(null as unknown as HTMLElement)

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { startOpacity, endOpacity } = prop

    return {
      '--f-ripple-start-opacity': startOpacity,
      '--f-ripple-end-opacity': endOpacity
    } as CSSProperties
  })

  /**
   * 类名列表
   */
  const classList = computed((): ClassListInterface => {
    const { noSelect } = prop

    return ['f-ripple', { 'f-ripple__select': noSelect }] as const
  })

  /**
   * 点击之后执行
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    const { type, ripplesColor, duration, disabled } = toRefs(prop)

    if (disabled.value) return

    const ripples: Ripples = new Ripples(
      evt as MouseEvent,
      FRipple.value as HTMLElement,
      {
        duration: duration.value,
        component: 'f-ripple',
        className: 'f-ripple__animation',
        type: type.value,
        ripplesColor: ripplesColor.value
      } as const
    )

    ripples.clickRipples()
  }
</script>

<template>
  <div ref="FRipple" :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
