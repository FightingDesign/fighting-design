<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(20)
</script>

<template>
  {{ value1 }}
  <f-slider v-model="value1" :step="2" />
</template>

<style>
  .f-slider {
    /* margin: 50px; */
  }
</style>
