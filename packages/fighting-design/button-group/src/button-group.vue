<script lang="ts" setup>
  import { Props, BUTTON_GROUP_PROPS_KEY } from './props'
  import { FIGHTING_GLOBAL_PROPS_KEY } from '../../fighting-global/src/props'
  import { provide, computed, inject } from 'vue'
  import { useList } from '../../_hooks'
  import type { FightingSize } from '../../_interface'
  import type { FightingGlobalProps } from '../../fighting-global'

  defineOptions({ name: 'FButtonGroup' })

  const prop = defineProps(Props)

  const { classes } = useList(prop, 'button-group')

  /** 获取全局配置组件注入的依赖项 */
  const fightingGlobalInject: FightingGlobalProps | null = inject(
    FIGHTING_GLOBAL_PROPS_KEY,
    null
  )

  /** 计算按钮组件的 size */
  const buttonGroupSize = computed((): FightingSize => {
    return prop.size || (fightingGlobalInject && fightingGlobalInject.size) || 'middle'
  })

  // 注入依赖
  provide<FightingSize>(BUTTON_GROUP_PROPS_KEY, buttonGroupSize.value)

  /** 类名列表 */
  const classList = classes(['direction', 'size'], 'f-button-group')
</script>

<template>
  <div role="group" :class="classList">
    <slot />
  </div>
</template>
