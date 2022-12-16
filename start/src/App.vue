<script lang="ts" setup>
  import { ref, reactive } from 'vue'

  const formRef = ref(null as unknown as HTMLFormElement)

  const ruleForm = reactive({
    username: '',
    password: ''
  })

  const handelSubmit = (evt: SubmitEvent): void => {
    // console.log(evt)
    console.log('提交表单', evt)
  }
</script>

<template>
  <f-form ref="formRef" :model="ruleForm" label-width="60px" :on-submit="handelSubmit">
    <f-form-item label="账号" :rules="[{ required: true, msg: '请输入用户名', trigger: 'blur' }]">
      <f-input v-model="ruleForm.username" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码" :rules="[{ required: true, msg: '请输入密码', trigger: 'blur' }]">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>

<style lang="scss" scoped></style>
