<script lang="ts" setup>
  import { FIconApps, FIconBlock, FIconCameraVideoSlash, FIconClock } from '@fighting-design/fighting-icon'
  import { FMessage } from 'fighting-design'

  const handleClick = (index, evt) => {
    // FMessage.primary(`index：${index} evt：${evt}`)
  }
</script>

<template>
  <f-toolbar :on-click="handleClick">
    <f-toolbar-item index="1" :icon="FIconApps" />
    <f-toolbar-item index="2" :icon="FIconBlock" />
    <f-toolbar-item index="3" :icon="FIconCameraVideoSlash" />
    <f-toolbar-item index="4" :icon="FIconClock" />
  </f-toolbar>
</template>
