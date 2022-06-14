<template>
  <section
    :class="[
      'f-container',
      {
        'is-vertical': isVertical
      }
    ]"
  >
    <slot />
  </section>
</template>

<script setup lang="ts" name="FContainer">
  import { useSlots, computed } from 'vue'
  import type { VNode, Component } from 'vue'
  import { Props } from './container.ts'

  const props = defineProps(Props)

  const slots = useSlots()

  const isVertical: Component<boolean> = computed((): boolean => {
    if (props.orientation === 'vertical') return true
    else if (props.orientation === 'horizontal') {
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode: VNode): boolean => {
          console.log(vNode.type as Component)
          const name = (vNode.type as Component).name
          return name === 'FHeader' || name === 'FFooter'
        })
      } else return false
    }
  })
</script>
