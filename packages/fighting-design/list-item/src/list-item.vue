<script lang="ts" setup>
  import { Props } from './props'
  import { inject, reactive } from 'vue'
  import { LIST_PROPS_KEY } from '../../list/src/props'
  import { useList } from '../../_hooks'
  import type { ListProps } from '../../list/src/props'

  defineOptions({ name: 'FListItem' })

  const prop = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject: ListProps | null = inject(LIST_PROPS_KEY, null)

  const { styles } = useList(
    reactive({
      borderColor: parentInject && parentInject.borderColor,
      textColor: prop.color || (parentInject && parentInject.textColor),
      background: prop.background
    }),
    'list-item'
  )

  /** 样式列表 */
  const style = styles(['textColor', 'borderColor', 'background'])
</script>

<template>
  <li role="listitem" class="f-list-item" :style>
    <slot />
  </li>
</template>
