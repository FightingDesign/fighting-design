<script lang="ts" setup>
  import { reactive } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { FormSubmit } from 'fighting-design'

  const ruleForm2 = reactive({
    info: {
      password: '12121'
    }
  })

  const handelSubmit2: FormSubmit = (ok, model, res, evt): void => {
    console.log(ok, model)
    if (!ok) return
    FMessage.primary(`ok: ${ok} model:${model} res: ${res} evt: ${evt} 开始提交表单`)
  }
</script>

<template>
  {{ ruleForm2 }}
  <f-form :model="ruleForm2" label-width="60px" :on-submit="handelSubmit2">
    <f-form-item
      label="密码"
      name="info.password"
      :rules="[
        { min: 6, message: '至少输入六位数密码' }
      ]"
    >
      <f-input
        v-model="ruleForm2.info.password"
        type="password"
        placeholder="请输入密码"
      />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
