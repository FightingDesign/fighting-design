<script lang="ts" setup>
  import { reactive } from 'vue'

  const ruleForm = reactive({
    username: '',
    password: ''
  })

  const handelSubmit = ({ ok, evt }): void => {
    if (!ok) return
    console.log(ok, evt)
  }
</script>

<template>
  <f-form :model="ruleForm" label-width="60px" :on-submit="handelSubmit">
    <f-form-item label="账号" name="username" :rules="[{ required: true, msg: '请输入用户名' }]">
      <f-input v-model="ruleForm.username" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码" name="password" :rules="[{ required: true, msg: '请输入密码' }]">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>

<style lang="scss" scoped></style>
