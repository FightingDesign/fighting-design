<script lang="ts" setup name="FCheckboxGroup">
  import { nextTick, provide, reactive, toRefs } from 'vue'
  import { Props, Emits, checkboxGroupCtxKey } from './checkbox-group'
  import type { CheckboxLabelType } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent = async (val: CheckboxLabelType): Promise<void> => {
    emit('update:modelValue', val)
    await nextTick()
    emit('change', val)
  }

  const checkboxGroup = reactive({
    ...toRefs(prop),
    changeEvent
  })

  provide(checkboxGroupCtxKey, checkboxGroup)
</script>

<template>
  <div class="f-checkbox-group">
    <slot />
  </div>
</template>
