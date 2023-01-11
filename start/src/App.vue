<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(3)
</script>

<template>
  <f-input-number model="switch" size="large" />
  <f-input-number model="switch" size="middle" />
  <f-input-number model="switch" size="small" />
  <f-input-number model="switch" size="mini" />
  <!-- <f-input-number v-model="value1" model="switch" /> -->
  <!-- <f-input-number v-model="value1" model="button" /> -->
</template>
