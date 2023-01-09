<script lang="ts" setup name="Ripple">
  import { Props } from './props'
  import { useRipples, useList, useGlobal } from '../../_hooks'
  import { ref, toRefs, reactive } from 'vue'
  import type { RipplesOptions } from '../../_hooks'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)

  const { getType } = useGlobal(prop)

  /** 替换 type 后得到的 props */
  const params = reactive({
    ...prop,
    type: getType().value
  })

  const { styles } = useList(params, 'ripple')

  /** 元素节点 */
  const rippleEl: Ref<HTMLElement | null> = ref(null)

  /** 样式列表 */
  const styleList = styles(['startOpacity', 'endOpacity'], false)

  /**
   * 点击之后执行
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return

    const { ripplesColor, duration } = toRefs(prop)

    /** 配置对象 */
    const options: RipplesOptions = reactive({
      duration: duration.value,
      component: 'f-ripple',
      className: 'f-ripple__animation',
      type: getType().value,
      ripplesColor: ripplesColor.value
    })

    const { runRipples } = useRipples(evt, rippleEl.value as HTMLElement, options)

    runRipples()
  }
</script>

<template>
  <div ref="rippleEl" class="f-ripple" :style="styleList" @click="handleClick">
    <slot />
  </div>
</template>
