<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(123)

  const change = (e: Event): void => console.log(e, 'change')
  const input = (e: Event): void => console.log(e, 'input')
  const blur = (e: Event): void => console.log(e, 'blur')
  const focus = (e: Event): void => console.log(e, 'focus')
</script>

<template>
  <f-input-number
    v-model="num"
    clear
    model="button"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  />
  <f-back-top>返回顶部</f-back-top>

  <!-- <input
    id="number"
    v-model="value"
    type="number"
    :max="20"
    @change="change"
    @input="input"
  /> -->
  <!-- <f-input v-model="value" />

  <f-input-number
    v-model="num"
    clear
    model="switch"
    :min="0"
    :max="50"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  />

  <f-input-number
    v-model="num"
    clear
    :min="0"
    :max="50"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  /> -->
</template>
