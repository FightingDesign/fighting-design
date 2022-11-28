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
