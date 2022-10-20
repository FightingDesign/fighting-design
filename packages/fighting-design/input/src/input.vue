<script lang="ts" setup name="FInput">
  import { Props, Emits } from './input'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleInput = (evt: InputEvent): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    emit('change', (evt.target as HTMLInputElement).value)
  }
</script>

<template>
  <div class="f-input">
    <template v-if="type === 'textarea'">
      <textarea :value="modelValue" @input="handleInput" />
    </template>

    <template v-else>
      <input :type="type" :value="modelValue" @input="handleInput" />
    </template>
  </div>
</template>
