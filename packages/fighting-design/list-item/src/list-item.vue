<script lang="ts" setup name="FListItem">
  import { Props } from './list-item'
  import { computed, inject } from 'vue'
  import { listPropsKey } from '../../list/src/list'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ListPropsType } from '../../list/src/list'

  const injectListProps: ListPropsType = inject(listPropsKey) as ListPropsType
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
  <div role="listitem" class="f-list-item" :style="styleList">
    <li class="f-list-item__li">
      <slot />
    </li>
  </div>
</template>
