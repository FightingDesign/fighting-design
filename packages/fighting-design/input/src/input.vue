<script lang="ts" setup name="FInput">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { FSwap } from '../../swap'
  import { ref, toRefs } from 'vue'
  import { FIconCrossVue, FIconEyeOffOutlineVue, FIconEyeOutlineVue } from '../../_svg'
  import { isString, isNumber } from '../../_utils'
  import { EMIT_UPDATE } from '../../_tokens'
  import { useUpdateInput, useProps, useRun, useList } from '../../_hooks'
  import type { InputType } from './interface'
  import type { UseUpdateInputProps } from '../../_hooks'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: string | number): boolean => isString(val) || isNumber(val)
  })

  const { filter } = useProps(prop)

  const { styles } = useList(prop, 'input')

  /** type 类型 */
  const inputType = ref<InputType>(prop.type)

  /** 是否展示密码 */
  const showPass = ref<boolean>(false)

  const { onInput, onClear, onChange } = useUpdateInput(
    filter(['onChange', 'onInput', 'disabled', 'type']) as unknown as UseUpdateInputProps,
    emit
  )

  /**
   * 文本输入 input 事件
   *
   * @param evt 事件对象
   */
  const handleInput = (evt: Event): void => {
    onInput(evt)
  }

  /**
   * 文本输入 change 事件
   *
   * @param evt 事件对象
   */
  const handleChange = (evt: Event): void => {
    onChange(evt)
  }

  /**
   * 点击搜索
   *
   * @param evt 事件对象
   */
  const handleSearch = (evt: Event): void => {
    useRun(prop.onSearch, { evt, value: prop.modelValue })
  }

  /**
   * 按下回车
   *
   * @param evt 事件对象
   */
  const handleEnter = (evt: Event): void => {
    const { search, enterSearch, onEnter } = toRefs(prop)

    if (search.value && enterSearch.value) {
      handleSearch(evt)
    }

    useRun(onEnter.value, evt)
  }

  /** 查看密码 */
  const handleShowPassword = (): void => {
    if (showPass.value) {
      inputType.value = 'text'
      showPass.value = true
      return
    }
    inputType.value = 'password'
    showPass.value = false
  }

  /** 样式列表 */
  const styleList = styles(['placeholderColor'])
</script>

<template>
  <div :class="['f-input', { [`f-input__${size}`]: size }]" :style="styleList">
    <div :class="['f-input__wrapper', { 'f-input__disabled': disabled }]">
      <f-svg-icon v-if="icon" class="f-input__icon" :icon="icon" :size="13" />

      <input
        class="f-input__input"
        :type="inputType"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        @input="handleInput"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />

      <!-- 清除 icon -->
      <f-svg-icon v-if="clear" class="f-input__clear-btn" :icon="FIconCrossVue" :size="14" @click="onClear" />

      <!-- 左侧 icon -->
      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="14" />

      <!-- 查看密码 -->
      <f-swap
        v-if="showPassword"
        v-model="showPass"
        class="f-input__show-password"
        type="swap"
        :icon-on="FIconEyeOutlineVue"
        :icon-off="FIconEyeOffOutlineVue"
        :size="14"
        :on-change="handleShowPassword"
      />

      <slot name="after" />
    </div>

    <!-- 搜索框 -->
    <div v-if="search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <f-button type="primary" :size="size">搜索</f-button>
      </slot>
    </div>
  </div>
</template>
