<script lang="ts" setup name="FSwap">
import { Props, Emits } from './swap'
import { FSvgIcon } from '../../svg-icon'
import { computed } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import type {
  OrdinaryFunctionInterface as a,
  ClassListInterface as b
} from '../../_interface'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const changeSwap: a = (): void => {
  emit('update:modelValue', !prop.modelValue)
  emit('change', !prop.modelValue)
}

const rollStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  const { modelValue, size } = prop
  const _size = {
    large: '65px',
    middle: '45px',
    small: '25px'
  } as const

  return {
    right: modelValue ? '0px' : _size[size]
  } as const
})

const FSswapClass: ComputedRef<b> = computed((): b => {
  const { size } = prop
  return [
    'f-swap-off',
    {
      [`f-swap-${size}`]: size
    }
  ] as const
})
</script>

<template>
  <div class="f-swap" @click="changeSwap">
    <div
      :style="rollStyle"
      :class="prop.modelValue === true ? `${type}-on` : `${type}-off`"
    >
      <f-svg-icon
        :class="FSswapClass"
        :icon="prop.modelValue === true ? iconOn : iconOff"
      />
    </div>
  </div>
</template>
