<script lang="ts" setup>
  const goBack = (): void => {
    console.log('go back')
  }
</script>

<template>
  <f-page-header
    title="标题"
    subtitle="副标题"
    title-bold
    title-color="red"
    @back="goBack"
  />
</template>
