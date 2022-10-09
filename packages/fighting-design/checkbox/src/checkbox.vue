<script lang="ts" setup name="FCheckbox">
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { Props, Emits } from './checkbox'
  import { checkboxGroupCtxKey } from '../../checkbox-group/src/checkbox-group'
  import type { ClassListInterface as c } from '../../_interface'
  import type { CheckboxLabelType } from '../../checkbox-group/src/interface'
  import type { CheckboxGroupPropsType as a } from '../../checkbox-group/src/checkbox-group'
  import type {
    ComputedRef,
    Ref,
    ComponentInternalInstance,
    WritableComputedRef
  } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const checkboxGroupInjectData: Ref<a | undefined> = ref()

  const getGroupInject = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    if (parentName && parentName === 'FCheckboxGroup') {
      checkboxGroupInjectData.value = inject(checkboxGroupCtxKey) as a
    }
  }
  getGroupInject()

  const isGroup: ComputedRef<boolean> = computed((): boolean => {
    return !!checkboxGroupInjectData.value || false
  })

  const modelValue: WritableComputedRef<CheckboxLabelType> = computed({
    get () {
      if (isGroup.value) {
        return (checkboxGroupInjectData.value as a)?.modelValue
      }
      return prop.modelValue
    },
    set (val) {
      if (isGroup.value) {
        !prop.disabled &&
          !checkboxGroupInjectData.value?.disabled &&
          checkboxGroupInjectData.value?.changeEvent(val)
      } else {
        if (prop.disabled) return
        emit('update:modelValue', val)
      }
    }
  })

  const isChecked: ComputedRef<boolean> = computed((): boolean => {
    const val = modelValue.value
    if (Array.isArray(val)) {
      return val.includes(prop.label)
    } else if (typeof val === 'boolean') {
      return val
    }
    return (val === prop.label) as boolean
  })

  const classList: ComputedRef<c> = computed((): c => {
    return [
      'f-checkbox',
      `f-checkbox__${checkboxGroupInjectData.value?.size}`,
      {
        'f-checkbox-selected': isChecked.value,
        'f-checkbox-bordered': checkboxGroupInjectData.value?.border,
        'f-checkbox-disabled':
          prop.disabled || checkboxGroupInjectData.value?.disabled
      }
    ]
  })
</script>

<template>
  <label :class="classList">
    <input
      v-model="modelValue"
      type="checkbox"
      class="f-checkbox-input"
      hidden
      :value="label"
    />
    <span class="f-checkbox-box" />
    <span class="f-checkbox-text">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
