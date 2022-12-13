<script lang="ts" setup name="FCheckbox">
  import { Props } from './props'
  import { computed, inject } from 'vue'
  import { useRun } from '../../_hooks'
  import { CHECKBOX_GROUP_PROPS_KEY } from '../../checkbox-group/src/props'
  import { isArray, isBoolean } from '../../_utils'
  import type { CheckboxGroupInject } from '../../checkbox-group'
  import type { ClassList } from '../../_interface'
  import type { CheckboxModelValue } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: CheckboxModelValue): CheckboxModelValue => typeof val !== 'object'
  })

  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<CheckboxGroupInject | null>(CHECKBOX_GROUP_PROPS_KEY, null)

  /**
   * 绑定值
   */
  const model = computed({
    /**
     * 获取值
     */
    get() {
      return (parentInject && parentInject.modelValue) || prop.modelValue
    },
    /**
     * 设置值
     */
    set(val) {
      if (!parentInject) {
        emit('update:modelValue', val as CheckboxModelValue)
        useRun(prop.onChange, val)
        return
      }
      parentInject.setChange(val)
    }
  })

  /**
   * 是否被选中
   */
  const isActive = computed((): boolean => {
    const value = model.value

    if (isArray(value)) {
      return value.includes(prop.label as never)
    } else if (isBoolean(value)) {
      return value
    }

    return value === prop.label
  })

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    return [
      'f-checkbox',
      {
        'f-checkbox__active': isActive.value,
        'f-checkbox__indeterminate': prop.indeterminate,
        'f-checkbox__bordered': parentInject && parentInject.border,
        'f-checkbox__disabled': prop.disabled || (parentInject && parentInject.disabled)
      }
    ] as const
  })
</script>

<template>
  <label role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk1-label" :class="classList">
    <input
      v-model="model"
      type="checkbox"
      class="f-checkbox__input"
      hidden
      :value="label"
      :disabled="disabled || (!!parentInject && parentInject.disabled)"
    />
    <span v-if="!(parentInject && parentInject.border)" class="f-checkbox__box" />
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </span>
  </label>
</template>
