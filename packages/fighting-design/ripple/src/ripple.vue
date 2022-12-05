<script lang="ts" setup name="Ripple">
  import { Props } from './props'
  import { useRipples } from '../../_hooks'
  import { computed, ref, toRefs, reactive } from 'vue'
  import type { RipplesOptions } from '../../_hooks'
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
    if (prop.disabled) return

    const { type, ripplesColor, duration } = toRefs(prop)

    const options: RipplesOptions = reactive({
      duration: duration.value,
      component: 'f-ripple',
      className: 'f-ripple__animation',
      type: type.value,
      ripplesColor: ripplesColor.value
    })

    const { runRipples } = useRipples(evt, FRipple.value, options)

    runRipples()
  }
</script>

<template>
  <div ref="FRipple" :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
