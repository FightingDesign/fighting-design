<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('')

  const click = (a): void => {
    console.log(a)
  }

  const visible2 = ref(false)
  const direction = ref('center')

  const onShow = () => {
    visible2.value = true
  }
</script>

<template>
  <f-button type="primary" :click="click">主要按钮</f-button>

  <!-- <h1>{{ value5 }}</h1> -->

  <!-- <f-calendar v-model:date="date" />

  <input v-model="value5" type="date" /> -->

  <f-date-picker v-model:date="value5"></f-date-picker>
  <f-time-picker v-model:time="value5"></f-time-picker>

  <f-button type="primary" @click="onShow">从下往上开</f-button>

  <f-popup v-model:visible="visible2" :direction="direction" :padding="30">
    <h3>h12</h3>
  </f-popup>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
