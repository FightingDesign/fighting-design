<script lang="ts" setup>
  import { ref } from 'vue'

  // const value1 = ref('')

  const num = ref(3)
  const value1 = ref('')

  const handleInput1 = (val: unknown): void => {
    console.log('handleInput1-val :>> ', val)
    // num.value += val
  }

  const handleClick = (val: number): void => {
    console.log('handleClick-val :>> ', val)
    // num.value += +val
    num.value = val
  }

  const handleChange = (val: unknown): void => {
    console.log('handleChange-val :>> ', val)
    // num.value += val
  }

  const handleBlur = (e: unknown): void => {
    console.log('blur-e :>> ', e)
  }

  const handleFocus = (e: unknown): void => {
    console.log('focus-e :>> ', e)
  }

  const handleEnter = (e: unknown): void => {
    console.log('handleEnter--e :>> ', e)
  }

  const change = (e) => console.log(e)
  const input = (e) => console.log(e)
</script>

<template>
  <f-input
    v-model="value1"
    type="text"
    disabled
    placeholder="请输入...."
    :on-change="change"
    :on-input="input"
  />

  <f-input-number
    clear
    autofocus
    :model-value="num"
    model="button"
    size="large"
    :min="0"
    :max="50"
    disabled
    @update:model-value="handleClick"
    @change="handleChange"
    @blur="handleBlur"
    @focus="handleFocus"
    @enter="handleEnter"
  ></f-input-number>

  <f-input-number
    clear
    autofocus
    :model-value="num"
    model="switch"
    size="large"
    :min="0"
    :max="50"
    @update:model-value="handleClick"
    @change="handleChange"
    @blur="handleBlur"
    @focus="handleFocus"
    @enter="handleEnter"
  ></f-input-number>
</template>
