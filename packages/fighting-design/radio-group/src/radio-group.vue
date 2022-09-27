<script lang="ts">
  export default {
    name: 'FRadioGroup'
  }
</script>

<script lang="ts" setup>
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, Emits, RadioGroupPropsKey } from './radio-group'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'
  import type { changeEventInterface as b, labelType } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent: b = (value: labelType): void => {
    emit('update:modelValue', value)
    emit('change', value)
  }

  const RadioGround = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(RadioGroupPropsKey, RadioGround)

  const classList: ComputedRef<a> = computed((): a => {
    const { vertical, border, size } = prop

    return [
      'f-radio-group',
      {
        'f-radio-group-vertical': vertical,
        [`f-radio-group-border f-radio-group-${size}`]: border
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { columnGap, rowGap } = prop

    return {
      columnGap: sizeChange(columnGap),
      rowGap: sizeChange(rowGap)
    } as const
  })
</script>

<template>
  <div rule="radio" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
