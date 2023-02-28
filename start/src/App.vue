<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(50)
</script>

<template>
  <div style="width: 500px; margin: auto">
    <h2>{{ value1 }}</h2>
    <f-slider v-model="value1" :min="0" :max="100" />
  </div>
</template>
