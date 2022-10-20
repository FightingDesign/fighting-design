<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'

  const goBack = () => {
    console.log('go back')
  }
</script>

<template>
  <f-page-header title="标题" @back="goBack" />
</template>
