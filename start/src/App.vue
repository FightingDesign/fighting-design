<template>
  <f-calendar
    v-model:date="date"
    :change-switch="Change1"
    :change-date="Change2"
  />
</template>

<script lang="ts" setup>
  const date = new Date()

  function Change1(a) {
    console.log(a)
  }
  function Change2(a) {
    console.log(a)
  }
</script>
