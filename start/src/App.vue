<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('')
</script>

<template>
  <!-- <h1>{{ value5 }}</h1> -->

  <!-- <f-calendar v-model:date="date" />

  <input v-model="value5" type="date" /> -->

  <!-- <f-date-picker v-model:date="value5"></f-date-picker> -->
  <f-time-picker v-model:time="value5"></f-time-picker>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
