<script lang="ts" setup>
  import { reactive } from 'vue'
  import type { FormParam } from 'fighting-design'

  const ruleForm = reactive({
    account: '',
    password: ''
  })

  const handelSubmit = ({ ok, res, evt }: FormParam): void => {
    if (!ok) return
    console.log(ok, res, evt, '开始提交表单')
  }
</script>

<template>
  <f-form label-width="60px" :model="ruleForm" :on-submit="handelSubmit">
    <f-form-item label="账号">
      <f-input v-model="ruleForm.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
