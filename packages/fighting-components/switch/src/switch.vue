<template>
  <div
    class="f-switch"
    :class="[`f-switch-${modelValue}`, `f-switch-${size}`]"
    @click="check = !check"
  >
    <span
      v-if="props.inActiveText"
      class="f-switch__label f-switch__label--left"
      :style="{ color: !check ? inActiveColor : '' }"
    >
      {{ props.inActiveText }}
    </span>

    <div
      class="f-switch__inner"
      :class="{ 'f-switch__inner--check': modelValue === activeValue }"
      :style="innerStyle"
    >
      <span class="ball" :style="ballStyle">
        <i class="f-icon f-icon-Daytimemode" />
      </span>
    </div>

    <span
      v-if="props.activeText"
      class="f-switch__label f-switch__label--right"
      :class="[`f-switch__label--${size}`]"
      :style="{ color: check ? activeColor : '' }"
    >
      {{ props.activeText }}
    </span>
  </div>
</template>
<script lang="ts" setup name="FSwitch">
  import { computed, onMounted, ref, watch } from 'vue'
  import type { Ref } from 'vue'
  import { Props, Emits } from './switch'

  const props = defineProps(Props)
  const emits = defineEmits(Emits)

  const check: Ref<boolean> = ref<boolean>(false)

  const innerStyle = computed(() => {
    const { activeColor, inActiveColor } = props
    if (check.value && activeColor) {
      return {
        'background-color': activeColor
      }
    } else if (!check.value && inActiveColor) {
      return {
        'background-color': inActiveColor
      }
    }
  })

  const ballStyle = computed(() => {
    const { activeColor, inActiveColor } = props
    if (check.value && activeColor) {
      return {
        'border-color': activeColor
      }
    } else if (!check.value && inActiveColor) {
      return {
        'border-color': inActiveColor
      }
    }
  })

  watch(check, (value: boolean) => {
    const { activeValue, inActiveValue } = props
    let returnValue: boolean | string | number = false
    if (value) {
      returnValue = activeValue || true
    } else {
      returnValue = inActiveValue || false
    }
    emits('update:modelValue', returnValue)
    emits('change', returnValue)
  })

  onMounted(() => {
    check.value = props.modelValue === props.activeValue
  })
</script>
