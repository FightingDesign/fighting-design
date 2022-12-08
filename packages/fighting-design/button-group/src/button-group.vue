<script lang="ts" setup name="FButtonGroup">
  import { Props, BUTTON_GROUP_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import { useList } from '../../_hooks'
  import type { ComputedRef } from 'vue'
  import type { ClassList, FightingSize } from '../../_interface'

  const prop = defineProps(Props)

  const { classes } = useList(prop, 'button-group')

  // 注入依赖
  provide<FightingSize>(BUTTON_GROUP_PROPS_KEY, prop.size)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassList> = classes(
    ['direction', 'size'],
    'f-button-group'
  )
</script>

<template>
  <div role="group" :class="classList">
    <slot />
  </div>
</template>
