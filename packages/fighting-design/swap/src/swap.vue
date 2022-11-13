<script lang="ts" setup name="FSwap">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { useEmit } from '../../_hooks'
  import type { ComputedRef } from 'vue'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type { SwapPropsType } from './props'

  const prop: SwapPropsType = defineProps(Props)
  const emit = defineEmits(useEmit((target: boolean): boolean => target))

  /**
   * 切换时执行
   */
  const changeSwap: OrdinaryFunctionInterface = (): void => {
    emit('update:modelValue', !prop.modelValue)
    if (prop.onChange) {
      prop.onChange(!prop.modelValue)
    }
  }

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { modelValue, type } = prop

      return [
        'f-swap',
        modelValue ? `f-swap__${type}-on` : `f-swap__${type}-off`
      ] as const
    }
  )
</script>

<template>
  <div role="switch" :class="classList" @click="changeSwap">
    <f-svg-icon :icon="modelValue ? iconOn : iconOff" :size="size" />
  </div>
</template>
