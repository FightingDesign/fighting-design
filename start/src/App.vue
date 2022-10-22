<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconAnchor } from '@fighting-design/fighting-icon'
  const value = ref('')
</script>

<template>
  <f-input v-model="value" type="text" :icon="FIconAnchor" clear />
  <br />
  <f-input v-model="value" type="textarea" :icon="FIconAnchor" clear />
</template>

<style lang="scss" scoped></style>
