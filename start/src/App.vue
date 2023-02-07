<script lang="ts" setup>
  const date = new Date('2023/12/2')

  const func = e => {
    console.log(e)
  }
</script>

<template>
  <f-calendar v-model:date="date" lunar :on-change-month="func" :on-change-date="func" />
</template>
