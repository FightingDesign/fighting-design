<script lang="ts" setup name="FInput">
  import { Props, Emits } from './input'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import {
    FIconCrossVue,
    FIconEyeOffOutlineVue,
    FIconEyeOutlineVue
  } from '../../_components/svg/index'
  import type { Ref } from 'vue'
  import type { InputType } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const inputType: Ref<InputType> = ref<InputType>(prop.type)

  // 输入框输入
  const handleInput = (evt: Event): void => {
    emit('update:modelValue', (evt.target as HTMLInputElement).value)
    if (prop.onChange) {
      prop.onChange((evt.target as HTMLInputElement).value)
    }
  }

  // 点击搜索
  const handleSearch = (evt: Event): void => {
    if (prop.onSearch) {
      prop.onSearch({ evt, value: prop.modelValue })
    }
  }

  // 清空
  const handleClear = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', '')
  }

  // 按下回车
  const handleEnter = (evt: Event): void => {
    const { search, enterSearch, onEnter } = prop

    if (search && enterSearch) {
      handleSearch(evt)
    }

    if (onEnter) {
      onEnter(evt)
    }
  }

  // 查看密码
  const handleShowPassword = (target: 'down' | 'up'): void => {
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
        @click="handleClear"
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
