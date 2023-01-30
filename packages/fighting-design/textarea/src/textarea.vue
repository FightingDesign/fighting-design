<script lang="ts" setup name="FTextarea">
  import { Props } from './props'
  import { useUpdateInput, useProps } from '../../_hooks'
  import { isString, isNumber } from '../../_utils'
  import { FIconCrossVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { EMIT_UPDATE } from '../../_tokens'
  import type { UseUpdateInputProps } from '../../_hooks'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: string | number): boolean => isString(val) || isNumber(val)
  })

  const { filter } = useProps(prop)

  /** 使用 useUpdateInput hook 实现同步数据 */
  const { onInput, onClear, onChange } = useUpdateInput(
    filter(['onChange', 'onInput', 'disabled']) as unknown as UseUpdateInputProps,
    emit
  )

  /**
   * 输入框输入
   *
   * @param { Object } evt 事件对象
   */
  const handleInput = (evt: Event): void => {
    onInput(evt)
  }

  /**
   * 文本输入 change 事件
   *
   * @param { Object } evt 事件对象
   */
  const handleChange = (evt: Event): void => {
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
    <f-svg-icon v-if="clear" class="f-textarea__clear-btn" :icon="FIconCrossVue" :size="14" @click="onClear" />
  </div>
</template>
