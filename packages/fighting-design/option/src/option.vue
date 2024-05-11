<script lang="ts" setup>
  import { Props } from './props'
  import { useRun } from '../../_hooks'
  import { isString, isArray, isObject } from '../../_utils'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import { inject, useSlots, computed, watch } from 'vue'
  import { warning } from '../../_utils'
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

    /** 获取到插槽的内容 */
    const content: VNodeNormalizedChildren | string = slot.default()[0].children

    // 如果不是字符串，暂时无法处理，先警告信息，返回空字符串
    if (!isString(content)) {
      warning('f-option', 'slot content is not a string')
      return ''
    }

    return content
  })

  /** 控制是否显示 */
  const isVisible = computed((): boolean => {
    // 父组件没有依赖则不显示
    if (!parentInject) {
      return false
    }

    // 在过滤属性存在并且是正在输入中，执行过滤操作
    if (parentInject.filter && parentInject.isFiltering && currentLabel) {
      return currentLabel.toString().includes(parentInject.inputValue)
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
  const getEffectiveValue = (...values: any[]): string => {
    // 没有数据返回空字符串
    if (!values || !values.length) {
      return ''
    }

    /** 尝试查找到有效的值 */
    const effectiveValue = values.find((value: any): boolean => {
      //  null、undefined、NaN 判断为假
      if (value === null || value === void 0 || Number.isNaN(value)) {
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
    return effectiveValue !== void 0 ? effectiveValue : values[values.length - 1]
  }

  /**
   * 最新的 label
   *
   * 返回优先级：插槽 > label > value
   */
  const currentLabel: SelectModelValue = getEffectiveValue(
    slotLabel.value,
    prop.label,
    prop.value
  )

  /**
   * 最新的 value
   *
   * 返回优先级：value > label > 插槽
   */
  const currentValue: SelectModelValue = getEffectiveValue(
    prop.value,
    prop.label,
    slotLabel.value
  )

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

    // 执行父组件的设置方法
    run(parentInject.setValue, currentValue, currentLabel, evt)
    // 点击之后关闭
    triggerInject && run(triggerInject.close)
  }

  /**
   * 初始化设置选中的值
   */
  const setInit = (): void => {
    if (!parentInject) {
      return
    }

    if (currentValue === parentInject.modelValue) {
      parentInject && run(parentInject.setValue, currentValue, currentLabel)
    }
  }

  /**
   * 监听一次数据的变化更新值，避免数据是异步设置的
   *
   * 只需要监听一次即可
   */
  const setWatch = (): void => {
    if (!parentInject) {
      return
    }

    watch(() => parentInject.modelValue, setInit, { once: true })
  }

  setInit() // 初始化设置选中的值
  setWatch() // 开始监听器
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
