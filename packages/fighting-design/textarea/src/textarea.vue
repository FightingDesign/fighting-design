<script lang="ts" setup name="FTextarea">
  import { Props } from './props'
  import { useUpdateInput, useFilterProps } from '../../_hooks'
  import { isString } from '../../_utils'
  import { FIconCrossVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import type { TextareaPropsType } from './interface'
  import type { HandleEventInterface } from '../../_interface'
  import type { UseUpdateInputPropsInterface } from '../../_hooks/use-update-input/interface'

  const prop: TextareaPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: string): boolean => isString(val)
  })

  /**
   * 使用 useUpdateInput hook 实现同步数据
   *
   * useFilterProps 过滤出需要的参数
   */
  const { onInput, onClear, onChange } = useUpdateInput(
    useFilterProps<TextareaPropsType, UseUpdateInputPropsInterface>(prop, [
      'onChange',
      'onInput',
      'disabled'
    ]),
    emit
  )

  /**
   * 输入框输入
   *
   * @param evt 事件对象
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    onInput(evt)
  }

  /**
   * 文本输入 change 事件
   *
   * @param evt 事件对象
   */
  const handleChange: HandleEventInterface = (evt: Event): void => {
    onChange(evt)
  }
</script>

<template>
  <div class="f-textarea" :style="{ resize }">
    <textarea
      :class="['f-textarea__textarea', { 'f-textarea__disabled': disabled }]"
      :rows="rows"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :name="name"
      @input="handleInput"
      @blur="onBlur"
      @focus="onFocus"
      @change="handleChange"
    />

    <!-- 清空按钮 -->
    <f-svg-icon
      v-if="clear"
      class="f-textarea__clear-btn"
      :icon="FIconCrossVue"
      :size="14"
      @click="onClear"
    />
  </div>
</template>
