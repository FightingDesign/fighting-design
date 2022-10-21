<script lang="ts" setup>
  import { FIconSnowflake } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value9 = ref(true)
</script>

<template>
  <f-switch v-model="value9" :icon="FIconSnowflake" />
</template>
