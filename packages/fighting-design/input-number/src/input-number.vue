<script lang="ts" setup name="FInputNumber">
  import { Props } from './props'
  import { ref, computed } from 'vue'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconChevronUp,
    FIconChevronDown
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FButton } from '../../button'
  import type { ComputedRef } from 'vue'
  import type {
    HandleEventInterface,
    OrdinaryFunctionInterface,
    HandleFocusEventInterface,
    HandleKeyboardEventInterface
  } from '../../_interface'
  import type { InputNumberPropsType } from './interface'

  const prop: InputNumberPropsType = defineProps(Props)
  const emit = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', val: number): void
    (e: 'focus', val: FocusEvent): void
    (e: 'blur', val: FocusEvent): void
    (e: 'enter', val: KeyboardEvent): void
  }>()

  const inputRef = ref()

  const displayValue: ComputedRef<string> = computed<string>(() =>
    Number(prop.modelValue)?.toFixed(prop.precision)
  )

  /**
   * 最小值禁用
   */
  const minDisabled: ComputedRef<boolean> = computed<boolean>(
    () => +prop.modelValue - +prop.step <= prop.min
  )

  /**
   * 最大值禁用
   */
  const maxDisabled: ComputedRef<boolean> = computed<boolean>(
    () => +prop.modelValue + +prop.step >= prop.max
  )

  /**
   * 输入框输入
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    const { min, max } = prop
    let val = +(evt.target as HTMLInputElement).value
    if (val > max || val < min) {
      val = val > max ? max : min
    }
    emit('change', val)
  }

  /**
   * 按下回车
   */
  const handleEnter: HandleKeyboardEventInterface = (
    evt: KeyboardEvent
  ): void => {
    emit('enter', evt)
  }

  /**
   * 点击减号
   */
  const handleMinus: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled || prop.readonly || minDisabled.value) return
    emit('update:modelValue', +prop.modelValue - +prop.step)
  }

  /**
   * 点击加号
   */
  const handlePlus: OrdinaryFunctionInterface = (): void => {
    if (prop.disabled || prop.readonly || maxDisabled.value) return
    emit('update:modelValue', +prop.modelValue + +prop.step)
  }

  /**
   * 失去焦点
   *
   * @param evt 事件对象
   */
  const handleBlur: HandleFocusEventInterface = (evt: FocusEvent): void => {
    const inputEle = inputRef.value
    let val = +(evt.target as HTMLInputElement).value
    if (val > prop.max || val < prop.min) {
      val = val > prop.max ? prop.max : prop.min
    }
    inputEle.value = val.toFixed(prop.precision)
    emit('blur', evt)
  }

  /**
   * 获取焦点
   *
   * @param evt 事件对象
   */
  const handleFocus: HandleFocusEventInterface = (evt: FocusEvent): void => {
    emit('focus', evt)
  }
</script>

<template>
  <div class="f-input-number">
    <f-button
      v-if="model === 'button'"
      type="primary"
      :disabled="disabled"
      :click="handleMinus"
      :before-icon="FIconChevronLeftVue"
    />

    <div class="f-input-number__wrapper">
      <f-input
        ref="inputRef"
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
        :on-blur="handleBlur"
        :on-focus="handleFocus"
        :on-enter="handleEnter"
        :on-input="handleInput"
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
      type="primary"
      :disabled="disabled"
      :before-icon="FIconChevronRightVue"
      :click="handlePlus"
    />
  </div>
</template>
