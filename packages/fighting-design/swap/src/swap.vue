<script lang="ts" setup name="FSwap">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import { computed } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (target: boolean): string => String(target)
  })

  /**
   * 切换时执行
   */
  const changeSwap = (): void => {
    emit('update:modelValue', !prop.modelValue)
    runCallback(prop.onChange, !prop.modelValue)
  }

  /**
   * 类名列表
   */
  const classList = computed((): ClassListInterface => {
    const { modelValue, type } = prop

    return [
      'f-swap',
      modelValue ? `f-swap__${type}-on` : `f-swap__${type}-off`
    ] as const
  })
</script>

<template>
  <div role="switch" :class="classList" @click="changeSwap">
    <f-svg-icon :icon="modelValue ? iconOn : iconOff" :size="size" />
  </div>
</template>
