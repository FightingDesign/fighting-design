<script lang="ts" setup name="FListItem">
  import { Props } from './props'
  import { computed, inject } from 'vue'
  import { LIST_PROPS_KEY } from '../../list/src/props'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ListPropsType } from '../../list/src/props'
  import type { ListItemPropsType } from './props'

  const prop: ListItemPropsType = defineProps(Props)
  const injectListProps: ListPropsType = inject(LIST_PROPS_KEY) as ListPropsType

  /**
   * 样式列表
   */
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
