<script lang="ts" setup name="FTextarea">
  import { Props, Emits } from './props'
  import { useUpdateInput, useFilterProps } from '../../_hooks'
  import { FIconCrossVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import type { TextareaPropsType } from './interface'
  import type { HandleEventInterface } from '../../_interface'
  import type { UseUpdateInputPropsInterface } from '../../_hooks/use-update-input/interface'

  const prop: TextareaPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  /**
   * 使用 useUpdateInput hook 实现同步数据
   *
   * useFilterProps 过滤出需要的参数
   */
  const { onInput, onClear } = useUpdateInput(
    useFilterProps<TextareaPropsType, UseUpdateInputPropsInterface>(prop, [
      'change',
      'disabled'
    ]),
    emit
  )

  /**
   * 输入框输入
   */
  const handleInput: HandleEventInterface = (evt: Event): void => {
    onInput(evt)
  }
</script>

<template>
  <div class="f-textarea">
    <textarea
      :class="['f-textarea__textarea', { 'f-textarea__disabled': disabled }]"
      :style="{ resize }"
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :name="name"
      @input="handleInput"
      @blur="onBlur"
      @focus="onFocus"
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
