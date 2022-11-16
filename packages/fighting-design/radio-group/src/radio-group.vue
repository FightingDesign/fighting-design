<script lang="ts" setup name="FRadioGroup">
  import { Props, RADIO_GROUP_PROPS_kEY } from './props'
  import { provide, reactive, toRefs, computed } from 'vue'
  import { isString, isBoolean, isNumber } from '../../_utils'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type {
    RadioChangeInterface,
    RadioLabelType,
    RadioGroundPropsType
  } from './interface'

  const prop: RadioGroundPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: RadioLabelType): boolean =>
      isString(val) || isNumber(val) || isBoolean(val)
  })

  const changeEvent: RadioChangeInterface = (value: RadioLabelType): void => {
    emit('update:modelValue', value)
    prop.change && prop.change(value)
  }

  const RadioGround: RadioGroundPropsType = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide<RadioGroundPropsType>(RADIO_GROUP_PROPS_kEY, RadioGround)

  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { vertical, border, size } = prop

      return [
        'f-radio-group',
        {
          'f-radio-group__vertical': vertical,
          'f-radio-group__border': border,
          [`f-radio-group__${size}`]: size && border
        }
      ] as const
    }
  )

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
