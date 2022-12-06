<script lang="ts" setup name="FRadioGroup">
  import { Props, RADIO_GROUP_PROPS_kEY } from './props'
  import { provide, reactive, toRefs, computed } from 'vue'
  import { isString, isBoolean, isNumber } from '../../_utils'
  import { useRun } from '../../_hooks'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'
  import type { RadioLabelType, RadioGroundProps } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: RadioLabelType): boolean =>
      isString(val) || isNumber(val) || isBoolean(val)
  })

  /**
   * 改变同步数据
   *
   * @param value 最新值
   */
  const changeEvent = (value: RadioLabelType): void => {
    emit('update:modelValue', value)
    useRun(prop.onChange, value)
  }

  /**
   * 需要注入的依赖项
   */
  const RadioGround = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  // 注入依赖项
  provide<RadioGroundProps>(RADIO_GROUP_PROPS_kEY, RadioGround)

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
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

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
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
