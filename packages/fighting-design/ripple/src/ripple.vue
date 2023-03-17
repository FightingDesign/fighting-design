<script lang="ts" setup name="Ripple">
  import { Props } from './props'
  import { useRipples, useList, useGlobal } from '../../_hooks'
  import { ref, toRefs, reactive } from 'vue'
  import type { RipplesOptions } from '../../_hooks'

  const prop = defineProps(Props)

  const { getType, getProp } = useGlobal(prop)
  const { styles } = useList(getProp(['type'], ['default']), 'ripple')

  /** 元素节点 */
  const rippleEl = ref<HTMLElement>()

  /** 样式列表 */
  const styleList = styles(['startOpacity', 'endOpacity'], false)

  /**
   * 点击之后执行
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return

    const { ripplesColor, duration } = toRefs(prop)

    /** 配置对象 */
    const options: RipplesOptions = reactive({
      duration: duration.value,
      component: 'f-ripple',
      className: 'f-ripple__animation',
      type: getType(),
      ripplesColor: ripplesColor.value
    })

    /** 必须在元素节点存在的情况下才触发涟漪 */
    if (rippleEl.value) {
      const { runRipples } = useRipples(evt, rippleEl.value, options)
      runRipples()
    }
  }
</script>

<template>
  <div ref="rippleEl" class="f-ripple" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
