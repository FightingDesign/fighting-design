<script lang="ts" setup name="FCheckboxGroup">
  import { provide, reactive, toRefs } from 'vue'
  import { Props, Emits, checkboxGroupPropsKey } from './checkbox-group'
  import type {
    CheckboxGroupLabelType as a,
    ChangeEventInterface as b
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent: b = (val: a): void => {
    emit('update:modelValue', val)
    emit('change', val)
  }

  const checkboxGroupProps = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(checkboxGroupPropsKey, checkboxGroupProps)
</script>

<template>
  <div
    role="group"
    :class="[
      'f-checkbox-group',
      {
        'f-checkbox-group-border': border,
        [`f-checkbox-group-${size}`]: size && border
      }
    ]"
  >
    <slot />
  </div>
</template>
