<script lang="ts" setup name="FInput">
  import { Props, Emits } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import {
    FIconCrossVue,
    FIconEyeOffOutlineVue,
    FIconEyeOutlineVue
  } from '../../_svg'
  import { useUpdateInput, useFilterProps } from '../../_hooks'
  import type { Ref } from 'vue'
  import type { InputType, InputHandleShowPasswordInterface } from './interface'
  import type { InputPropsType } from './props'
  import type { HandleEventInterface } from '../../_interface'
  import type { UseUpdateInputPropsInterface } from '../../_hooks/use-update-input/interface'

  const prop: InputPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  // type 类型
  const inputType: Ref<InputType> = ref<InputType>(prop.type)
  /**
   * 使用 useUpdateInput hook 实现同步数据
   *
   * useFilterProps 过滤出需要的参数
   */
  const { onInput, onClear } = useUpdateInput(
    useFilterProps<InputPropsType, UseUpdateInputPropsInterface>(prop, [
      'onChange',
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

  /**
   * 点击搜索
   */
  const handleSearch: HandleEventInterface = (evt: Event): void => {
    if (prop.onSearch) {
      prop.onSearch({ evt, value: prop.modelValue })
    }
  }

  /**
   * 按下回车
   */
  const handleEnter: HandleEventInterface = (evt: Event): void => {
    const { search, enterSearch, onEnter } = prop

    if (search && enterSearch) {
      handleSearch(evt)
    }

    if (onEnter) {
      onEnter(evt)
    }
  }

  /**
   * 查看密码
   */
  const handleShowPassword: InputHandleShowPasswordInterface = (
    target: 'down' | 'up'
  ): void => {
    if (target === 'down') {
      inputType.value = 'text'
      return
    }
    inputType.value = 'password'
  }
</script>

<template>
  <div :class="['f-input', { [`f-input__${size}`]: size }]">
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
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />

      <!-- 左侧 icon -->
      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
        @click="onClear"
      />

      <!-- 查看密码 -->
      <f-svg-icon
        v-if="type === 'password' && showPassword"
        class="f-input__show-password"
        :icon="
          inputType === 'text' ? FIconEyeOutlineVue : FIconEyeOffOutlineVue
        "
        :size="14"
        @mousedown="handleShowPassword('down')"
        @mouseup="handleShowPassword('up')"
      />
    </div>

    <!-- 搜索框 -->
    <div v-if="search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <f-button type="primary" :size="size">搜索</f-button>
      </slot>
    </div>
  </div>
</template>
