<script lang="ts" setup>
  import { ref, reactive } from 'vue'

  const formRef = ref(null as unknown as HTMLFormElement)

  const ruleForm = reactive({
    username: '',
    password: ''
  })

  const rules = reactive({
    username: [{ required: true, msg: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, msg: '请输入密码', trigger: 'blur' }]
  })

  const onSubmit = (): void => {
    // console.log(formRef.value.run)
    formRef.value.run('ok')
  }
</script>

<template>
  <f-form ref="formRef" label-width="60px" :rules="rules">
    <f-form-item label="账号" name="username">
      <f-input v-model="ruleForm.username" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码" name="password">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-typ="submit" block :on-click="onSubmit">提交表单</f-button>
    </f-form-item>
  </f-form>
</template>

<style lang="scss" scoped></style>
