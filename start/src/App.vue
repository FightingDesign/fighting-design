<template>
  <f-button-group size="large">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="middle">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="small">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="mini12">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>

  <div style="display: flex">
    <f-tag size="mini" color="#f56c6c" theme="light" closable>超小标签</f-tag>
    <f-tag size="small" theme="frost" color="blue">小标签</f-tag>
    <f-tag size="middle">中型中型标签中型标签标签</f-tag>
    <f-tag size="large" theme="dark" color="blue" closable="true"
      >标准标签</f-tag
    >
  </div>

  <f-tag theme="light" color="#ff0200">
    <f-icon size="15px" icon="f-icon-close" />
    浅色模式</f-tag
  >
  <f-tag theme="dark" color="#2d5af1">深色模式</f-tag>

  <f-tag theme="light" color="#bdc3c7" size="large">标签</f-tag>
  <f-tag theme="dark" color="#f56c6c" size="middle">深色模式</f-tag>
  <f-tag theme="light" size="small">浅色</f-tag>
  <f-tag theme="dark" color="#2d5af1" size="mini">深色</f-tag>
</template>

<script lang="ts" setup></script>

<style scoped></style>
