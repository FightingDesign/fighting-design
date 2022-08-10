<script lang="ts" setup name="FSwitch">
  import { computed } from 'vue'
  import { Props, Emits } from './switch'
  import FIcon from '../../icon'
  import type { ordinaryFunctionInterface as a } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { FPropsType } from './switch'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeSwitch: a = (): void => {
    if (prop.disabled) {
      return
    }
    emit('update:modelValue', !prop.modelValue)
    emit('change', !prop.modelValue)
  }

  const rollStyle: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { modelValue, closeColor, openColor, size } = prop

    const _size = {
      large: '24px',
      middle: '20px',
      small: '16px'
    } as const

    return {
      right: modelValue ? '0px' : _size[size],
      borderColor: modelValue ? openColor : closeColor
    } as const
  })

  const FSwitchClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { size, modelValue, square } = prop

      return [
        'f-switch-input',
        {
          [`f-switch-${size}`]: size,
          'f-switch-close': !modelValue,
          'f-switch-square': square
        }
      ] as const
    }
  )
</script>

<template>
  <div :class="['f-switch', { 'f-switch-disabled': disabled }]">
    <span
      v-if="closeText"
      :class="['f-switch-right-text', { 'f-switch-text-active': !modelValue }]"
    >
      {{ closeText }}
    </span>

    <div
      :class="FSwitchClass"
      :style="{ background: modelValue ? openColor : closeColor }"
      @click="changeSwitch"
    >
      <span class="f-switch-roll" :style="rollStyle">
        <f-icon v-if="icon" :icon="icon" />
      </span>
    </div>

    <span
      v-if="openText"
      :class="['f-switch-left-text', { 'f-switch-text-active': modelValue }]"
    >
      {{ openText }}
    </span>
  </div>
</template>
