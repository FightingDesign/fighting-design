<script lang="ts" setup>
  import { reactive } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { FormSubmit } from 'fighting-design'

  const ruleForm2 = reactive({
    account: '',
    password: ''
  })

  const handelSubmit2: FormSubmit = (ok, model, res, evt): void => {
    if (!ok) return
    FMessage.primary(`ok: ${ok} model:${model} res: ${res} evt: ${evt} 开始提交表单`)
  }
</script>

<template>
  {{ ruleForm2 }}
  <f-form :model="ruleForm2" label-width="60px" :on-submit="handelSubmit2">
    <f-form-item
      label="账号"
      name="account"
      :rules="[
        { required: true, message: '请输入用户名' },
        { min: 4, max: 12, message: '请输入 4~12 用户名' },
        { regExp: /123456/, message: '必须包含 123456' }
      ]"
    >
      <f-input v-model="ruleForm2.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item
      label="密码"
      name="abc"
      :rules="[
        { required: true, message: '请输入密码' },
        { min: 6, message: '至少输入六位数密码' }
      ]"
    >
      <f-input v-model="ruleForm2.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
