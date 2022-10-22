<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconAnchor } from '@fighting-design/fighting-icon'
  const value = ref('')

  const onSearch = ({ value }): void => {
    console.log(value)
  }
</script>

<template>
  <!-- <f-input v-model="value" type="text" :icon="FIconAnchor" clear /> -->
  <br />
  <f-input
    v-model="value"
    type="text"
    :icon="FIconAnchor"
    clear
    search
    :on-search="onSearch"
  />
</template>

<style lang="scss" scoped></style>
