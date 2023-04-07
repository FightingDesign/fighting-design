<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  function messa () {
    FMessage({
      type: 'default',
      message: '这是一个提示信息',
      time: 123
    })
  }
</script>

<template>
  <button @click="messa">1234</button>
</template>

<style lang="scss" scoped></style>
