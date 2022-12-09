<script lang="ts" setup name="FOption">
  import { Props } from './props'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import { inject, toRefs, useSlots } from 'vue'
  import { SELECT_PROPS_TOKEN } from '../../select/src/props'
  import type { SelectProvideInterface } from '../../select'
  import type { TriggerProvide } from '../../trigger'

  const prop = defineProps(Props)
  const slot = useSlots()

  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<SelectProvideInterface | null>(
    SELECT_PROPS_TOKEN,
    null
  )
  /**
   * 获取到 trigger 注入的依赖项
   */
  const triggerInject = inject<TriggerProvide | null>(
    TRIGGER_CLOSE_KEY,
    null
  ) as TriggerProvide

  /**
   * 点击传入指定的 value
   *
   * 让父组件同步 input
   */
  const handleClick = (): void => {
    /**
     * 如果没有获取到注入的依赖项或者禁用状态
     * 则返回
     */
    if (!parentInject || prop.disabled) return

    const { value, label } = toRefs(prop)
    const slotLabel: string | undefined =
      slot.default && (slot.default()[0].children as string)

    /**
     * label 返回优先级：插槽 > label > value
     * value 返回优先级：value > label > 插槽
     */
    parentInject.setValue(
      slotLabel || label.value || value.value,
      value.value || label.value || slotLabel
    )

    // 点击之后关闭
    triggerInject.handelClose()
  }
</script>

<template>
  <div
    v-if="$slots.default || label || value"
    :class="['f-option', { 'f-option__disabled': disabled }]"
    @click="handleClick"
  >
    <slot v-if="$slots.default" />

    <!-- 如果插槽不存在。就显示 label 或者 value -->
    <template v-else>
      {{ label || value }}
    </template>
  </div>
</template>
