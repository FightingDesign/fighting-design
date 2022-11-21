<script lang="ts" setup name="FListItem">
  import { Props } from './props'
  import { computed, inject } from 'vue'
  import { LIST_PROPS_KEY } from '../../list/src/props'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ListPropsType } from '../../list/src/props'
  import type { ListItemPropsType } from './props'

  const prop: ListItemPropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    // 获取到注入的依赖项
    const INJECT_DEPEND: ListPropsType | undefined = inject<
      ListPropsType | undefined
    >(LIST_PROPS_KEY, undefined)

    const { background, color } = prop

    // 如果没有注入依赖，则直接返回自己的参数
    if (!INJECT_DEPEND) {
      return { background, color } as const
    }

    const { textColor, borderColor } = INJECT_DEPEND

    return {
      background,
      color: textColor,
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
