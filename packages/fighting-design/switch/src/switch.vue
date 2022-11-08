<script lang="ts" setup name="FSwitch">
  import { computed } from 'vue'
  import { Props, Emits } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { SwitchPropsType } from './props'

  const prop: SwitchPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  // 点击切换
  const handleClick: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', !prop.modelValue)
    prop.change && prop.change(!prop.modelValue)
  }

  // 小球样式
  const rollStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
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
    }
  )

  // 类名集合
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { size, modelValue, square } = prop

      return [
        'f-switch__input',
        {
          [`f-switch__${size}`]: size,
          'f-switch__close': !modelValue,
          'f-switch__square': square
        }
      ] as const
    }
  )
</script>

<template>
  <div role="switch" :class="['f-switch', { 'f-switch__disabled': disabled }]">
    <span
      v-if="closeText"
      :class="[
        'f-switch__right-text',
        { 'f-switch__text-active': !modelValue }
      ]"
    >
      {{ closeText }}
    </span>

    <div
      :class="classList"
      :style="{ background: modelValue ? openColor : closeColor }"
      @click="handleClick"
    >
      <span class="f-switch__roll" :style="rollStyleList">
        <f-svg-icon v-if="icon" :icon="icon" :size="14" />
      </span>
    </div>

    <span
      v-if="openText"
      :class="['f-switch__left-text', { 'f-switch__text-active': modelValue }]"
    >
      {{ openText }}
    </span>
  </div>
</template>
