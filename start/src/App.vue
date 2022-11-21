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
  <f-input-number v-model="value1" />
  <f-input-number v-model="value1" model="switch" />
  <f-input-number v-model="value1" model="button" />

  <f-skeleton animated size="large" />
  <f-skeleton animated size="middle" />
  <f-skeleton animated size="small" />
  <f-skeleton animated size="mini" />

  <f-skeleton :loading="loading">
    <h1>1111</h1>
  </f-skeleton>

  <f-skeleton rounded />

  <f-skeleton circled />

  <f-breadcrumb-item icon-color="red">首页</f-breadcrumb-item>
  <f-breadcrumb-item>文章</f-breadcrumb-item>
  <f-breadcrumb-item>列表</f-breadcrumb-item>

  <br />

  <f-breadcrumb icon-color="red">
    <f-breadcrumb-item>首页</f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>

  <br />
  <br />
  <br />
  <br />

  <f-list list-style="decimal">
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>

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
</template>
