<script lang="ts" setup name="FMenu">
  import { Props, MENU_MODE_KEY } from './props'
  import { computed, provide } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { MenuPropsType, MenuModeType } from './interface'
  import type { ClassListInterface } from '../../_interface'

  const prop: MenuPropsType = defineProps(Props)

  provide<MenuModeType>(MENU_MODE_KEY, prop.mode)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { mode } = prop

      return [
        'f-menu',
        {
          [`f-menu__${mode}`]: mode
        }
      ] as const
    }
  )
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
