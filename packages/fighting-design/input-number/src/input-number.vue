<script lang="ts" setup name="FInputNumber">
  import { Props } from './props'
  import { computed } from 'vue'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconChevronUp,
    FIconChevronDown
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FButton } from '../../button'
  import type { ComputedRef } from 'vue'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type { InputNumberPropsType } from './interface'

  const prop: InputNumberPropsType = defineProps(Props)
  const emit = defineEmits<{
    (e: 'update:modelValue', val: number): void
  }>()

  const displayValue: ComputedRef<string> = computed<string>(() =>
    Number(prop.modelValue)?.toFixed(prop.precision)
  )

  /**
   * 点击减号
   */
  const handleMinus: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled || prop.readonly) return
    emit('update:modelValue', +prop.modelValue - +prop.step)
  }

  /**
   * 点击加号
   */
  const handlePlus: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled || prop.readonly) return
    emit('update:modelValue', +prop.modelValue + +prop.step)
  }
</script>

<template>
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
        v-model="displayValue"
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
