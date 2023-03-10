<script lang="ts" setup name="FTextarea">
  import { Props } from './props'
  import { useInput, useProps, useList } from '../../_hooks'
  import { isString, isNumber } from '../../_utils'
  import { FIconCrossVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { EMIT_UPDATE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: string | number): boolean => isString(val) || isNumber(val)
  })

  const { filter } = useProps(prop)
  const { onInput, onClear, onChange } = useInput(filter(['onChange', 'onInput', 'disabled']), emit)
  const { classes, styles } = useList(prop, 'textarea')

  /**
   * 输入框输入
   *
   * @param { Object } evt 事件对象
   */
  const handleInput = (evt: Event): void => onInput(evt)

  /**
   * 文本输入 change 事件
   *
   * @param { Object } evt 事件对象
   */
  const handleChange = (evt: Event): void => onChange(evt)

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-textarea')

  /** 样式列表 */
  const styleList = styles(['resize'])
</script>

<template>
  <div :class="classList" :style="styleList">
    <textarea
      class="f-textarea__textarea"
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
