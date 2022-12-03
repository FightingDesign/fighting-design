<script lang="ts" setup name="FRadio">
  import { Props } from './props'
  import { isString, isBoolean, isNumber, runCallback } from '../../_utils'
  import { computed, inject } from 'vue'
  import { RADIO_GROUP_PROPS_kEY } from '../../radio-group/src/props'
  import type { RadioGroundInterface, RadioLabelType } from '../../radio-group'
  import type { ClassListInterface } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: RadioLabelType): boolean =>
      isString(val) || isNumber(val) || isBoolean(val)
  })

  /**
   * 获取父组件注入的依赖项
   */
  const INJECT_DEPEND = inject<RadioGroundInterface | undefined>(
    RADIO_GROUP_PROPS_kEY,
    undefined
  )

  const modelValue = computed({
    /**
     * 获取值
     * 如果父组件有依赖注入则使用
     * 否则使用之身 props 参数
     */
    get () {
      return (INJECT_DEPEND && INJECT_DEPEND.modelValue) || prop.modelValue
    },
    /**
     * 设置值
     */
    set (val) {
      if (INJECT_DEPEND && !INJECT_DEPEND.disabled) {
        INJECT_DEPEND.changeEvent(val)
        return
      }
      if (prop.disabled) return
      emit('update:modelValue', val)
      runCallback(prop.onChange, val)
    }
  })

  const classList = computed((): ClassListInterface => {
    const { disabled } = prop

    return [
      'f-radio',
      {
        'f-radio__checked': modelValue.value === prop.label,
        'f-radio__margin': !INJECT_DEPEND,
        'f-radio__disabled':
          disabled || (INJECT_DEPEND && INJECT_DEPEND.disabled)
      }
    ] as const
  })
</script>

<template>
  <label role="radio" aria-checked="false" tabindex="0" :class="classList">
    <input
      v-model="modelValue"
      hidden
      type="radio"
      :value="label"
      :disabled="disabled"
      :name="name"
    />
    <span v-if="!INJECT_DEPEND?.border" class="f-radio__circle" />
    <span class="f-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
