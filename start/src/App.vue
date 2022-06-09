<template>
<<<<<<< HEAD
<f-tag color="#ff0200">
  <f-icon size="15px" icon="f-icon-close" />
  浅色模式
</f-tag>
<f-tag size="small" type="warning" block :hit="false">深色模式</f-tag>
  

<f-container>
    <f-header>Header</f-header>
    <f-main padding="20px">Main</f-main>
  </f-container>
  <f-button>121</f-button>
=======
  <f-switch v-model="value" icon="f-icon-Daytimemode"></f-switch>

  <f-switch
    v-model="value"
    size="middle"
    active-text="按月付费"
    inactive-text="按年付费"
    active-color="#13ce66"
    inactive-color="#ff4949"
  ></f-switch>

  <f-switch
    v-model="value"
    square
    size="large"
    disabled
    icon="f-icon-Daytimemode"
  ></f-switch>
>>>>>>> 41cc32ee550acce688d1a81becbb6aad1aad1db1
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>

<style scoped></style>
