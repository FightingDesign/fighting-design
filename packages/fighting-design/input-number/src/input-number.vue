<script lang="ts" setup name="FInputNumber">
  import { ref, computed } from 'vue'
  import { Props } from './props'
  import { FIconCrossVue } from '../../_svg'
  import type { ComputedRef } from 'vue'
  import type {
    HandleEventInterface,
    OrdinaryFunctionInterface,
    HandleFocusEventInterface,
    HandleKeyboardEventInterface
  } from '../../_interface'

  const props = defineProps(Props)

  const emit = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', val: number): void
    (e: 'focus', val: FocusEvent): void
    (e: 'blur', val: FocusEvent): void
    (e: 'enter', val: KeyboardEvent): void
  }>()

  const inputRef = ref()
  let initValue = ref(props.modelValue)

  const displayValue: ComputedRef<string> = computed<string>(() =>
    Number(props.modelValue)?.toFixed(props.precision)
  )

  /**
   * 最小值禁用
   */
  const minDisabled: ComputedRef<boolean> = computed<boolean>(
    () => +props.modelValue - +props.step <= props.min
  )

  /**
   * 最大值禁用
   */
  const maxDisabled: ComputedRef<boolean> = computed<boolean>(
    () => +props.modelValue + +props.step >= props.max
  )

  /**
   * 输入框输入
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    const { min, max } = props
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
    if (props.disabled || props.readonly || minDisabled.value) return
    emit('update:modelValue', +props.modelValue - +props.step)
  }

  /**
   * 点击加号
   */
  const handlePlus: OrdinaryFunctionInterface = (): void => {
    if (props.disabled || props.readonly || maxDisabled.value) return
    emit('update:modelValue', +props.modelValue + +props.step)
  }

  /**
   * 点击清除按钮
   */
  const handleClear: OrdinaryFunctionInterface = (): void => {
    if (props.disabled || props.readonly) return
    emit('update:modelValue', initValue.value)
  }

  /**
   * 失去焦点
   */
  const handleBlur: HandleFocusEventInterface = (evt: FocusEvent): void => {
    const inputEle = inputRef.value
    let val = +(evt.target as HTMLInputElement).value
    if (val > props.max || val < props.min) {
      val = val > props.max ? props.max : props.min
    }
    inputEle.value = val.toFixed(props.precision)
    emit('blur', evt)
  }

  /**
   * 获取焦点
   */
  const handleFocus: HandleFocusEventInterface = (evt: FocusEvent): void => {
    emit('focus', evt)
  }
</script>

<template>
  <div :class="['f-input-number', { [`f-input-number__${size}`]: size }]">
    <i
      v-if="model === 'button'"
      :class="[
        'f-input-number__minus',
        {
          [`f-input-number__${size}`]: size,
          'f-input-number__disabled': disabled
        }
      ]"
      @click="handleMinus"
    ></i>

    <div
      :class="[
        'f-input-number__wrapper',
        { 'f-input-number__disabled': disabled }
      ]"
    >
      <input
        ref="inputRef"
        class="f-input-number__input"
        type="number"
        :max="max"
        :min="min"
        :value="displayValue"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        @input="handleInput"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <!-- clear icon -->
      <f-svg-icon
        v-if="clear && !readonly"
        class="f-input-number__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
        @click="handleClear"
      />

      <div
        v-if="model === 'switch'"
        :class="[
          'f-input-number__switch',
          { 'f-input-number__disabled': disabled }
        ]"
      >
        <span class="f-input-number__switch-up" @click="handlePlus">
          <i class="f-input-number__switch-up-icon"></i>
        </span>
        <span class="f-input-number__switch-down" @click="handleMinus">
          <i class="f-input-number__switch-down-icon"></i>
        </span>
      </div>
    </div>

    <i
      v-if="model === 'button'"
      :class="[
        'f-input-number__plus',
        {
          [`f-input-number__${size}`]: size,
          'f-input-number__disabled': disabled
        }
      ]"
      @click="handlePlus"
    ></i>
  </div>
</template>
