<script lang="ts" setup>
  import { reactive } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { FormSubmit } from 'fighting-design'

  const ruleForm2 = reactive({
    account: '',
    password: '',
    password2: ''
  })

  const handelSubmit2: FormSubmit = (ok, model, res, evt): void => {
    console.log(ok, model, res, evt)
    if (!ok) return
    FMessage.primary(`ok: ${ok} res: ${res} evt: ${evt} 开始提交表单`)
  }

  const validator = (): boolean => {
    return ruleForm2.password === ruleForm2.password2
  }
</script>

<template>
  {{ ruleForm2 }}
  <f-form :model="ruleForm2" label-width="80px" :on-submit="handelSubmit2">
    <f-form-item
      label="账号"
      name="account"
    >
      <f-input v-model="ruleForm2.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item
      label="密码"
      name="password"
      :rules="[
        { required: true, message: '请输入密码' },
        { min: 6, message: '至少输入六位数密码' }
      ]"
    >
      <f-input v-model="ruleForm2.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item
      label="确认密码"
      name="password2"
      :rules="[
        { required: true, message: '再次请输入密码' },
        { min: 6, message: '至少输入六位数密码' },
        { validator, message: '两次密码输入不一致' }
      ]"
    >
      <f-input v-model="ruleForm2.password2" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
