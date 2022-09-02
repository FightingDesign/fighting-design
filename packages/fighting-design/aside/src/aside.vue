<script lang="ts" setup name="FAside">
  import { Props } from './aside'
  import { computed } from 'vue'
  import type { FPropsType } from './aside'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width } = prop

    return { width } as const
  })
</script>

<template>
  <aside class="f-aside" :style="classList">
    <slot />
  </aside>
</template>
