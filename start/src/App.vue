<template>
  <f-link type="default">默认按钮</f-link>
  <f-link type="primary">主要按钮</f-link>
  <f-link type="success">成功按钮</f-link>
  <f-link type="danger">危险按钮</f-link>
  <f-link type="warning">警告按钮</f-link>
  <f-link type="info">信息按钮</f-link>
  <br />
  <f-link prohibit type="default">默认按钮</f-link>
  <f-link prohibit type="primary">主要按钮</f-link>
  <f-link prohibit type="success">成功按钮</f-link>
  <f-link prohibit type="danger">危险按钮</f-link>
  <f-link prohibit type="warning">警告按钮</f-link>
  <f-link prohibit type="info">信息按钮</f-link>

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
