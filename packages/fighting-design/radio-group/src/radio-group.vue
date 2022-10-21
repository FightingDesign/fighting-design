<script lang="ts" setup name="FRadioGroup">
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, Emits, RadioGroupPropsKey } from './radio-group'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface as a } from '../../_interface'
  import type {
    RadioChangeEventInterface as b,
    RadioLabelType
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent: b = (value: RadioLabelType): void => {
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
        'f-radio-group__vertical': vertical,
        'f-radio-group__border': border,
        [`f-radio-group__${size}`]: size && border
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
  <div role="radiogroup" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
