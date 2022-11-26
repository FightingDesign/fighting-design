<script lang="ts" setup>
  import {ref} from 'vue'

  const value1 = ref(1)
  
  const value2 = ref([0, 20])

  const disabled = ref(false)
</script>

<template>
  <div style="padding: 0 100px">
    <f-slider v-model="value1" :step="5" :min="0" :max="20" :disabled="disabled"></f-slider>
    <br />
    <br />
    <f-slider v-model="value2" :step="5" :min="0" :max="20" :disabled="disabled"></f-slider>
    <br />
    <br />
    <button @click="disabled=!disabled">禁用</button>
  </div>
</template>
