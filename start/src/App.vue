<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(10)

  const add = (): void => {
    value.value += 10
  }

  const sub = (): void => {
    value.value -= 10
  }
</script>

<template>
  <f-button @click="sub">--</f-button>
  <f-button @click="add">++</f-button>
  <f-progress :percentage="value" circle />
</template>
