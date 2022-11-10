<script lang="ts" setup name="FSelect">
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { provide, reactive, ref, computed, watch } from 'vue'
  import { Emits } from '../../input/src/props'
  import { FDropdown } from '../../dropdown'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef, Ref } from 'vue'
  import type {
    SelectPropsType,
    SelectSetValueInterface,
    SelectProvideInterface
  } from './interface'

  const prop: SelectPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  // 绑定值
  const inputValue: Ref<string> = ref<string>(prop.modelValue)

  /**
   * 监视绑定值发生变化同步数据
   */
  watch(
    (): string => inputValue.value,
    (newVal: string): void => {
      emit('update:modelValue', newVal)
    }
  )

  /**
   * 设置新的值
   */
  const setValue: SelectSetValueInterface = (newVal: string): void => {
    inputValue.value = newVal
  }

  /**
   * 向自组件注入依赖项
   */
  provide<SelectProvideInterface>(
    SELECT_PROPS_TOKEN,
    reactive({
      setValue
    })
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width } = prop

    return {
      '--f-select-width': sizeChange(width)
    } as CSSProperties
  })
</script>

<template>
  <div class="f-select" :style="styleList">
    <f-dropdown trigger="click">
      <f-input
        v-model="inputValue"
        readonly
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :clear="clear"
      />

      <template #content>
        <slot />
      </template>
    </f-dropdown>
  </div>
</template>
