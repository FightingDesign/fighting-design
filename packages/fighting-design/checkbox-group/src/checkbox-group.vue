<script lang="ts" setup name="FCheckboxGroup">
  import { provide, reactive, toRefs, computed } from 'vue'
  import { Props, Emits, checkboxGroupPropsKey } from './props'
  import { sizeChange } from '../../_utils'
  import type {
    CheckboxGroupPropsType,
    CheckboxGroupLabelType,
    CheckboxGroupChangeEventInterface,
    CheckboxGroupInjectPropsType
  } from './interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop: CheckboxGroupPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  /**
   * 绑定值发生改变时候触
   */
  const changeEvent: CheckboxGroupChangeEventInterface = (
    val: CheckboxGroupLabelType
  ): void => {
    emit('update:modelValue', val)
    prop.change && prop.change(val)
  }

  // 需要注入的依赖项
  const checkboxGroupProps: CheckboxGroupInjectPropsType = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(checkboxGroupPropsKey, checkboxGroupProps)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { columnGap, rowGap } = prop

    return {
      columnGap: sizeChange(columnGap),
      rowGap: sizeChange(rowGap)
    } as const
  })

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { border, vertical, size } = prop

      return [
        'f-checkbox-group',
        {
          'f-checkbox-group__border': border,
          'f-checkbox-group__vertical': vertical,
          [`f-checkbox-group__${size}`]: size && border
        }
      ] as const
    }
  )
</script>

<template>
  <div role="group" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
