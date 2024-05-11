<script lang="ts" setup>
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { useList, useRun } from '../../_hooks'
  import { provide, computed, useSlots, ref, reactive, toRef, nextTick } from 'vue'
  import { FDropdown } from '../../dropdown'
  import { getChildren, isFunction } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { FEmpty } from '../../empty'
  import { FIconChevronDown } from '../../_svg'
  import type { VNode, Slots } from 'vue'
  import type { SelectProvide, SelectModelValue } from './interface'

  defineOptions({ name: 'FSelect' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()
  const modelValue = defineModel<SelectModelValue>({
    default: '',
    type: [String, Number]
  })

  const { run } = useRun()
  const { styles } = useList(prop, 'select')

  /** 子节点的 label 配置项参数 */
  const childrenLabels = ref<{ slot: string; show: boolean }[]>([])
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
   * 获取子元素 option
   *
   * 通过插槽插入的内容，过滤出有效的子元素返回
   */
  const options = computed((): VNode[] => {
    // 如果没有插槽内容，返回空数组
    if (!slot.default) return []

    return getChildren(slot.default(), 'FOption')
  })

  /**
   * 设置新的值
   *
   * @param { string | number } currentValue 新的 value 值
   * @param { string | number } currentLabel 新增 label 值
   * @param { Object } evt 事件对象
   */
  const setValue = (
    currentValue: SelectModelValue,
    currentLabel: SelectModelValue,
    evt?: MouseEvent
  ): void => {
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
  }

  /** 下拉菜单开启之后的回调 */
  const onOpen = async (): Promise<void> => {
    await nextTick()

    childrenLabels.value = options.value.map((item: VNode) => {
      /** 获取到当前子元素的插槽内容 */
      const slot: string =
        item.children && (item.children as { default: Function }).default()[0].children

      return { slot, show: true }
    })

    /** 获取到当前选中的元素 */
    const active =
      selectContentRef.value &&
      selectContentRef.value.querySelector('.f-option.f-option__active')

    if (active && isFunction(active.scrollIntoView)) {
      /**
       * 将元素滚动到可是区域
       *
       * @see Element.scrollIntoView() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
       */
      active.scrollIntoView({ block: 'end' })
    }
  }

  // 向子组件注入依赖项
  provide<SelectProvide>(
    SELECT_PROPS_TOKEN,
    reactive({
      setValue,
      childrenLabels,
      modelValue: toRef(prop, 'modelValue'),
      filter: toRef(prop, 'filter'),
      inputValue,
      isFiltering
    })
  )

  /**
   * 文本框失去焦点
   */
  const inputBlur = (): void => {
    isFocus.value = false

    if (prop.filter) {
      isFiltering.value = false
    }

    // 失去焦点的时候如果子节点的 title 中不包含输入项目，则情况文本框的内容
    if (!isHaveValues.value) {
      inputValue.value = ''
    }
  }

  const inputFocus = (): void => {
    isFocus.value = true

    // if (prop.filter) {
    //   isFiltering.value = true
    // }
  }

  const inputInput = (): void => {
    console.log('change')
    isFiltering.value = true
  }
</script>

<template>
  <div class="f-select" :style="style">
    <f-dropdown trigger="click" :disabled :width :on-open="onOpen">
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
        <div ref="selectContentRef" class="f-select__content">
          <slot v-if="isHaveValues" />
          <f-empty v-else content="暂无数据" />
        </div>
      </template>
    </f-dropdown>
  </div>
</template>
