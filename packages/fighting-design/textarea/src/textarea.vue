<script lang="ts" setup name="FTextarea">
  import { Props, Emits } from './props'
  import type { TextareaPropsType } from './interface'
  import type { HandleEventInterface } from '../../_interface'

  const prop: TextareaPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  /**
   * 输入框输入
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    if (prop.onChange) {
      prop.onChange((evt.target as HTMLInputElement).value)
    }
  }
</script>

<template>
  <div class="f-textarea">
    <textarea
      :class="['f-textarea__textarea', { 'f-textarea__disabled': disabled }]"
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :name="name"
      @input="handleInput"
      @blur="onBlur"
      @focus="onFocus"
    />
  </div>
</template>
