<script lang="ts" setup name="FRadio">
  import { Props } from './props'
  import { isString, isBoolean, isNumber, runCallback } from '../../_utils'
  import { computed, inject } from 'vue'
  import { RADIO_GROUP_PROPS_kEY } from '../../radio-group/src/props'
  import type { ComputedRef, WritableComputedRef } from 'vue'
  import type {
    RadioGroundInterface,
    RadioLabelType
  } from '../../radio-group/src/interface'
  import type { ClassListInterface } from '../../_interface'
  import type { RadioPropsType } from './props'

  const prop: RadioPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: RadioLabelType): boolean =>
      isString(val) || isNumber(val) || isBoolean(val)
  })

  // 父组件注入的依赖项
  const groupProps: RadioGroundInterface | undefined = inject<
    RadioGroundInterface | undefined
  >(RADIO_GROUP_PROPS_kEY, undefined)

  const modelValue: WritableComputedRef<RadioLabelType> = computed({
    /**
     * 获取值
     * 如果父组件有依赖注入则使用
     * 否则使用之身 props 参数
     */
    get () {
      return (groupProps && groupProps.modelValue) || prop.modelValue
    },
    /**
     * 设置值
     */
    set (val) {
      if (groupProps && !groupProps.disabled) {
        groupProps.changeEvent(val)
        return
      }
      if (prop.disabled) return
      emit('update:modelValue', val)
      runCallback(prop.change, val)
    }
  })

  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { disabled } = prop

      return [
        'f-radio',
        {
          'f-radio__checked': modelValue.value === prop.label,
          'f-radio__margin': !groupProps,
          'f-radio__disabled': disabled || (groupProps && groupProps.disabled)
        }
      ] as const
    }
  )
</script>

<template>
  <label
    role="radio"
    aria-checked="false"
    tabindex="0"
    aria-labelledby="q25_radio1-label"
    data-value="True"
    :class="classList"
  >
    <input
      v-model="modelValue"
      hidden
      type="radio"
      :value="label"
      :disabled="disabled"
      :name="name"
    />
    <span v-if="!groupProps?.border" class="f-radio__circle" />
    <span class="f-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
