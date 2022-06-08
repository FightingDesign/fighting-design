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
  const isVertical = computed(() => {
    if (slots && slots.default) {
      const vNodes: VNode[] = slots.default()
      return vNodes.some((vNode) => {
        const name = (vNode.type as Component).name
        return name === 'FHeader' || name === 'FFooter'
      })
    } else {
      return false
    }
  })
</script>
