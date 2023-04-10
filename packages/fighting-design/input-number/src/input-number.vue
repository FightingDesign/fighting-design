<script lang="ts" setup name="FInputNumber">
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
  import { EMIT_UPDATE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: number): boolean => isNumber(val)
  })

  const { run } = useRun()

  /** 当前绑定的值 */
  const inputValue = computed({
    /** 获取值的时候返回 */
    get: (): number => {
      const { modelValue, precision } = prop

      /** 如果传入的是非数字的参数，则默认返回 0 */
      if (!isNumber(modelValue)) {
        return 0
      }

      /**
       * @see Number.prototype.toFixed() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
       */
      return Number(modelValue.toFixed(isNumber(precision) ? precision : 0))
    },
    /**
     * 当设置新的值的时候，同步数据
     *
     * @param { number } val 最新值
     */
    set: (val: number): void => {
      emit(EMIT_UPDATE, Number(val))
    }
  })

  /** 最小值禁用 */
  const minDisabled = computed((): boolean => {
    const { step, min } = prop

    if (!min && !isNumber(min)) {
      return false
    }

    /**
     * @see Math.abs() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
     */
    return inputValue.value - Math.abs(step) < min
  })

  /** 最大值禁用 */
  const maxDisabled = computed((): boolean => {
    const { step, max } = prop

    if (!max && !isNumber(max)) {
      return false
    }

    return inputValue.value + Math.abs(step) > max
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
        inputValue.value -= step
      },
      /** 增加 */
      plus: (): void => {
        inputValue.value += step
      }
    }

    run(map[target])
    run(prop.onChange, inputValue.value)
  }
</script>

<template>
  <div role="input" class="f-input-number">
    <f-button
      v-if="model === 'button'"
      class="f-input-number__minus"
      :type="buttonType || 'primary'"
      :size="size"
      :disabled="disabled || minDisabled"
      :before-icon="FIconChevronLeft"
      :on-click="() => handleChangeVal('minus')"
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
        :size="size"
        :clear="clear"
        :placeholder="placeholder"
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
              :size="size"
              :type="buttonType || 'default'"
              :before-icon="FIconChevronUp"
              :onclick="() => handleChangeVal('plus')"
            />
            <f-button
              :disabled="disabled || minDisabled"
              :size="size"
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
      :size="size"
      :disabled="disabled || maxDisabled"
      :before-icon="FIconChevronRight"
      :on-click="() => handleChangeVal('plus')"
    />
  </div>
</template>
