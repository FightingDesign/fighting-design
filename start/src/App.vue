<script lang="ts" setup>
  import { ref } from 'vue'

  // const value1 = ref('')

  const num = ref(3)

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
</script>

<template>
  <div style="height: 100px"></div>

  <f-input
    model-value="hello"
    size="large"
    clear
    readonly
    @change="handleInput1"
  ></f-input>

  <div style="height: 100px"></div>

  <f-input-number
    clear
    autofocus
    :model-value="num"
    model="button"
    size="large"
    :min="0"
    :max="50"
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
