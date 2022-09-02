<script lang="ts" setup name="FHeader">
  import { Props } from './header'
  import { computed } from 'vue'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { FPropsType } from './header'

  const prop: FPropsType = defineProps(Props)

  const classList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height } = prop

    return { height } as const
  })
</script>

<template>
  <header class="f-header" :style="classList">
    <slot />
  </header>
</template>
