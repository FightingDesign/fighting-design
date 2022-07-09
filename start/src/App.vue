<template>
  <f-progress stripe type="primary" :percentage="num1" />
  <f-progress stripe type="success" :percentage="num1" />
  <f-progress stripe type="danger" :percentage="num1" />
  <f-progress stripe type="warning" :percentage="num1" />

  <f-button-group>
    <f-button
      simple
      round
      type="primary"
      left-icon="f-icon-sami-select"
      @click="sun"
    />
    <f-button
      simple
      round
      type="primary"
      left-icon="f-icon-add-select"
      @click="add"
    />
  </f-button-group>
</template>

<script setup>
  import { ref } from 'vue'

  const num1 = ref(10)

  const sun = () => {
    if (num1.value > 0) {
      num1.value -= 10
    }
  }

  const add = () => {
    if (num1.value < 100) {
      num1.value += 10
    }
  }
</script>

<style scoped></style>
