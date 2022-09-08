<script lang="ts" setup name="FRadioGroup">
  import { provide, reactive, nextTick, toRefs } from 'vue'
  import { Props, Emits, radioGroupKey } from './radio-group'
  import type { RadioGroundProps } from './radio-group'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent = (value: RadioGroundProps['modelValue']): void => {
    emit('update:modelValue', value)
    nextTick(() => emit('change', value))
  }

  provide(
    radioGroupKey,
    reactive({
      ...toRefs(prop),
      changeEvent
    })
  )
</script>

<template>
  <div class="f-radio-group">
    <slot />
  </div>
</template>
