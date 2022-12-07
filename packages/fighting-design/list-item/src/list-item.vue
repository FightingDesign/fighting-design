<script lang="ts" setup name="FListItem">
  import { Props } from './props'
  import { computed, inject } from 'vue'
  import { LIST_PROPS_KEY } from '../../list/src/props'
  import type { CSSProperties } from 'vue'
  import type { ListProps } from '../../list/src/props'

  const prop = defineProps(Props)

  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<ListProps | undefined>(LIST_PROPS_KEY, undefined)

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { background, color } = prop

    // 如果没有注入依赖，则直接返回自己的参数
    if (!parentInject) {
      return { background, color } as const
    }

    const { textColor, borderColor } = parentInject

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
