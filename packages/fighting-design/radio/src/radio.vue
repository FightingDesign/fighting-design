<script lang="ts" setup name="FRadio">
  import { Props, Emits } from './radio'
  import { computed, inject, getCurrentInstance, ref } from 'vue'
  import { RadioGroupPropsKey } from '../../radio-group/src/radio-group'
  import type {
    ComputedRef,
    WritableComputedRef,
    ComponentInternalInstance,
    Ref
  } from 'vue'
  import type {
    RadioGroundInterface as a,
    RadioLabelType
  } from '../../radio-group/src/interface'
  import type {
    OrdinaryFunctionInterface as b,
    ClassListInterface as c
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const radioGroup: Ref<null | a> = ref(null)

  // 尝试获取父组件注入的依赖
  const loadParentInject: b = (): void => {
    const { parent } = getCurrentInstance() as ComponentInternalInstance
    const parentName: string | undefined = (parent as ComponentInternalInstance)
      .type.name

    if (parentName && parentName === 'FRadioGroup') {
      radioGroup.value = inject(RadioGroupPropsKey) as a
    }
  }
  loadParentInject()

  // 检测是否获取到父组件的依赖
  const isGroup: ComputedRef<boolean> = computed(
    (): boolean => !!radioGroup.value
  )

  const handleChange: b = (): void => {
    if (prop.disabled) {
      return
    }
    emit('change', prop.modelValue)
  }

  const modelValue: WritableComputedRef<RadioLabelType> = computed({
    get () {
      return isGroup.value
        ? (radioGroup.value as a).modelValue
        : prop.modelValue
    },
    set (val) {
      if (isGroup.value) {
        !(radioGroup.value as a).disabled &&
          (radioGroup.value as a).changeEvent(val || '')
      } else {
        if (prop.disabled) return
        emit('change', val || '')
        emit('update:modelValue', val || '')
      }
    }
  })

  const isChecked: ComputedRef<boolean> = computed((): boolean => {
    return (modelValue.value === prop.label) as boolean
  })

  const classList: ComputedRef<c> = computed((): c => {
    const { disabled } = prop

    return [
      'f-radio',
      {
        'f-radio__checked': isChecked.value,
        'f-radio__margin': !radioGroup.value,
        'f-radio__disabled': disabled || radioGroup.value?.disabled
      }
    ] as const
  })
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
      @change="handleChange"
    />
    <span v-if="!radioGroup?.border" class="f-radio__circle" />
    <span class="f-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
