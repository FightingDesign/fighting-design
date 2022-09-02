<script lang="ts" setup name="FMain">
  import { Props } from './main'
  import { computed } from 'vue'
  import type { FPropsType } from './main'
  import type { CSSProperties, ComputedRef } from 'vue'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { padding } = prop

    return { padding } as const
  })
</script>

<template>
  <main class="f-main" :style="classList">
    <slot />
  </main>
</template>
