<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')

  const num = ref(46)
  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, 2000)

  const change = (e: Event): void => console.log(e, 'change')
  const input = (e: Event): void => console.log(e, 'input')
  const blur = (e: Event): void => console.log(e, 'blur')
  const focus = (e: Event): void => console.log(e, 'focus')
</script>

<template>
  <f-tag close type="default">默认</f-tag>
  <f-tag close type="primary">普通</f-tag>
  <f-tag close type="warning">警告</f-tag>
  <f-tag close type="success">成功</f-tag>
  <f-tag close type="danger">失败</f-tag>

  <f-input-number v-model="value1" />
  <f-input-number v-model="value1" model="switch" />
  <f-input-number v-model="value1" model="button" />

  <f-input-number
    v-model="num"
    clear
    model="button"
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
  />
  -->
</template>
