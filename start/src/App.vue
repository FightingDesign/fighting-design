<script lang="ts" setup>
  import { ref } from 'vue'

  const num = ref(10)
</script>

<template>
  <!-- <f-progress type="primary" :percentage="num" /> -->
  <f-progress type="success" />
  <!-- <f-progress type="danger" :percentage="num" /> -->
  <!-- <f-progress type="warning" :percentage="num" /> -->
  <!-- 
  <f-button-group>
    <f-button simple round type="primary" @click="sun">减少</f-button>
    <f-button simple round type="primary" @click="add">增加</f-button>
  </f-button-group> -->
</template>
