# Form 表单

每天写不完的业务代码，提交不尽的表单

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/form)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/form.md)

:::danger
组件仍在开发阶段，谨慎使用！
:::

## 基本使用

::: demo

```vue
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
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| ``   |      |      |        | ——     |

## Slots

| 名称 | 说明 |
| ---- | ---- |
| ``   |      |

## Interface

组件导出以下类型定义：

```ts
import type {} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>
