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
    emit('change', (evt.target as HTMLInputElement).value)
  }

  // 点击搜索
  const handleSearch = (evt: MouseEvent): void => {
    if (prop.onSearch) {
      prop.onSearch({ evt, value: prop.modelValue })
    }
  }
</script>

<template>
  <div class="f-input">
    <div class="f-input__wrapper">
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
      />

      <f-svg-icon
        v-if="clear"
        class="f-input__clear-btn"
        :icon="FIconCrossVue"
        :size="14"
      />
    </div>

    <div v-if="search" class="f-input__search">
      <f-button type="primary" @click="handleSearch">搜索</f-button>
    </div>
  </div>
</template>
