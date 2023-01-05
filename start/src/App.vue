<script lang="ts" setup>
  // import { ref } from 'vue'

  const date = new Date()
</script>

<template>
  <f-empty />
  <f-page-header />
  <f-fighting-global type="primary" lang="en-US">
    <f-page-header />
    <f-empty />

    <f-calendar v-model:date="date" />

    <f-space>
      <f-button>默认按钮</f-button>
      <f-button>主要按钮</f-button>
      <f-button>成功按钮</f-button>
      <f-button>危险按钮</f-button>
      <f-button>警告按钮</f-button>

      <f-button simple type="default">默认按钮</f-button>
      <f-button simple type="primary">主要按钮</f-button>
      <f-button simple type="success">成功按钮</f-button>
      <f-button simple type="danger">危险按钮</f-button>
      <f-button simple type="warning">警告按钮</f-button>
    </f-space>
  </f-fighting-global>
</template>
