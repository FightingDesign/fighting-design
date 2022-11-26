<script lang="ts" setup name="FMenu">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { MenuPropsType } from './interface'
  import type { ClassListInterface } from '../../_interface'

  const prop: MenuPropsType = defineProps(Props)

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
  <div :class="classList">
    <!-- logo 位置 -->
    <div class="f-menu__logo">
      <slot name="logo" />
    </div>

    <!-- 主要内容 -->
    <div class="f-menu__content">
      <slot />
    </div>

    <!-- 右侧选项 -->
    <div class="f-menu__option">
      <slot name="option" />
    </div>
  </div>
</template>
