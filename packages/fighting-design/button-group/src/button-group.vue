<script lang="ts" setup name="FButtonGroup">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ButtonGroupPropsType } from './props'

  const prop: ButtonGroupPropsType = defineProps(Props)

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
