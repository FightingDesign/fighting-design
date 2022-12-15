<script lang="ts" setup>
  import { ref, reactive } from 'vue'

  const form = ref(null as unknown as HTMLFormElement)

  const ruleForm = reactive({
    username: '',
    password: ''
  })

  const onSubmit = (): void => {
    console.log(form.value)
  }
</script>

<template>
  <f-form label-width="60px">
    <f-form-item ref="form" label="账号">
      <f-input v-model="ruleForm.username" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-typ="submit" block :on-click="onSubmit">提交表单</f-button>
    </f-form-item>
  </f-form>
</template>

<style lang="scss" scoped></style>
