<script lang="ts" setup>
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { useList, useRun } from '../../_hooks'
  import { provide, ref, reactive, nextTick } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { FSvgIcon } from '../../svg-icon'
  import { FEmpty } from '../../empty'
  import { FIconChevronDown } from '../../_svg'
  import type { SelectProvide, SelectModelValue } from './interface'

  defineOptions({ name: 'FSelect' })

  const prop = defineProps(Props)
  const modelValue = defineModel<SelectModelValue>({
    default: '',
    type: [String, Number]
  })

  const { run } = useRun()
  const { styles } = useList(prop, 'select')

  /** 样式列表 */
  const style = styles(['width'])
  /** 当前是否聚焦 */
  const isFocus = ref(false)
  /** 展开的内容元素 */
  const selectContentRef = ref<HTMLDivElement | undefined>()
  /** 是否有搜索内容 */
  const isHaveValues = ref(true)
  /** 文本框绑定的值 */
  const inputValue = ref('')
  /** 是否正在输入过滤搜索中 */
  const isFiltering = ref(false)

  /**
   * 设置新的值
   *
   * @param { string | number } currentValue 新的 value 值
   * @param { string | number } currentLabel 新增 label 值
   * @param { Object } evt 事件对象
   */
  const setValue = async (
    currentValue: SelectModelValue,
    currentLabel: SelectModelValue,
    evt?: MouseEvent
  ): Promise<void> => {
    // 避免文本框内容不同步的问题
    await nextTick()

    /**
     * 如果最新的 value 和绑定的 value 不一致时
     *
     * 而且还需要带有 evt 对象的时候才需要触发 change 事件
     *
     * 如果没有 evt 对象，则代表是首次赋值，则不予触发
     */
    if (currentLabel !== prop.modelValue && evt) {
      run(prop.onChange, currentValue, currentLabel, evt)
    }

    modelValue.value = currentValue
    inputValue.value = currentLabel?.toString()
    isFiltering.value = false
  }

  /** 下拉菜单开启之后的回调 */
  const dropdownOpen = async (): Promise<void> => {
    await nextTick()

    /** 获取到当前选中的元素 */
    const activeNode = selectContentRef.value?.querySelector('.f-option.f-option__active')

    /**
     * 需要有值，并且是元素节点
     *
     * @see Node https://developer.mozilla.org/zh-CN/docs/Web/API/Node
     * @see instanceof https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    if (activeNode && activeNode instanceof Node) {
      /**
       * 将元素滚动到可是区域
       *
       * @see Element.scrollIntoView() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
       */
      activeNode.scrollIntoView({ block: 'end' })
    }
  }

  /**
   * 文本框失去焦点
   */
  const inputBlur = (): void => {
    isFocus.value = false

    // 失去焦点的时候如果子节点的 title 中不包含输入项目，则清空文本框的内容
    if (!isHaveValues.value) {
      inputValue.value = ''
    }
  }

  /**
   * 文本框获取焦点
   */
  const inputFocus = (): void => {
    isFocus.value = true
  }

  /**
   * 文本框输入
   */
  const inputInput = (): void => {
    isFiltering.value = true
  }

  /**
   * 清空选择器
   */
  const handleInputClear = (): void => {
    modelValue.value = ''
  }

  // 向子组件注入依赖项
  provide<SelectProvide>(
    SELECT_PROPS_TOKEN,
    reactive({
      inputValue,
      isFiltering,
      modelValue,
      filter: prop.filter,
      setValue,
      onBeforeChange: prop.onBeforeChange
    })
  )
</script>

<template>
  <div class="f-select" :style="style">
    <f-dropdown trigger="click" :disabled :width :on-open="dropdownOpen">
      <f-input
        v-model="inputValue"
        :readonly="!filter"
        :name
        :size
        :disabled
        :width
        :placeholder
        :clear
        :on-focus="inputFocus"
        :on-blur="inputBlur"
        :on-input="filter ? inputInput : void 0"
        @clear="handleInputClear"
      >
        <template #after="{ isHover }">
          <f-svg-icon
            v-if="!clear || !(isHover && (modelValue || inputValue))"
            color="#bababa"
            :class="['f-select__arrow', { 'f-select__arrow-active': isFocus }]"
            :size="13"
            :icon="FIconChevronDown"
          />
        </template>
      </f-input>

      <template #content>
        <div ref="selectContentRef" class="f-select__content">
          <slot v-if="isHaveValues" />
          <f-empty v-else content="暂无数据" />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
