<script lang="ts" setup name="FCheckbox">
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { Props, Emits } from './checkbox'
  import { checkboxGroupPropsKey } from '../../checkbox-group/src/checkbox-group'
  import type { ClassListInterface as c } from '../../_interface'
  import type { CheckboxGroupLabelType } from '../../checkbox-group/src/interface'
  import type { CheckboxGroupPropsType as a } from '../../checkbox-group/src/checkbox-group'
  import type {
    ComputedRef,
    Ref,
    ComponentInternalInstance,
    WritableComputedRef
  } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const groupProps: Ref<a | null> = ref(null)

  const getGroupInject = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    if (parentName && parentName === 'FCheckboxGroup') {
      groupProps.value = inject(checkboxGroupPropsKey) as a
    }
  }
  getGroupInject()

  const isGroup: ComputedRef<boolean> = computed((): boolean => {
    return !!groupProps.value || false
  })

  const modelValue: WritableComputedRef<CheckboxGroupLabelType> = computed({
    get () {
      if (isGroup.value) {
        return (groupProps.value as a)?.modelValue
      }
      return prop.modelValue
    },
    set (val) {
      if (isGroup.value) {
        !prop.disabled &&
          !groupProps.value?.disabled &&
          groupProps.value?.changeEvent(val)
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
      {
        'f-checkbox__selected': isChecked.value,
        'f-checkbox__bordered': groupProps.value?.border,
        'f-checkbox__disabled': prop.disabled || groupProps.value?.disabled
      }
    ]
  })
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
    />
    <span v-if="!groupProps?.border" class="f-checkbox__box" />
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
