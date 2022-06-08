<template>
  <section
    :class="[
      'f-container',
      {
        'f-container-vertical': isVertical
      }
    ]"
  >
    <slot />
  </section>
</template>

<script setup lang="ts" name="FContainer">
  import { useSlots, computed } from 'vue'
  import type { VNode, Component } from 'vue'

  const slots = useSlots()

  const isVertical: Component<boolean> = computed((): boolean => {
    if (slots && slots.default) {
      const vNodes: VNode[] = slots.default()
      return vNodes.some((vNode: VNode): boolean => {
        const name = (vNode.type as Component).name
        return name === 'FHeader' || name === 'FFooter'
      })
    }
    return false
  })
</script>
