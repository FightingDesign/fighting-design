<script lang="ts" setup name="FOption">
  import { Props } from './props'
  import { inject, toRefs, useSlots } from 'vue'
  import { SELECT_PROPS_TOKEN } from '../../select/src/props'
  import type { SelectProvideInterface } from '../../select'
  import type { OptionPropsType } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: OptionPropsType = defineProps(Props)
  const slot = useSlots()

  // 获取父组件注入的依赖项
  const selectProps: SelectProvideInterface | undefined = inject(
    SELECT_PROPS_TOKEN,
    undefined
  )

  /**
   * 点击传入指定的 value
   * 让父组件同步 input
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    /**
     * 如果没有获取到注入的依赖项或者禁用状态
     * 则返回
     */
    if (!selectProps || prop.disabled) return

    const { value, label } = toRefs(prop)
    const slotLabel: string | undefined =
      slot.default && (slot.default()[0].children as string)

    /**
     * label 返回优先级：插槽 > label > value
     * value 返回优先级：value > label > 插槽
     */
    selectProps.setValue(
      slotLabel || label.value || value.value,
      value.value || label.value || slotLabel
    )
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
