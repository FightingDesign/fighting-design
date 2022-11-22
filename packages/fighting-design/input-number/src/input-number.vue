<script lang="ts" setup name="FInputNumber">
  import { Props } from './props'
  import { computed, ref, watch } from 'vue'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconChevronUp,
    FIconChevronDown
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FButton } from '../../button'
  import { isNumber, runCallback } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type { InputNumberPropsType } from './interface'

  const prop: InputNumberPropsType = defineProps(Props)
  const emit = defineEmits<{
    (e: 'update:modelValue', val: number): void
  }>()

  // const inputValue: ComputedRef<string> = computed<string>(() => {
  //   // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  //   return Number(prop.modelValue)?.toFixed(prop.precision)
  // })

  const getInputValue = computed((): number => {
    const { modelValue, precision } = prop

    if (!isNumber(modelValue)) {
      return 0
    }

    return Number(modelValue.toFixed(isNumber(precision) ? precision : 0))
  })

  const inputValue = ref<number>(getInputValue.value)

  /**
   * 最小值禁用
   */
  const minDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { modelValue, step, min } = prop
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    return Math.abs(modelValue) - Math.abs(step) < min
  })

  /**
   * 最大值禁用
   */
  const maxDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { modelValue, step, max } = prop

    if (!max && !isNumber(max)) {
      return false
    }
    return Math.abs(modelValue) - Math.abs(step) > max
  })

  /**
   * 点击减号
   */
  const handleMinus: OrdinaryFunctionInterface = (): void => {
    const { disabled, readonly, step } = prop

    if (disabled || readonly || minDisabled.value) return

    inputValue.value += step
  }

  /**
   * 点击加号
   */
  const handlePlus: OrdinaryFunctionInterface = (): void => {
    const { disabled, readonly, step } = prop

    // 禁用、只读、超出最大值
    if (disabled || readonly || maxDisabled.value) return

    inputValue.value += step
  }

  watch(
    (): number => inputValue.value,
    (newVal: number): void => {
      emit('update:modelValue', newVal)
      runCallback(prop.onInput, newVal)
    }
  )
</script>

<template>
  {{ inputValue }}
  <div class="f-input-number">
    <f-button
      v-if="model === 'button'"
      class="f-input-number__minus"
      type="primary"
      :disabled="disabled"
      :click="handleMinus"
      :before-icon="FIconChevronLeftVue"
    />

    <div class="f-input-number__wrapper">
      <f-input
        v-model="inputValue"
        type="number"
        :max="max"
        :min="min"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        :name="name"
        :clear="clear"
        :placeholder="placeholder"
        :on-blur="onBlur"
        :on-focus="onFocus"
        :on-input="onInput"
        :on-change="onChange"
      >
        <template #after>
          <div v-if="model === 'switch'" class="f-input-number__switch">
            <f-button
              :disabled="disabled"
              :before-icon="FIconChevronUp"
              :click="handlePlus"
            />
            <f-button
              :disabled="disabled"
              :before-icon="FIconChevronDown"
              :click="handleMinus"
            />
          </div>
        </template>
      </f-input>
    </div>

    <f-button
      v-if="model === 'button'"
      class="f-input-number__plus"
      type="primary"
      :disabled="disabled"
      :before-icon="FIconChevronRightVue"
      :click="handlePlus"
    />
  </div>
</template>
