<script lang="ts" setup>
  import { Props } from './aside'
  import { computed } from 'vue'
  import { isString } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, padding } = prop

    return {
      width: isString(width) ? width : width + 'px',
      padding: isString(padding) ? padding : padding + 'px'
    } as const
  })
</script>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'FAside'
  })
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
