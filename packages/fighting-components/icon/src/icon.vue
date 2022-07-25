<script setup lang="ts">
  import { computed } from 'vue'
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    }
  })
  const iconName = computed((): string => `#icon-${props.name}`)
  const svgClass = computed((): string => {
    if (props.name) {
      return `svg-icon icon-${props.name}`
    } else {
      return 'svg-icon'
    }
  })
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" :style="{ color }" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>
