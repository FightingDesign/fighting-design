<script lang="ts" setup>
  import { Props } from './props'
  import { useRun } from '../../_hooks'
  import { isString, isArray, isObject } from '../../_utils'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import { inject, toRefs, useSlots, computed } from 'vue'
  import { SELECT_PROPS_TOKEN } from '../../select/src/props'
  import type { SelectProvide, SelectModelValue } from '../../select'
  import type { TriggerProvide } from '../../trigger'
  import type { Slots, VNodeNormalizedChildren } from 'vue'

  defineOptions({ name: 'FOption' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()

  const { run } = useRun()

  /** 获取父组件注入的依赖项 */
  const parentInject: SelectProvide | null = inject(SELECT_PROPS_TOKEN, null)
  /** 获取到 trigger 注入的依赖项 */
  const triggerInject: TriggerProvide | null = inject(TRIGGER_CLOSE_KEY, null)

  /** 获取插槽内容 */
  const slotLabel = computed((): string => {
    if (!slot.default) {
      return ''
    }

    const _slot: VNodeNormalizedChildren | string = slot.default()[0].children

    return isString(_slot) ? _slot : ''
  })

  /** 控制是否显示 */
  const isVisible = computed((): boolean => {
    // 父组件没有依赖则不显示
    if (!parentInject) {
      return false
    }

    // 没有 filter 属性，则展示
    if (!parentInject.filter) {
      return true
    }

    /** 获取到 label */
    const label = slotLabel.value || prop.label.toString() || prop.value.toString()
    /** 获取到选中的项目 */
    const currentItem = parentInject.childrenLabels.find(item => {
      return item.slot === label
    })

    if (currentItem) {
      return currentItem.show
    }

    return true
  })

  /** 标签选中状态 */
  const labelActive = computed((): boolean => {
    /** 获取到 value 的值 */
    const val: string | number = prop.value || prop.label || slotLabel.value

    if (parentInject) {
      return val === parentInject.modelValue
    }

    return false
  })

  /**
   * 获取有效的值
   *
   * 如果三个值都为假，返回最后一个
   *
   * 空数组或者空对象判断为假
   *
   * 0 判断为真
   *
   * null、undefined、NaN 判断为假
   *
   * @param {*} values 参数集合
   */
  const getEffectiveValue = (...values: any[]): any => {
    // 没有数据返回空字符串
    if (!values || !values.length) {
      return ''
    }

    /** 尝试查找到有效的值 */
    const effectiveValue = values.find((value: any): boolean => {
      //  null、undefined、NaN 判断为假
      if (value === null || value === undefined || Number.isNaN(value)) {
        return false
      }

      // 空数组或者空对象判断为假
      if (isArray(value) || isObject(value)) {
        return Object.keys(value).length > 0
      }

      // 0 判断为真
      if (value === 0) {
        return true
      }

      return !!value
    })

    // 如果三个值都为假，返回最后一个
    return effectiveValue !== undefined ? effectiveValue : values[values.length - 1]
  }

  /**
   * 点击传入指定的 value
   *
   * 让父组件同步 input
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    // 如果没有获取到注入的依赖项或者禁用状态 则返回
    if (!parentInject || prop.disabled) return

    const { value, label } = toRefs(prop)

    /**
     * 最新的 label
     *
     * 返回优先级：插槽 > label > value
     */
    const currentLabel: SelectModelValue = getEffectiveValue(
      slotLabel.value,
      label.value,
      value.value
    )

    /**
     * 最新的 value
     *
     * 返回优先级：value > label > 插槽
     */
    const currentValue: SelectModelValue = getEffectiveValue(
      value.value,
      label.value,
      slotLabel.value
    )

    // 执行父组件的设置方法
    parentInject && run(parentInject.setValue, currentValue, currentLabel, evt)
    // 点击之后关闭
    triggerInject && run(triggerInject.close)
  }
</script>

<template>
  <div
    v-if="$slots.default || label || value"
    v-show="isVisible"
    :class="[
      'f-option',
      { 'f-option__disabled': disabled, 'f-option__active': labelActive }
    ]"
    @click="handleClick"
  >
    <slot v-if="$slots.default" />

    <!-- 如果插槽不存在。就显示 label 或者 value -->
    <template v-else>
      {{ label || value }}
    </template>
  </div>
</template>
