<script lang="ts" setup></script>

<template>
  <f-alert type="default">默认提示信息</f-alert>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert>

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

  <f-link href="" type="default">默认链接</f-link>
  <f-link href="" type="primary">主要链接</f-link>
  <f-link href="" type="success">成功链接</f-link>
  <f-link href="" type="danger">危险链接</f-link>
  <f-link href="" type="warning">警告链接</f-link>

  <f-badge value="11">
    <f-button>default</f-button>
  </f-badge>
  <f-badge value="12" type="primary">
    <f-button>primary</f-button>
  </f-badge>
  <f-badge value="13" type="success">
    <f-button>success</f-button>
  </f-badge>
  <f-badge value="14" type="warning">
    <f-button>warning</f-button>
  </f-badge>
</template>

<style lang="scss" scoped></style>
