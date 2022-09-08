<script lang="ts" setup>

import {radioGroupKey} from './const'
import { provide, reactive,nextTick, toRefs} from 'vue';
import { radioGroupEmits, radioGroupProps } from './radioGroup'
import type  { RadioGroupProps  }from './radioGroup'

const changeEvent = (value: RadioGroupProps['modelValue']):void => {
  emit('update:modelValue', value)
  console.log(value);
  nextTick(() => emit('change', value))
}

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)
  
provide(radioGroupKey, reactive({
    ...toRefs(props),
    changeEvent
  }))

  </script>
  
<template>
  <div>
    <slot/> 
  </div>
</template>
