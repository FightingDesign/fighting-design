<script lang="ts" setup>
  import { reactive } from 'vue'
  import { FMessage } from 'fighting-design'

  const ruleForm = reactive({
    account: '',
    password: ''
  })

  const handelSubmit = (): void => {
    FMessage.primary('开始提交表单')
  }
</script>

<template>
  {{ ruleForm }}
  <f-form label-width="90px" label-position="left" :on-submit="handelSubmit">
    <f-form-item label="账号">
      <f-input v-model="ruleForm.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit">提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
