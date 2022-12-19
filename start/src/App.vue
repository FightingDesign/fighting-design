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
  /**
   *
   */
</script>

<template>
  <f-form :model="ruleForm" label-width="60px" :on-submit="handelSubmit">
    <f-form-item
      label="账号"
      name="account"
      :rules="[
        { required: true, message: '请输入用户名' },
        { min: 4, max: 12, message: '请输入 4~12 用户名' },
        { regExp: /123456/, message: '必须包含 123456' }
      ]"
    >
      <f-input v-model="ruleForm.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item
      label="密码"
      name="password"
      :rules="[
        { required: true, message: '请输入密码' },
        { min: 6, message: '至少输入六位数密码' }
      ]"
    >
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
