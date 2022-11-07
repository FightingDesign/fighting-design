<script lang="ts" setup>
  import { FIconArrowLeft } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-button circle :before-icon="FIconArrowLeft" type="default"></f-button>
  <f-button circle :after-icon="FIconArrowLeft" type="default"></f-button>
  <f-button
    :after-icon="FIconArrowLeft"
    :before-icon="FIconArrowLeft"
    type="default"
  >
    <f-svg-icon :icon="FIconArrowLeft" />
    <f-svg-icon :icon="FIconArrowLeft" />
    <f-svg-icon :icon="FIconArrowLeft" />
    文字内容
  </f-button>

  <f-button circle type="primary">
    <f-svg-icon :icon="FIconArrowLeft" />
  </f-button>
  <f-button :before-icon="FIconArrowLeft" type="primary">基础按钮</f-button>
</template>

<style lang="scss" scoped></style>
