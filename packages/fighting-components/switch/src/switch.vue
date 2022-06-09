<template>
  <div
    class="f-switch"
    :class="[
      `f-switch-${modelValue}`,
      `f-switch-${size}`,
      {
        'f-switch-disabled': disabled
      }
    ]"
    @click="onChange"
  >
    <span
      v-if="props.inactiveText"
      class="f-switch__label f-switch__label--left"
      :style="{ color: modelValue === inactiveValue ? inactiveColor : '' }"
    >
      {{ props.inactiveText }}
    </span>
    <div
      class="f-switch__inner"
      :class="{
        'f-switch__inner--check': modelValue === activeValue,
        'f-switch__inner--square': square
      }"
      :style="innerStyle"
    >
      <span class="ball" :style="ballStyle">
        <i v-if="icon" class="f-icon" :class="icon" />
      </span>
    </div>

    <span
      v-if="props.activeText"
      class="f-switch__label f-switch__label--right"
      :class="[`f-switch__label--${size}`]"
      :style="{ color: modelValue === activeValue ? activeColor : '' }"
    >
      {{ props.activeText }}
    </span>
  </div>
</template>
<script lang="ts" setup name="FSwitch">
  import { computed } from 'vue'
  import { Props, Emits } from './switch'

  const props = defineProps(Props)
  const emits = defineEmits(Emits)

  const innerStyle = computed(() => {
    const {
      activeColor,
      inactiveColor,
      activeValue,
      inactiveValue,
      modelValue,
      square
    } = props
    if (modelValue === activeValue && activeColor) {
      if (square) {
        return {
          'border-color': activeColor
        }
      }
      return {
        'background-color': activeColor
      }
    } else if (modelValue === inactiveValue && inactiveColor) {
      if (square) {
        return {
          'border-color': inactiveColor
        }
      }
      return {
        'background-color': inactiveColor
      }
    }
  })

  const ballStyle = computed(() => {
    const {
      activeColor,
      inactiveColor,
      activeValue,
      inactiveValue,
      modelValue,
      square
    } = props
    if (modelValue === activeValue && activeColor) {
      if (square) {
        return {
          'background-color': activeColor
        }
      }
      return {
        'border-color': activeColor
      }
    } else if (modelValue === inactiveValue && inactiveColor) {
      if (square) {
        return {
          'background-color': inactiveColor
        }
      }
      return {
        'border-color': inactiveColor
      }
    }
  })

  const onChange = () => {
    const { activeValue, inactiveValue, modelValue, disabled } = props
    if (disabled) return
    let returnValue: boolean | string | number = false
    if (modelValue === activeValue) {
      returnValue = inactiveValue
    } else if (modelValue === inactiveValue) {
      returnValue = activeValue
    }
    emits('update:modelValue', returnValue)
    emits('change', returnValue)
  }
</script>
