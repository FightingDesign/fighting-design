<script setup lang="ts">
  import { Props } from './props'
  import { useSlots, computed } from 'vue'
  import type { VNode, Component, Slots } from 'vue'

  defineOptions({ name: 'FLayout' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()

  /** 判断排列方式 */
  const isVertical = computed((): boolean => {
    if (prop.direction === 'vertical') {
      return true
    } else if (prop.direction === 'horizontal') {
      return false
    }

    if (slot && slot.default) {
      /** 获取到插槽内容 */
      const vNodes: VNode[] = slot.default()

      /**
       * @see Array.prototype.some() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
       * @see Array.prototype.some https://caniuse.com/?search=Array.prototype.some
       */
      return vNodes.some((node: VNode): boolean => {
        /** 获取组件的 name */
        const name: string | undefined = (node.type as Component).name
        return name === 'FHeader' || name === 'FFooter'
      })
    }

    return false
  })
</script>

<template>
  <section
    :class="[
      'f-layout',
      {
        'f-layout__vertical': isVertical
      }
    ]"
  >
    <slot />
  </section>
</template>
