<script lang="ts" setup>
  import { Props, Emits } from './radio'
  import { computed, inject } from 'vue'
  import { radioGroupKey } from '../../radio-group/src/radio-group'
  import type { RadioGroundProps } from '../../radio-group/src/radio-group'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleChange = (): void => {
    !prop.disabled && emit('change', prop.modelValue)
  }

  const radioGroup = inject(radioGroupKey) as RadioGroundProps & {
    changeEvent(val: unknown): void
  }
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
  const name = 'radio'
  const isChecked = computed(() => modelValue.value == prop.label)
</script>

<template>
  <label
    :class="[
      'f-radioLabel',
      isChecked && 'radio-isChecked',
      (disabled || radioGroup.disabled) && 'radio-isDisabled'
    ]"
  >
    <input
      v-model="modelValue"
      class="f-radio"
      :value="label"
      :disabled="disabled"
      type="radio"
      :name="name"
      @change="handleChange"
    >
    <span
      :style="{ backgroundColor: radioGroup?.textColor }"
      class="f-radio-inner"
    />
    <span>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
