<template>
  <label for="FSwitch" :class="FSwitchClass">
    <input
      id="FSwitch"
      type="checkbox"
      hidden
      :name="name"
      :checked="modelValue"
      @input="onInput"
    />
    <span class="f-switch-roll" :style="rollStyle">
      <i v-if="icon" :class="['f-icon', icon]" />
    </span>
  </label>
</template>

<script lang="ts" setup name="FSwitch">
  import { computed } from 'vue'
  import { Props, Emits } from './switch'

  const prop = defineProps(Props)
  const emit = defineEmits(['update:modelValue'])

  const onInput = (): void => {
    emit('update:modelValue', !prop.modelValue)
  }

  const rollStyle = computed(() => {
    const { modelValue } = prop

    return {
      left: modelValue ? '0px' : '20px'
    }
  })

  const FSwitchClass = computed(() => {
    const { size, modelValue } = prop

    return [
      'f-switch',
      {
        [`f-switch-${size}`]: size,
        'f-switch-close': !modelValue
      }
    ]
  })
</script>
