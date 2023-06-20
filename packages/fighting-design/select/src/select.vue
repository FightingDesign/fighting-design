<script lang="ts" setup>
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { useList, useRun } from '../../_hooks'
  import { provide, computed, useSlots, ref, reactive, toRef } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { getChildren } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronDown } from '../../_svg'
  import type { VNode, Slots } from 'vue'
  import type { SelectProvide, SelectModelValue, SelectChildren } from './interface'

  defineOptions({ name: 'FSelect' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()
  const modelValue = defineModel<SelectModelValue>({ required: true, default: null })

  const { run } = useRun()
  const { styles } = useList(prop, 'select')

  /** 当前绑定的值 */
  const keyword = computed({
    get: (): string => {
      /** 如果插槽没内容，则返回空字符串 */
      if (!options.value.length) return ''

      /**
       * 通过插槽内容
       *
       * 过滤出和绑定值相同的那一项
       */
      const currentOption: VNode[] = options.value.filter((node: VNode): boolean => {
        /** 获取到子组件的 props */
        const optionProp = node.props

        /** 判断是否有传递 props */
        if (optionProp) {
          return optionProp.value
            ? `${optionProp.value}` === `${prop.modelValue}`
            : `${optionProp.label}` === `${prop.modelValue}`
        }

        /**
         * 如果没有传递 props 则根据插槽来判断
         *
         * 放心，这里一定会有插槽，子组件已经做了判断
         */
        return (node as SelectChildren).children.default()[0].children === prop.modelValue
      })

      /**
       * 如果没有通过插槽找出和绑定值相同的
       *
       * 则返回空
       */
      if (!currentOption.length) return ''

      /** 获取到当前满足要求的子元素 */
      const firstChildren: VNode = currentOption[0]

      /** 获取到当前子元素的插槽内容 */
      const slot: string | undefined =
        firstChildren.children &&
        (firstChildren.children as { default: Function }).default()[0].children
      /** 获取到当前子元素的 label 参数 */
      const label: string | undefined = firstChildren.props?.label
      /** 获取到当前子元素的 value 参数 */
      const value: string | undefined = firstChildren.props?.value

      /** 返回优先级：插槽 > label > value */
      return slot || label || (value && value.toString()) || ''
    },
    set: (val: string): string => val
  })

  /**
   * 获取子元素 option
   *
   * 通过插槽插入的内容，过滤出有效的子元素返回
   */
  const options = computed((): VNode[] => {
    /** 如果没有插槽内容，返回空数组 */
    if (!slot.default) return []

    return getChildren(slot.default(), 'FOption')
  })

  /**
   * 设置新的值
   *
   * @param { string } newValue 新的 value 值
   * @param { string | number | boolean } newLabel 新增 label 值
   * @param { Object } evt 事件对象
   */
  const setValue = (
    newValue: SelectModelValue,
    newLabel: SelectModelValue,
    evt: MouseEvent
  ): void => {
    /** 设置文本框展示的内容 */
    keyword.value = newValue.toString()

    /** 如果最新的 value 和绑定的 value 不一致时，才触发 change 事件 */
    if (newLabel !== prop.modelValue) {
      run(prop.onChange, newLabel, newValue, evt)
    }

    modelValue.value = newValue
    console.log(newValue)
  }

  /** 向自组件注入依赖项 */
  provide<SelectProvide>(
    SELECT_PROPS_TOKEN,
    reactive({ setValue, modelValue: toRef(prop, 'modelValue') })
  )

  /** 样式列表 */
  const styleList = styles(['width'])

  /** 当前是否聚焦 */
  const isFocus = ref(false)
</script>

<template>
  <div class="f-select" :style="styleList">
    <f-dropdown trigger="click" :disabled="disabled" :width="width">
      <f-input
        v-model="keyword"
        readonly
        :name="name"
        :size="size"
        :disabled="disabled"
        :placeholder="placeholder"
        :clear="clear"
        :on-focus="() => (isFocus = true)"
        :on-blur="() => (isFocus = false)"
      >
        <template #after>
          <f-svg-icon
            color="#bababa"
            :class="['f-select__arrow', { 'f-select__arrow-active': isFocus }]"
            :size="13"
            :icon="FIconChevronDown"
          />
        </template>
      </f-input>

      <template #content>
        <div class="f-select__content">
          <slot />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
