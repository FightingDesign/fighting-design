<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref('')
</script>

<template>
  <f-form>
    <f-form-item label="账号">
      <f-input v-model="value1" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码">
      <f-input v-model="value2" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" block>主要按钮</f-button>
    </f-form-item>
  </f-form>
</template>

<style lang="scss" scoped></style>
