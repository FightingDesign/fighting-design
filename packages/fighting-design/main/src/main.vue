<script lang="ts" setup class="FMain">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { MainPropsType } from './props'

  const prop: MainPropsType = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { padding } = prop

    return {
      '--f-main-padding': sizeChange(padding)
    } as CSSProperties
  })
</script>

<template>
  <main role="main" class="f-main" :style="styleList">
    <slot />
  </main>
</template>
