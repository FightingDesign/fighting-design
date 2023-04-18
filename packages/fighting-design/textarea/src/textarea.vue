<script lang="ts" setup name="FTextarea">
  import { Props } from './props'
  import { useInput, useList, useModel } from '../../_hooks'
  import { FIconCross } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { EMIT_UPDATE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: string | number): boolean => !!val
  })

  const { keyword } = useModel(prop, 'modelValue', emit, EMIT_UPDATE)
  const { handleInput, handleClear, handleChange } = useInput(prop, emit, keyword)
  const { classes, styles } = useList(prop, 'textarea')

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-textarea')

  /** 样式列表 */
  const styleList = styles(['resize'])
</script>

<template>
  <div :class="classList" :style="styleList">
    <textarea
      v-model="keyword"
      class="f-textarea__textarea"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :name="name"
      @input="handleInput($event)"
      @change="handleChange($event)"
      @blur="onBlur($event)"
      @focus="onFocus($event)"
    />

    <!-- 清空按钮 -->
    <f-svg-icon
      v-if="clear"
      class="f-textarea__clear-btn"
      :icon="FIconCross"
      :size="14"
      @click="handleClear"
    />
  </div>
</template>
