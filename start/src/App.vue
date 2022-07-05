<template>
  <f-progress type="default" :percentage="40" />
  <f-progress type="primary" :percentage="10" />
  <f-progress type="success" :percentage="40" />
  <f-progress type="danger" :percentage="70" />
  <f-progress type="warning" :percentage="100" />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(true)
  const isShow2 = ref(false)
  const change = () => {
    isShow.value = true
  }

  const open = () => {
    console.log('open')
  }

  const openEnd = () => {
    console.log('openEnd')
  }

  const close = () => {
    console.log('close')
  }

  const closeEnd = () => {
    console.log('closeEnd')
  }
</script>

<style></style>
