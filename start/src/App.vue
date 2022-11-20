<script lang="ts" setup>
  import { FSlider } from '@/index'
  import { ref } from 'vue';

  const value = ref([0, 20])

  const disabled = ref(false)
</script>

<template>
  <div style="padding: 0 100px">
    <f-slider v-model="value" :step="1" :min="0" :max="20"></f-slider>
    <br />
    <br />
    <br />
    <button @click="disabled=!disabled">禁用</button>
  </div>
</template>
