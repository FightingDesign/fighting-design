<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <f-button type="info">信息按钮</f-button>

  <f-icon size="40px" icon="f-icon-default-template" @click="change" />
  <f-icon size="40px" icon="f-icon-Customermanagement" />
  <f-icon size="40px" icon="f-icon-Daytimemode" />
  <f-icon size="40px" icon="f-icon-editor" />
  <f-icon size="40px" icon="f-icon-email" />
</template>

<script lang="ts" setup>
function change(e) {
  console.log(e)
}
</script>

<style scoped></style>
