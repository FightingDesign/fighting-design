<script lang="ts" setup name="FSelect">
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { useEmit } from '../../_hooks'
  import { provide, reactive, ref, computed } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type {
    SelectPropsType,
    SelectSetValueInterface,
    SelectProvideInterface,
    SelectModelValueType
  } from './interface'

  const prop: SelectPropsType = defineProps(Props)
  const emit = defineEmits(
    useEmit((val: SelectModelValueType): boolean => !!val)
  )

  // 绑定值
  const inputValue: Ref<string> = ref<string>('')

  /**
   * 设置新的值
   * @param newValue 新的 value 值
   * @param newLabel 新增 label 值
   */
  const setValue: SelectSetValueInterface = (
    newValue: string,
    newLabel: SelectModelValueType
  ): void => {
    inputValue.value = newValue
    emit('update:modelValue', newLabel)
  }

  /**
   * 向自组件注入依赖项
   */
  provide<SelectProvideInterface>(
    SELECT_PROPS_TOKEN,
    reactive({
      setValue
    })
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width } = prop

    return {
      '--f-select-width': sizeChange(width)
    } as CSSProperties
  })
</script>

<template>
  <div class="f-select" :style="styleList">
    <f-dropdown trigger="click">
      <f-input
        v-model="inputValue"
        readonly
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :clear="clear"
      />

      <template #content>
        <slot />
      </template>
    </f-dropdown>
  </div>
</template>
