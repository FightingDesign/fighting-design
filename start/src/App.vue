<script lang="ts" setup></script>

<template>
  <f-trigger trigger="click" :enter-duration="0.4" :leave-duration="0.4">
    <f-text type="primary">click 触发</f-text>
    <template #content> <f-empty content="在这里，后续提供更多服务" /> </template>
  </f-trigger>
</template>

<style lang="scss" scoped></style>
