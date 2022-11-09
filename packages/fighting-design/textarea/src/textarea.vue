<script lang="ts" setup name="FTextarea">
  import { Props, Emits } from './props'
  import { useUpdateInput } from '../../_hooks'
  import type { TextareaPropsType } from './interface'
  import type { HandleEventInterface } from '../../_interface'

  const prop: TextareaPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const { input } = useUpdateInput(emit, prop.change)

  /**
   * 输入框输入
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    input(evt)
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
