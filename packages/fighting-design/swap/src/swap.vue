<script lang="ts" setup name="FSwap">
  import { Props, Emits } from './swap'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import type {
    OrdinaryFunctionInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeSwap: a = (): void => {
    emit('update:modelValue', !prop.modelValue)
    if (prop.onChange) {
      prop.onChange(!prop.modelValue)
    }
  }

  const classList: ComputedRef<b> = computed((): b => {
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
