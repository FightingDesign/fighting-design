<script lang="ts" setup name="FSelect">
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { useEmit } from '../../_hooks'
  import { provide, reactive, computed, useSlots } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { sizeChange } from '../../_utils'
  import type {
    CSSProperties,
    ComputedRef,
    VNode,
    Component,
    WritableComputedRef
  } from 'vue'
  import type {
    SelectPropsType,
    SelectSetValueInterface,
    SelectProvideInterface,
    SelectModelValueType
  } from './interface'
  import type { OptionPropsType } from '../../option'

  const prop: SelectPropsType = defineProps(Props)
  const slot = useSlots()
  const emit = defineEmits(
    useEmit((val: SelectModelValueType): boolean => !!val)
  )

  /**
   * 获取子元素 option
   *
   * 通过插槽插入的内容，过滤出有效的子元素返回
   */
  const options: ComputedRef<VNode[] | undefined> = computed(
    (): VNode[] | undefined => {
      if (!slot.default) return
      const vNodes: VNode[] = slot.default()
      return vNodes.filter((node: VNode) => {
        const name: string | undefined = (node.type as Component).name
        return name === 'FOption'
      })
    }
  )

  /**
   * 输入框绑定的值
   */
  const inputValue: WritableComputedRef<SelectModelValueType> = computed({
    /**
     * 通过获取到的子元素，计算当前绑定值对应的 label 展示文本框的内容
     */
    get () {
      // 如果插槽没内容，则返回空字符串
      if (!options.value) return ''
      const bound: VNode[] = options.value.filter((node: VNode): boolean => {
        return (node.props as OptionPropsType).value === prop.modelValue
      })
      return (bound[0] as OptionPropsType).props.label as SelectModelValueType
    },
    set (val: SelectModelValueType) {
      return val
    }
  })

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
  provide<SelectProvideInterface>(SELECT_PROPS_TOKEN, reactive({ setValue }))

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
