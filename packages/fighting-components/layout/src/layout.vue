<template>
  <section
    :class="[
      'f-layout',
      {
        'is-vertical': isVertical
      }
    ]"
  >
    <slot />
  </section>
</template>

<script setup lang="ts" name="FLayout">
  import { useSlots, computed } from 'vue'
  import type { VNode, Component } from 'vue'
  import { Props } from './layout'

  const prop = defineProps(Props)
  const slot = useSlots()

  const isVertical: Component<boolean> = computed((): boolean => {
    if (prop.direction === 'vertical') {
      return true
    } else if (prop.direction === 'horizontal') {
      return false
    }

    if (slot && slot.default) {
      const vNodes: VNode[] = slot.default()
      return vNodes.some((node: VNode) => {
        const name = (node.type as Component).name
        return name === 'FHeader' || name === 'FFooter'
      })
    }
    return false
  })
</script>
