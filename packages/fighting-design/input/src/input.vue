<script lang="ts" setup name="FInput">
  import { Props, Emits } from './input'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconCrossVue } from '../../_components/svg/index'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleInput = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    emit('change', (evt.target as HTMLInputElement).value)
  }
</script>

<template>
  <div class="f-input">
    <div class="f-input__wrapper">
      <f-svg-icon v-if="icon" class="f-input__icon" :icon="icon" :size="13" />

      <input
        :id="id"
        class="f-input__input"
        :type="type"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        @input="handleInput"
      />

      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
      />
    </div>
  </div>
</template>
