<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconApps } from '@fighting-design/fighting-icon'

  const msg = ref('123')
</script>

<template>
  <input v-model="msg" type="text" />
  <br />
  <br />
  <f-button type="primary" :before-icon="FIconApps">{{ msg }}</f-button>
</template>

<style lang="scss" scoped></style>
