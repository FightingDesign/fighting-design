<!-- <script>
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'SvgIcon',
    inheritAttrs: false,
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#333',
      },
    },
    setup (props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      return { symbolId }
    },
  })
</script>

<template>
  <svg class="app-svg-icon" :class="$attrs.class" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template> -->

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

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
