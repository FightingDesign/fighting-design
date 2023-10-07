<script lang="ts" setup>
  import { Props } from './props'
  import { useRun } from '../../_hooks'
  import { isString } from '../../_utils'
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
   * 点击传入指定的 value
   *
   * 让父组件同步 input
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    /**如果没有获取到注入的依赖项或者禁用状态 则返回 */
    if (!parentInject || prop.disabled) return

    const { value, label } = toRefs(prop)

    /**
     * 最新的 label
     *
     * 返回优先级：插槽 > label > value
     */
    const newLabel: SelectModelValue = slotLabel.value || label.value || value.value
    /**
     * 最新的 value
     *
     * 返回优先级：value > label > 插槽
     */
    const newValue: SelectModelValue = value.value || label.value || slotLabel.value

    /** 执行父组件的设置方法 */
    parentInject && run(parentInject.setValue, newValue, newLabel, evt)
    /** 点击之后关闭 */
    triggerInject && run(triggerInject.close)
  }
</script>

<template>
  <div
    v-if="$slots.default || label || value"
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
