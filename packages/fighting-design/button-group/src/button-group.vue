<script lang="ts" setup name="FButtonGroup">
  import { Props, BUTTON_GROUP_PROPS_KEY } from './props'
  import { computed, provide, reactive, toRef } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type {
    ButtonGroupPropsType,
    ButtonGroupProvideInterface
  } from './interface'

  const prop: ButtonGroupPropsType = defineProps(Props)

  // 注入依赖
  provide<ButtonGroupProvideInterface>(
    BUTTON_GROUP_PROPS_KEY,
    reactive({
      size: toRef(prop, 'size'),
      type: toRef(prop, 'type')
    })
  )

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
