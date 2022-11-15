<script lang="ts" setup>
  import { FSlider } from '@/index'
import { ref } from 'vue';

  const value = ref(25)

  const disabled = ref(false)
</script>

<template>
  <div style="padding: 0 100px">
    <f-slider v-model="value" :disabled="disabled" :vertical="false" :step="1" :min="0" :max="100"></f-slider>

    <button @click="disabled=!disabled">禁用</button>
  </div>
  <div style="height: 500px;">
    <f-slider vertical></f-slider>
  </div>
</template>
