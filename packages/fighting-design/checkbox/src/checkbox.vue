<script lang="ts" setup name="FCheckbox">
import { computed, inject, getCurrentInstance, ref } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { checkboxGroupCtxKey } from '../../checkbox-group/src/checkbox-group'

import type {
  ClassListInterface as c
} from '../../_interface'
import type {
  CheckboxLabelType,
  CheckboxGroupInterface as a
} from '../../checkbox-group/src/interface'
import type { ComputedRef, Ref, ComponentInternalInstance, WritableComputedRef } from 'vue'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
// const slots = useSlots()
// const selfModel = ref(false)
const checkboxGroupInjectData: Ref<a | undefined> = ref()

const getGroupInject = (): void => {
  const { parent } = getCurrentInstance() as ComponentInternalInstance
  const parentName: string | undefined
    = (parent as ComponentInternalInstance).type.name
  if (parentName && parentName === 'FCheckboxGroup') {
    checkboxGroupInjectData.value = inject(checkboxGroupCtxKey) as a
  }
}
getGroupInject()

const isGroup = computed((): boolean => {
  return !!checkboxGroupInjectData.value || false
})

// checbox接收 [boolean, string, number] 和  boolean
const modelValue: WritableComputedRef<CheckboxLabelType> = computed({
  get () {
    if (isGroup.value) {
      return (checkboxGroupInjectData.value as a)?.modelValue
    }
    return props.modelValue
  },
  set (val) {
    if (isGroup.value) {
      !props.disabled
      && !checkboxGroupInjectData.value?.disabled
      && checkboxGroupInjectData.value?.changeEvent(val)
    } else {
      if (props.disabled) return
      emit('update:modelValue', val)
    }
  }
})

const isChecked = computed((): boolean => {
  const val = modelValue.value
  if (Array.isArray(val)) {
    return val.includes(props.label)
  } else if (typeof val === 'boolean') {
    return val
  }
  return (val === props.label) as boolean
})

// const hasOwnLabel = computed(() => {
//   return !!(props.label || slots.default)
// })
const classList: ComputedRef<c> = computed((): c => {
  return [
    'f-checkbox',
    `f-checkbox__${checkboxGroupInjectData.value?.size}`,
    {
      'f-checkbox--selected': isChecked.value,
      'f-checkbox--bordered': checkboxGroupInjectData.value?.border,
      'f-checkbox--disabled': props.disabled || checkboxGroupInjectData.value?.disabled
    }
  ]
})
</script>
<template>
  <label :class="classList">
    <span class="f-checkbox-inner">
      <input
        v-model="modelValue"
        type="checkbox"
        class="f-checkbox-input"
        :value="label"
      >
      <span class="f-checkbox-icon"></span>
      <span class="f-checkbox-label">
        <slot />
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>
