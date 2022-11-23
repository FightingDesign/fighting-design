<script lang="ts" setup name="FCheckbox">
  import { Props } from './props'
  import { computed, inject } from 'vue'
  import { isArray, runCallback } from '../../_utils'
  import { CHECKBOX_GROUP_PROPS_KEY } from '../../checkbox-group/src/props'
  import type { ClassListInterface } from '../../_interface'
  import type {
    CheckboxGroupLabelType,
    CheckboxGroupInjectPropsType
  } from '../../checkbox-group'
  import type { ComputedRef, WritableComputedRef } from 'vue'
  import type { CheckboxPropsType, CheckboxLabelType } from './interface'

  const prop: CheckboxPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: CheckboxLabelType): CheckboxLabelType | [] =>
      typeof val !== 'object'
  })

  // 父组件注入的依赖项
  const INJECT_DEPEND: CheckboxGroupInjectPropsType | undefined = inject<
    CheckboxGroupInjectPropsType | undefined
  >(CHECKBOX_GROUP_PROPS_KEY, undefined)

  /**
   * 绑定值
   */
  const modelValue: WritableComputedRef<CheckboxGroupLabelType> = computed({
    /**
     * 获取值
     */
    get() {
      return (INJECT_DEPEND && INJECT_DEPEND.modelValue) || prop.modelValue
    },
    /**
     * 设置值
     */
    set(val) {
      if (INJECT_DEPEND && !INJECT_DEPEND.disabled) {
        INJECT_DEPEND.changeEvent(val)
        return
      }
      if (prop.disabled) return
      runCallback(prop.onChange, val)
      emit('update:modelValue', val)
    }
  })

  // 是否被选中
  const isChecked: ComputedRef<boolean> = computed((): boolean => {
    const val: CheckboxGroupLabelType = modelValue.value

    if (isArray(val)) {
      return val.includes(prop.label as never)
    } else if (typeof val === 'boolean') {
      return val
    }
    return (val === prop.label) as boolean
  })

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      return [
        'f-checkbox',
        {
          'f-checkbox__selected': isChecked.value,
          'f-checkbox__indeterminate': prop.indeterminate,
          'f-checkbox__bordered': INJECT_DEPEND && INJECT_DEPEND.border,
          'f-checkbox__disabled':
            prop.disabled || (INJECT_DEPEND && INJECT_DEPEND.disabled)
        }
      ] as const
    }
  )
</script>

<template>
  <label
    role="checkbox"
    aria-checked="false"
    tabindex="0"
    aria-labelledby="chk1-label"
    :class="classList"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      class="f-checkbox__input"
      hidden
      :value="label"
      :disabled="disabled || (!!INJECT_DEPEND && INJECT_DEPEND.disabled)"
    />
    <span
      v-if="!(INJECT_DEPEND && INJECT_DEPEND.border)"
      class="f-checkbox__box"
    />
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </span>
  </label>
</template>
