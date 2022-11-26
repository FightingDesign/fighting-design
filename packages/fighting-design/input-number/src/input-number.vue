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
  import { isNumber, runCallback } from '../../_utils'
  import type { ComputedRef, WritableComputedRef } from 'vue'
  import type { InputNumberPropsType } from './interface'

  const prop: InputNumberPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: number): boolean => isNumber(val)
  })

  /**
   * 当前绑定的值
   */
  const inputValue: WritableComputedRef<number> = computed({
    /**
     * 获取值的时候返回
     */
    get: (): number => {
      const { modelValue, precision } = prop

      // 如果传入的是非数字的参数，则默认返回 0
      if (!isNumber(modelValue)) {
        return 0
      }

      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
      return Number(modelValue.toFixed(isNumber(precision) ? precision : 0))
    },
    /**
     * 当设置新的值的时候，同步数据
     *
     * @param val 新值
     */
    set: (val: number) => {
      emit('update:modelValue', val)
    }
  })

  /**
   * 最小值禁用
   */
  const minDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { step, min } = prop

    if (!min && !isNumber(min)) {
      return false
    }

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    return inputValue.value - Math.abs(step) < min
  })

  /**
   * 最大值禁用
   */
  const maxDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { step, max } = prop

    if (!max && !isNumber(max)) {
      return false
    }

    return inputValue.value + Math.abs(step) > max
  })

  /**
   * 改变值
   */
  const handleChangeVal = (target: 'minus' | 'plus'): void => {
    const { disabled, readonly, step } = prop

    // 禁用或只读
    if (disabled || readonly) return

    const map = {
      /**
       * 减少
       */
      minus: (): void => {
        inputValue.value -= step
      },
      /**
       * 增加
       */
      plus: (): void => {
        inputValue.value += step
      }
    }

    map[target]()

    runCallback(prop.onChange, inputValue.value)
  }
</script>

<template>
  <div class="f-input-number">
    <f-button
      v-if="model === 'button'"
      class="f-input-number__minus"
      type="primary"
      :disabled="disabled || minDisabled"
      :before-icon="FIconChevronLeftVue"
      @click="handleChangeVal('minus')"
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
              :disabled="disabled || maxDisabled"
              :before-icon="FIconChevronUp"
              @click="handleChangeVal('plus')"
            />
            <f-button
              :disabled="disabled || minDisabled"
              :before-icon="FIconChevronDown"
              @click="handleChangeVal('minus')"
            />
          </div>
        </template>
      </f-input>
    </div>

    <f-button
      v-if="model === 'button'"
      class="f-input-number__plus"
      type="primary"
      :disabled="disabled || maxDisabled"
      :before-icon="FIconChevronRightVue"
      @click="handleChangeVal('plus')"
    />
  </div>
</template>
