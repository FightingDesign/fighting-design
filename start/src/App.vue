<script lang="ts" setup>
  import { ref } from 'vue'

  // const change = (e: Event): void => console.log(e, 'change')
  // const input = (e: Event): void => console.log(e, 'input')
  // const blur = (e: Event): void => console.log(e, 'blur')
  // const focus = (e: Event): void => console.log(e, 'focus')

  const value1 = ref('')
</script>

<template>
  <f-date-picker v-model:date="value1" clear format="YYYY年MM月DD日" />
  <f-date-picker v-model:date="value1" />
</template>
