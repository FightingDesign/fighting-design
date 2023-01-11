<script lang="ts" setup>
  import { FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value2 = ref(20)
</script>

<template>
  <f-button :before-icon="FIconApps" type="primary">
  </f-button>
  <f-button type="success" :before-icon="FIconApps" :after-icon="FIconBlock"> 前后都有 </f-button>

  <f-input-number v-model="value2" model="switch" size="large" />
  <f-input-number v-model="value2" model="switch" size="middle" />
  <f-input-number v-model="value2" model="switch" size="small" />
  <f-input-number v-model="value2" model="switch" size="mini" />
</template>

<style>
  .f-input-number {
    margin-top: 20px;
  }
</style>
