<script lang="ts" setup>
  import { Props, Emits } from './radio'
  import { computed, inject } from 'vue'
  import { RadioGroupPropsKey } from '../../radio-group/src/radio-group'
  import type { RadioGroundInterface as a } from '../../radio-group/src/interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleChange = (): void => {
    !prop.disabled && emit('change', prop.modelValue)
  }

  const radioGroup = inject(RadioGroupPropsKey) as a
  const isGroup = computed(() => !!radioGroup)

  const modelValue = computed({
    get () {
      return isGroup.value ? radioGroup.modelValue : prop.modelValue
    },
    set (val) {
      if (isGroup.value) {
        !radioGroup?.disabled && radioGroup.changeEvent(val || '')
      } else {
        if (!prop.disabled) return
        emit('change', val || '')
        emit('update:modelValue', val || '')
      }
    }
  })
  const isChecked = computed(() => modelValue.value == prop.label)
</script>

<template>
  <label
    :class="[
      'f-radio',
      {
        'f-radio-checked': isChecked,
        'f-radio-disabled': disabled || radioGroup.disabled
      }
    ]"
  >
    <input
      v-model="modelValue"
      hidden
      type="radio"
      :value="label"
      :disabled="disabled"
      :name="name"
      @change="handleChange"
    >
    <span class="f-radio-inner" />
    <span class="f-radio-text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
