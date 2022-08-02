<!-- <script lang="ts" setup name="FSvgIcon">
  import { Props } from './svg-icon'
  import { computed } from 'vue'

  const prop = defineProps(Props)

  const symbolId = computed(() => `#${prop.prefix}-${prop.name}`)
</script>

<template>
  <svg class="f-svg-icon" :class="$attrs.class" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template> -->

<script>
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'SvgIcon',
    inheritAttrs: false,
    props: {
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#333'
      }
    },
    setup (props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      return { symbolId }
    }
  })
</script>

<template>
  <svg class="app-svg-icon" :class="$attrs.class" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
