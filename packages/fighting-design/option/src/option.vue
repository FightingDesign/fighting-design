<script lang="ts" setup name="FOption">
  import { Props } from './props'
  import { inject } from 'vue'
  import { SELECT_PROPS_TOKEN } from '../../select/src/props'
  import type { SelectProvideInterface } from '../../select'
  import type { OptionPropsType } from './interface'

  const prop: OptionPropsType = defineProps(Props)

  // 获取父组件注入的依赖项
  const selectProps: SelectProvideInterface = inject(
    SELECT_PROPS_TOKEN
  ) as SelectProvideInterface

  /**
   * 点击传入指定的 value
   * 让父组件同步 input
   */
  const handleClick = (): void => {
    selectProps.setValue(prop.value)
  }
</script>

<template>
  <div class="f-option" @click="handleClick">
    <slot v-if="$slots.default" />

    {{ value }}
  </div>
</template>
