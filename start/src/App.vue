<script lang="ts" setup>
import { ref } from 'vue';
import { FIconApps, FIconBluetooth, FIconBook } from '@fighting-design/fighting-icon'

const msg = ref('123')
</script>

<template>
  <input type="text" v-model="msg" />
  <br />
  <br />
  <f-button type="primary" :before-icon="FIconApps" :after-icon="FIconBluetooth">{{ msg }}</f-button>
</template>

<style lang="scss" scoped>

</style>
