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
  <div class="f-checkbox-group" role="group">
    <slot />
  </div>
</template>
