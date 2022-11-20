<script lang="ts" setup>
  import { ref } from 'vue'

  // const value1 = ref('')

  const num = ref(3)

  const change = (e: Event): void => console.log(e, 'change')
  const input = (e: Event): void => console.log(e, 'input')
  const blur = (e: Event): void => console.log(e, 'blur')
  const focus = (e: Event): void => console.log(e, 'focus')
</script>

<template>
  <f-input-number
    v-model="num"
    clear
    model="button"
    :min="0"
    :max="50"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  />
</template>
