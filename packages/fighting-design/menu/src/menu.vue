<script lang="ts" setup>
  import { Props, MENU_PROVIDE_KEY } from './props'
  import { provide, toRef, computed, ref } from 'vue'
  import { useList } from '../../_hooks'
  import type { MenuProvide } from './interface'

  defineOptions({ name: 'FMenu' })

  const prop = defineProps(Props)

  const { classes } = useList(prop, 'menu')

  /** 当前选中的 name */
  const active = ref<string | number>(prop.activeName)

  /** 默认选中的 name */
  const defaultActive = computed((): string | number => active.value)

  /**
   * 修改选中的 name
   *
   * @param { string | number } name 最新的 name
   */
  const setActiveName = (name: string | number): void => {
    active.value = name
  }

  // 提供出去依赖项
  provide<MenuProvide>(MENU_PROVIDE_KEY, {
    mode: toRef(prop, 'mode'),
    defaultActive,
    setActiveName,
    onMenuItemClick: prop.onMenuItemClick,
    onSubmenuClick: prop.onSubmenuClick
  })

  /** 类名列表 */
  const classList = classes(['mode'], 'f-menu')
</script>

<template>
  <div role="menu" :class="classList">
    <!-- 前缀位置 -->
    <div v-if="$slots.before" class="f-menu__before">
      <slot name="before" />
    </div>

    <!-- 主要内容 -->
    <div class="f-menu__content">
      <slot />
    </div>

    <!-- 后缀选项 -->
    <div v-if="$slots.after" class="f-menu__after">
      <slot name="after" />
    </div>
  </div>
</template>
