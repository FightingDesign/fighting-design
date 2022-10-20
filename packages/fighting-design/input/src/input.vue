<script lang="ts" setup name="FInput">
  import { Props, Emits } from './input'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleInput = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    emit('change', (evt.target as HTMLInputElement).value)
  }
</script>

<template>
  <div class="f-input">
    <template v-if="type === 'textarea'">
      <textarea
        :id="id"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :autofocus="autofocus"
        :name="name"
        @input="handleInput"
      />
    </template>

    <template v-else>
      <input
        :id="id"
        :type="type"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :autofocus="autofocus"
        :name="name"
        @input="handleInput"
      />
    </template>
  </div>
</template>
