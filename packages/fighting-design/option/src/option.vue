<script lang="ts" setup name="FOption">
  import { Props } from './props'
  import { inject, toRefs } from 'vue'
  import { SELECT_PROPS_TOKEN } from '../../select/src/props'
  import type { SelectProvideInterface } from '../../select'
  import type { OptionPropsType } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'

  const prop: OptionPropsType = defineProps(Props)

  // 获取父组件注入的依赖项
  const selectProps: SelectProvideInterface = inject(
    SELECT_PROPS_TOKEN
  ) as SelectProvideInterface

  /**
   * 点击传入指定的 value
   * 让父组件同步 input
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    const { disabled, value, label } = toRefs(prop)

    if (disabled.value) return
    selectProps.setValue(value.value || label.value)
  }
</script>

<template>
  <div
    :class="['f-option', { 'f-option__disabled': disabled }]"
    @click="handleClick"
  >
    <slot v-if="$slots.default" />

    {{ label || value }}
  </div>
</template>
