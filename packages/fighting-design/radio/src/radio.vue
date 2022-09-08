<script lang="ts" setup>
import  {radioEmits,radioProps} from './radio'
import  { radioGroupKey} from './const'
import { computed, inject} from 'vue';

  const props= defineProps(radioProps);

  const emit = defineEmits(radioEmits)

  const handleChange= ():void =>{
    !props.disabled &&  emit('change', props.modelValue)
  }
  
  const radioGroup =  inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)

  const modelValue = computed({
    get (){
      return  isGroup.value ? radioGroup?.modelValue  :  props.modelValue
    },
    set (val) {
      if (isGroup.value) {
        !radioGroup?.disabled &&  radioGroup?.changeEvent(val || '')
      } else {
        if(!props.disabled) return
          emit('change',val || '')
          emit('update:modelValue',val || '')
        }
    }
  })
  const name= 'radio'
  const isChecked = computed(()=>modelValue.value == props.label)
  </script>
  
<template>
  <label 
    :class="['f-radioLabel',isChecked && 'radio-isChecked',(props.disabled || radioGroup.disabled) && 'radio-isDisabled']">
    <input 
      v-model="modelValue"
      class="f-radio"
      :value="props.label"
      :disabled="props.disabled"
      type="radio"
      :name="name"
      @change="handleChange"
    >
    <span 
      :style="{'backgroundColor':radioGroup?.textColor}"
      class="f-radio-inner"/>
    <span>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
