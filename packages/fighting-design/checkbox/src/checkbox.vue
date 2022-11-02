<script lang="ts" setup name="FCheckbox">
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { Props, Emits } from './props'
  import { checkboxGroupPropsKey } from '../../checkbox-group/src/props'
  import type { ClassListInterface as c } from '../../_interface'
  import type { CheckboxGroupLabelType } from '../../checkbox-group/src/interface'
  import type { CheckboxGroupPropsType as a } from '../../checkbox-group/src/props'
  import type {
    ComputedRef,
    Ref,
    ComponentInternalInstance,
    WritableComputedRef
  } from 'vue'
  import type { CheckboxPropsType } from './props'

  const prop: CheckboxPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const groupProps: Ref<a | null> = ref(null)

  const getGroupInject = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    if (parentName && parentName === 'FCheckboxGroup') {
      groupProps.value = inject<CheckboxPropsType>(checkboxGroupPropsKey) as a
    }
  }
  getGroupInject()

  const modelValue: WritableComputedRef<CheckboxGroupLabelType> = computed({
    get () {
      return (
        (groupProps.value && groupProps.value.modelValue) || prop.modelValue
      )
    },
    set (val) {
      if (groupProps.value && !groupProps.value.disabled) {
        groupProps.value.changeEvent(val)
        return
      }
      if (prop.disabled) return
      emit('update:modelValue', val)
    }
  })

  const isChecked: ComputedRef<boolean> = computed((): boolean => {
    const val: CheckboxGroupLabelType = modelValue.value
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
        'f-checkbox__bordered': groupProps.value && groupProps.value.border,
        'f-checkbox__disabled':
          prop.disabled || (groupProps.value && groupProps.value.disabled)
      }
    ] as const
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
      :disabled="disabled || (!!groupProps && groupProps.disabled)"
    />
    <span v-if="!(groupProps && groupProps.border)" class="f-checkbox__box" />
    <span class="f-checkbox__text">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
