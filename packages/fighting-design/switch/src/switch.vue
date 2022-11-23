<script lang="ts" setup name="FSwitch">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { SwitchPropsType } from './props'

  const prop: SwitchPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (target: boolean): string => String(target)
  })

  /**
   * 点击切换
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', !prop.modelValue)
    runCallback(prop.onChange, !prop.modelValue)
  }

  /**
   * 小球样式
   */
  const rollStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { modelValue, closeColor, openColor, size } = prop

      const SIZE_LIST = {
        large: '30px',
        middle: '25px',
        small: '20px',
        mini: '15px'
      } as const

      return {
        right: modelValue ? '0px' : SIZE_LIST[size],
        borderColor: modelValue ? openColor : closeColor
      } as const
    }
  )

  /**
   * 类名列表
   */
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
        <f-svg-icon v-if="icon" :icon="icon" :size="iconSize" />
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
