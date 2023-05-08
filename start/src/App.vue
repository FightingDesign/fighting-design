<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { FormParam } from 'fighting-design'

  const ruleForm2 = reactive({
    account: '',
    password: ''
  })

  const handelSubmit2 = ({ ok, res, evt }: FormParam): void => {
    console.log(123)
    if (!ok) return
    FMessage.primary(`ok: ${ok} res: ${res} evt: ${evt} 开始提交表单`)
  }

  const formInstance = ref()

  const text = (evt): void => {
    formInstance.value.handelSubmit(evt)
    console.log(formInstance.value.validate())
  }
</script>

<template>
  {{ ruleForm2 }}
  <f-form
    ref="formInstance"
    :model="ruleForm2"
    :on-submit="handelSubmit2"
  >
    <f-form-item
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
      name="password"
      :rules="[
        { required: true, message: '请输入密码' },
        { min: 6, message: '至少输入六位数密码' }
      ]"
    >
      <f-input v-model="ruleForm2.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-button type="primary" native-type="submit" block>提交表单</f-button>
  </f-form>

  <f-button type="primary" block :on-click="text">提交表单2</f-button>
</template>
