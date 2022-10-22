<script lang="ts" setup name="FInput">
  import { Props, Emits } from './input'
  import { FSvgIcon } from '../../svg-icon'
  import { FButton } from '../../button'
  import { FIconCrossVue } from '../../_components/svg/index'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

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
</script>

<template>
  <div class="f-input">
    <div :class="['f-input__wrapper', { 'f-input__disabled': disabled }]">
      <f-svg-icon v-if="icon" class="f-input__icon" :icon="icon" :size="13" />

      <input
        :id="id"
        class="f-input__input"
        :type="type"
        :max="max"
        :min="min"
        :maxlength="maxLength"
        :value="modelValue"
        :disabled="disabled"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        @input="handleInput"
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />

      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
        @click="handleClear"
      />
    </div>

    <div v-if="search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <f-button type="primary">搜索</f-button>
      </slot>
    </div>
  </div>
</template>
