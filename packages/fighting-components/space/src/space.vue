<script lang="ts" setup name="FSpace">
  import { computed } from 'vue'
  import { Props } from './space'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)

  const spaceClassList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { position, wrap, vertical, spacing } = prop

      return [
        'f-space',
        vertical ? 'f-space-vertical' : 'f-space-horizontal',
        `f-space-${position}`,
        `f-space-${spacing}`,
        {
          'f-space-wrap': wrap
        }
      ]
    }
  )
</script>

<template>
  <div :class="spaceClassList">
    <slot />
  </div>
</template>
