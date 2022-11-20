<script lang="ts" setup name="FButtonGroup">
  import { Props, BUTTON_GROUP_PROPS_KEY } from './props'
  import { computed, provide } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ButtonGroupPropsType } from './interface'
  import type { ButtonSizeType } from '../../button'

  const prop: ButtonGroupPropsType = defineProps(Props)

  // 注入依赖
  provide<ButtonSizeType>(BUTTON_GROUP_PROPS_KEY, prop.size)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { vertical, size } = prop

      return [
        'f-button-group',
        `f-button-group__${vertical ? 'vertical' : 'horizontal'}`,
        {
          [`f-button-group__${size}`]: size
        }
      ] as const
    }
  )
</script>

<template>
  <div role="group" :class="classList">
    <slot />
  </div>
</template>
