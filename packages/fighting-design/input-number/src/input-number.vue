<script lang="ts" setup name="FInputNumber">
  import { Props } from './props'
  import { computed, reactive } from 'vue'
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
  import type { InputNumberPropsType } from './interface'

  const prop: InputNumberPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: number): boolean => isNumber(val)
  })

  const inputValueData = reactive({
    value: prop.modelValue
  })

  /**
   * 获取绑定的值，第一步拦截
   *
   * 检测数据类型
   */
  // const getInputValue = computed((): number => {
  //   // const { modelValue, precision } = prop

  //   // if (!isNumber(inputValueData.value)) {
  //   //   return 0
  //   // }

  //   // return Number(
  //   //   inputValueData.value.toFixed(
  //   //     isNumber(prop.precision) ? prop.precision : 0
  //   //   )
  //   // )

  //   return inputValueData.value
  // })

  /**
   * 监视如果绑定的值发生变化则同步数据
   */
  // watch(
  //   (): number => inputValueData.value,
  //   (newVal: number): void => {
  //     emit('update:modelValue', newVal)
  //     runCallback(prop.onInput, newVal)
  //   },
  //   { deep: true }
  // )

  /**
   * 最小值禁用
   */
  const minDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { step, min } = prop

    if (!min && !isNumber(min)) {
      return false
    }

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    return inputValueData.value - Math.abs(step) < min
  })

  /**
   * 最大值禁用
   */
  const maxDisabled: ComputedRef<boolean> = computed((): boolean => {
    const { step, max } = prop

    if (!max && !isNumber(max)) {
      return false
    }

    return inputValueData.value + Math.abs(step) > max
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
        inputValueData.value -= step
        emit('update:modelValue', inputValueData.value)
      },
      /**
       * 增加
       */
      plus: (): void => {
        inputValueData.value += step
        emit('update:modelValue', inputValueData.value)
      }
    }

    map[target]()

    runCallback(prop.onChange, inputValueData.value)
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
        v-model="inputValueData.value"
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
