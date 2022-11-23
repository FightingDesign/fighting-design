<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(123)

  // const change = (e: Event): void => console.log(e, 'change')
  // const input = (e: Event): void => console.log(e, 'input')
  // const blur = (e: Event): void => console.log(e, 'blur')
  // const focus = (e: Event): void => console.log(e, 'focus')

  // const abc = ref('')
  // const value = ref(1)
  const value1 = ref('')
  // const value2 = ref('')
</script>

<template>
  <h1>{{ num }}</h1>

  <f-date-picker v-model:date="value1" />
  <f-date-picker v-model:date="value1" />

  <!-- <f-date-picker v-model:data="value2" /><f-date-picker v-model:data="value2" /> -->

  <!-- <f-select v-model="value" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <f-select v-model="value" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select> -->

  <input v-model="num" type="number" :max="130" :min="120" />

  <br />

  <f-input-number v-model="num" clear model="button" :max="130" :min="120" />
  <f-input-number v-model="num" clear model="switch" :max="130" :min="120" />
  <!-- 
     :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
   -->
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
