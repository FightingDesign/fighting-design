<script lang="ts" setup name="FListItem">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { computed, inject } from 'vue'
  import { listPropsKey } from '../../list/src/list'
  import { Props } from './list-item'
  import type { FPropsType } from '../../list/src/list'

  const injectListProps: FPropsType = inject(listPropsKey) as FPropsType
  const prop = defineProps(Props)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { textColor, borderColor } = injectListProps
    const { background, color } = prop

    return {
      background,
      color: color || textColor,
      borderColor
    } as const
  })
</script>

<template>
  <div class="f-list-item" :style="styleList">
    <li class="f-list-item-li">
      <slot />
    </li>
  </div>
</template>
