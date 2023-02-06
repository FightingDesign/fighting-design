<script lang="ts" setup>
  const date = new Date('2023/12/2')
</script>

<template>
  <f-calendar v-model:date="date" lunar />
</template>
