<script lang="ts" setup name="FCheckboxGroup">
  import { Props, CHECKBOX_GROUP_PROPS_KEY } from './props'
  import { provide, reactive, toRefs, computed } from 'vue'
  import { sizeChange, isArray, runCallback } from '../../_utils'
  import type {
    CheckboxGroupPropsType,
    CheckboxGroupLabelType,
    CheckboxGroupChangeEventInterface,
    CheckboxGroupInjectPropsType
  } from './interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'

  const prop: CheckboxGroupPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: CheckboxGroupLabelType): boolean => isArray(val)
  })

  /**
   * 绑定值发生改变时候触
   */
  const changeEvent: CheckboxGroupChangeEventInterface = (
    val: CheckboxGroupLabelType
  ): void => {
    emit('update:modelValue', val)
    runCallback(prop.onChange, val)
  }

  // 需要注入的依赖项
  const checkboxGroupProps: CheckboxGroupInjectPropsType = reactive({
    ...toRefs(prop),
    changeEvent
  } as const)

  provide(CHECKBOX_GROUP_PROPS_KEY, checkboxGroupProps)

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
