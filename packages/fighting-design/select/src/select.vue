<script lang="ts" setup name="FSelect">
  import { Props, SELECT_PROPS_TOKEN } from './props'
  import { FInput } from '../../input'
  import { provide, reactive, ref } from 'vue'
  import { Emits } from '../../input/src/props'
  import { FDropdown } from '../../dropdown'
  import type {
    SelectPropsType,
    SelectSetValueInterface,
    SelectProvideInterface
  } from './interface'

  const prop: SelectPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const inputValue = ref(prop.modelValue)

  /**
   * 设置新的值
   */
  const setValue: SelectSetValueInterface = (newVal: string): void => {
    inputValue.value = newVal
    emit('update:modelValue', newVal)
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
</script>

<template>
  <div class="f-select">
    <f-dropdown>
      <f-input v-model="inputValue" readonly />

      <template #content>
        <slot />
      </template>
    </f-dropdown>
  </div>
</template>
