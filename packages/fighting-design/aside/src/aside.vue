<script lang="ts" setup name="FAside">
  import { Props } from './aside'
  import { computed, toRefs } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { AsidePropsType } from './aside'

  const prop: AsidePropsType = defineProps(Props)

  const styleList: ComputedRef<object> = computed((): object => {
    const { width, padding } = toRefs(prop)

    return {
      '--f-aside-width': sizeChange(width.value),
      '--f-aside-padding': sizeChange(padding.value)
    } as const
  })
</script>

<template>
  <aside class="f-aside" :style="styleList">
    <slot />
  </aside>
</template>
