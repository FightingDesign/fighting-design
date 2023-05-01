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
  <f-avatar src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar round text="你好" />

  {{ ruleForm }}
  <f-form label-width="0px" label-position="top" :on-submit="handelSubmit">
    <f-form-item label="请输入账号">
      <f-input
        v-model="ruleForm.account"
        :max-length="6"
        type="text"
        placeholder="请输入账号"
      />
    </f-form-item>

    <f-form-item>
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit">提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
