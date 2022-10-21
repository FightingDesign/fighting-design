<script lang="ts" setup name="FCheckboxGroup">
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, Emits, checkboxGroupPropsKey } from './checkbox-group'
  import { sizeChange } from '../../_utils'
  import type {
    CheckboxGroupLabelType as a,
    ChangeEventInterface as b
  } from './interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface as c } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeEvent: b = (val: a): void => {
    emit('update:modelValue', val)
    emit('change', val)
  }

  const checkboxGroupProps = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(checkboxGroupPropsKey, checkboxGroupProps)

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { columnGap, rowGap } = prop

    return {
      columnGap: sizeChange(columnGap),
      rowGap: sizeChange(rowGap)
    } as const
  })

  const classList: ComputedRef<c> = computed((): c => {
    const { border, vertical, size } = prop

    return [
      'f-checkbox-group',
      {
        'f-checkbox-group__border': border,
        'f-checkbox-group__vertical': vertical,
        [`f-checkbox-group__${size}`]: size && border
      }
    ] as const
  })
</script>

<template>
  <div role="group" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
