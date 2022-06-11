<template>
  <br />
  <f-badge value="123">
    <f-button>测试</f-button>
  </f-badge>
  <br />
  <br />

  <f-badge :value="123" type="success"> 哈哈哈 </f-badge>

  <br />
  <br />
  <f-badge isDot>
    <f-button>测试</f-button>
  </f-badge>
  <f-badge isDot type="success"> dfs </f-badge>

  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>

  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>

  <f-button circle left-icon="f-icon-camera-fill" type="default" />
  <f-button circle left-icon="f-icon-good-fill" type="primary" />
  <f-button circle left-icon="f-icon-discount-fill" type="success" />
  <f-button circle left-icon="f-icon-Exportservices" type="danger" />
  <f-button circle left-icon="f-icon-map1" type="warning" />
</template>

<script lang="ts" setup></script>

<style scoped></style>
