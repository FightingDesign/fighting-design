<script lang="ts" setup name="FListItem">
  import type { ComputedRef, CSSProperties } from 'vue'
  import { computed, inject } from 'vue'
  import { listPropsKey } from '../../list/src/list'
  import { Props } from './list-item'
  import type { FPropsType } from './list-item'
  import type { FPropsType as ListFPropsType } from '../../list/src/list'

  const injectListProps: ListFPropsType = inject(listPropsKey)!
  const prop: FPropsType = defineProps(Props)

  const listItemStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { textColor, borderColor } = injectListProps
      const { background, color } = prop

      return {
        background,
        color: color || textColor,
        borderColor
      } as const
    }
  )
</script>

<template>
  <div class="f-list-item" :style="listItemStyleList">
    <li class="f-list-item-li">
      <slot name="option" />
      <slot />
    </li>
  </div>
</template>
