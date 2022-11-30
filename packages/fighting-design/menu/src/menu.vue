<script lang="ts" setup name="FMenu">
  import { Props, MENU_PROVIDE_KEY } from './props'
  import { provide, reactive, toRef, computed, ref } from 'vue'
  import { useList } from '../../_hooks'
  import type { ComputedRef, Ref } from 'vue'
  import type {
    MenuPropsType,
    MenuProvideInterface,
    MenuSetActiveNameInterface
  } from './interface'
  import type { ClassListInterface } from '../../_interface'

  const prop: MenuPropsType = defineProps(Props)

  const { classes } = useList(prop, 'menu')

  /**
   * 当前选中的 name
   */
  const active: Ref<string | number> = ref<string | number>(prop.activeName)

  /**
   * 默认选中的 name
   */
  const defaultActive: ComputedRef<string | number> = computed(
    (): string | number => active.value
  )

  /**
   * 修改选中的 name
   *
   * @param name 最新的 name
   */
  const setActiveName: MenuSetActiveNameInterface = (
    name: string | number
  ): void => {
    active.value = name
  }

  // 提供出去依赖项
  provide<MenuProvideInterface>(
    MENU_PROVIDE_KEY,
    reactive({
      mode: toRef(prop, 'mode'),
      defaultActive,
      setActiveName
    } as unknown as MenuProvideInterface)
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(['mode'], 'f-menu')
</script>

<template>
  <ul :class="classList">
    <!-- 前缀位置 -->
    <li v-if="$slots.before" class="f-menu__before">
      <slot name="before" />
    </li>

    <!-- 主要内容 -->
    <ul class="f-menu__content">
      <slot />
    </ul>

    <!-- 后缀选项 -->
    <li v-if="$slots.after" class="f-menu__after">
      <slot name="after" />
    </li>
  </ul>
</template>
