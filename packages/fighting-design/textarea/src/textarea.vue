<script lang="ts" setup>
  import { Props } from './props'
  import { useInput, useList, useModel } from '../../_hooks'
  import { FIconCross } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { EMIT_UPDATE } from '../../_tokens'

  defineOptions({ name: 'FTextarea' })

  const prop = defineProps(Props)
  const emit = defineEmits([EMIT_UPDATE])

  const { keyword } = useModel<string>(
    (): string => prop.modelValue,
    (val: string): void => {
      emit(EMIT_UPDATE, val)
    }
  )
  const { handleInput, handleClear, handleChange } = useInput(prop, emit, keyword)
  const { classes, styles } = useList(prop, 'textarea')

  /** 类名列表 */
  const classList = classes(['disabled'], 'f-textarea')

  /** 样式列表 */
  const styleList = styles(['resize', 'fontSize'])
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
      @input="handleInput"
      @change="handleChange"
      @blur="onBlur"
      @focus="onFocus"
    />

    <!-- 清空按钮 -->
    <f-svg-icon
      v-if="clear"
      class="f-textarea__clear-btn"
      :icon="FIconCross"
      :size="14"
      :on-click="handleClear"
    />
  </div>
</template>
