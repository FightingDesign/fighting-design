<script lang="ts">
  export default {
    name: 'FCheckboxGroup'
  }
</script>

<script lang="ts" setup>
  import { nextTick, provide, reactive, toRefs } from 'vue'
  import { Props, Emits, checkboxGroupCtxKey } from './checkbox-group'
  import type { CheckboxLabelType } from './interface'

  const props = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent = async (val: CheckboxLabelType): Promise<void> => {
    emit('update:modelValue', val)
    await nextTick()
    emit('change', val)
  }

  const checkboxGroup = reactive({
    ...toRefs(props),
    changeEvent
  })

  provide(checkboxGroupCtxKey, checkboxGroup)
</script>
<template>
  <div class="f-checkbox-group">
    <slot />
  </div>
</template>
