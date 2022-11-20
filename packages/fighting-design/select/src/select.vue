<script lang="ts" setup name="FSelect">
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { provide, reactive, computed, useSlots } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { sizeChange, isObject, isArray } from '../../_utils'
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
    SelectModelValueType,
    SelectChildrenInterface
  } from './interface'
  import type { OptionPropsType } from '../../option'

  const prop: SelectPropsType = defineProps(Props)
  const slot = useSlots()
  const emit = defineEmits({
    'update:modelValue': (val: SelectModelValueType): boolean => !!val
  })

  /**
   * 寻找亲孩子
   */
  const getOptions = (children: VNode[], componentName: string): VNode[] => {
    let components: VNode[] = []

    // 传入的子节点必须是一个有效数组
    if (isArray(children) && children.length) {
      children.forEach((child: VNode): void => {
        // 获取到每个组件的 name
        const name: string | undefined | boolean =
          isObject(child.type) && (child.type as Component).name

        // 如果是 FOption 则的亲孩子节点
        if (name === componentName) {
          components.push(child)
        }

        /**
         * 否则不是亲孩子就继续判断，孩子的孩子是不是一个有效数组
         *
         * 如果是则继续递归遍历
         *
         */
        if (
          name !== componentName &&
          child.children &&
          isArray(child.children)
        ) {
          const childChildren: VNode[] = getOptions(
            child.children,
            componentName
          )
          /**
           * 将得到的返回值和 components 合并
           *
           * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
           */
          components = components.concat(childChildren)
        }
      })
    }

    return components
  }

  /**
   * 获取子元素 option
   *
   * 通过插槽插入的内容，过滤出有效的子元素返回
   */
  const options: ComputedRef<VNode[]> = computed((): VNode[] => {
    // 如果没有插槽内容，返回空数组
    if (!slot.default) return []
    return getOptions(slot.default(), 'FOption')
  })

  /**
   * 输入框绑定的值
   */
  const inputValue: WritableComputedRef<string> = computed({
    /**
     * 通过获取到的子元素，计算当前绑定值对应的 label 展示文本框的内容
     */
    get () {
      // 如果插槽没内容，则返回空字符串
      if (!options.value.length) return ''

      /**
       * 通过插槽内容
       *
       * 过滤出和绑定值相同的那一项
       */
      const currentOption: VNode[] = options.value.filter(
        (node: VNode): boolean => {
          const optionProp: OptionPropsType = node.props as OptionPropsType

          // 判断是否有传递 props
          if (optionProp) {
            return optionProp.value
              ? optionProp.value === prop.modelValue
              : optionProp.label === prop.modelValue
          }

          /**
           * 如果没有传递 props 则根据插槽来判断
           *
           * 放心，这里一定会有插槽，子组件已经做了判断
           */
          return (
            (node as SelectChildrenInterface).children.default()[0].children ===
            prop.modelValue
          )
        }
      )

      /**
       * 如果没有通过插槽找出和绑定值相同的
       *
       * 则返回空
       */
      if (!currentOption.length) return ''

      // 获取到当前满足要求的子元素
      const children: OptionPropsType = currentOption[0] as OptionPropsType
      // 获取到当前子元素的插槽内容
      const slot: string | undefined =
        children.children && children.children.default()[0].children
      // 获取到当前子元素的 label 参数
      const label: string | undefined = children.props && children.props.label
      // 获取到当前子元素的 value 参数
      const value: string | undefined = children.props && children.props.value
      // 优先级：插槽 > label > value
      return slot || label || (value && value.toString()) || ''
    },
    set (val: string) {
      return val
    }
  })

  /**
   * 设置新的值
   *
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
    <f-dropdown trigger="click" :disabled="disabled">
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
