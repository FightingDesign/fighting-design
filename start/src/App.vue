<script lang="ts" setup>
  import { FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-space>
    <f-button circle :before-icon="FIconApps" type="primary" />
    <!-- <f-button type="success" :before-icon="FIconApps" :after-icon="FIconBlock"> 前后都有 </f-button> -->
  </f-space>
</template>
