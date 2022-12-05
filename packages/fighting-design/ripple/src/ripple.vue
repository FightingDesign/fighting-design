<script lang="ts" setup name="Ripple">
  import { Props } from './props'
  import { useRipples, useList } from '../../_hooks'
  import { ref, toRefs, reactive } from 'vue'
  import type { RipplesOptions } from '../../_hooks'

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'ripple')

  /**
   * dom 节点
   */
  const FRipple = ref<HTMLElement>(null as unknown as HTMLElement)

  /**
   * 样式列表
   */
  const styleList = styles(['startOpacity', 'endOpacity'])

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
  <div ref="FRipple" class="f-ripple" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
