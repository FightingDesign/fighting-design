<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import {
    FIconChevronLeft,
    FIconChevronRight,
    FIconChevronUp,
    FIconChevronDown
  } from '../../_svg'
  import { FInput } from '../../input'
  import { FButton } from '../../button'
  import { isNumber } from '../../_utils'
  import { useRun } from '../../_hooks'

  defineOptions({ name: 'FInputNumber' })

  const prop = defineProps(Props)
  const modelValue = defineModel<number>({ default: 0, type: Number })

  const { run } = useRun()

  /** 最小值禁用 */
  const minDisabled = computed((): boolean => {
    const { step, min } = prop

    if (!min && !isNumber(min)) {
      return false
    }

    /**
     * @see Math.abs() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
     */
    return modelValue.value - Math.abs(step) < min
  })

  /** 最大值禁用 */
  const maxDisabled = computed((): boolean => {
    const { step, max } = prop

    if (!max && !isNumber(max)) {
      return false
    }

    return modelValue.value + Math.abs(step) > max
  })

  /**
   * 改变值
   *
   * @param { 'minus' | 'plus' } target 增加或减少
   */
  const handleChangeVal = (target: 'minus' | 'plus'): void => {
    const { disabled, readonly, step } = prop

    /** 禁用或只读 */
    if (disabled || readonly) return

    const map = {
      /** 减少 */
      minus: (): void => {
        modelValue.value -= step
      },
      /** 增加 */
      plus: (): void => {
        modelValue.value += step
      }
    }

    run(map[target])
    run(prop.onChange, modelValue.value)
  }
</script>

<template>
  <div
    role="input"
    :class="['f-input-number', { 'f-input-number__button': model === 'button' }]"
  >
    <f-button
      v-if="model === 'button'"
      class="f-input-number__minus"
      :type="buttonType || 'primary'"
      :size
      :disabled="disabled || minDisabled"
      :before-icon="FIconChevronLeft"
      :on-click="() => handleChangeVal('minus')"
    />

    <div class="f-input-number__wrapper">
      <f-input
        v-model="modelValue"
        type="number"
        :max
        :min
        :disabled
        :readonly
        :autofocus
        :name
        :size
        :clear
        :placeholder
        :on-blur="onBlur"
        :on-focus="onFocus"
        :on-input="onInput"
        :on-change="onChange"
      >
        <template #after>
          <div
            v-if="model === 'switch'"
            :class="['f-input-number__switch', `f-input-number__switch-${size}`]"
          >
            <f-button
              :disabled="disabled || maxDisabled"
              :size
              :type="buttonType || 'default'"
              :before-icon="FIconChevronUp"
              :onclick="() => handleChangeVal('plus')"
            />
            <f-button
              :disabled="disabled || minDisabled"
              :size
              :type="buttonType || 'default'"
              :before-icon="FIconChevronDown"
              :on-click="() => handleChangeVal('minus')"
            />
          </div>
        </template>
      </f-input>
    </div>

    <f-button
      v-if="model === 'button'"
      class="f-input-number__plus"
      :type="buttonType || 'primary'"
      :size
      :disabled="disabled || maxDisabled"
      :before-icon="FIconChevronRight"
      :on-click="() => handleChangeVal('plus')"
    />
  </div>
</template>
