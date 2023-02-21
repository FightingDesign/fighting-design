# Form 表单

每天写不完的业务代码，提交不尽的表单

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/form)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/form.md)

:::danger
组件仍在开发阶段，谨慎使用！
:::

## 基本使用

在 `f-form` 组件中添加 `native-type` 为 `submit` 的按钮，将会触发表单的 `on-submit` 回调触发提交表单

::: demo

<template #source>
{{ ruleForm }}
<f-form label-width="60px" :on-submit="handelSubmit">
<f-form-item label="账号">
<f-input v-model="ruleForm.account" type="text" placeholder="请输入账号" />
</f-form-item>

<f-form-item label="密码">
<f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
</f-form-item>

<f-form-item>
<f-button type="primary" native-type="submit" block>提交表单</f-button>
</f-form-item>
</f-form>
</template>

```vue
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
  {{ ruleForm }}
  <f-form label-width="60px" :on-submit="handelSubmit">
    <f-form-item label="账号">
      <f-input v-model="ruleForm.account" type="text" placeholder="请输入账号" />
    </f-form-item>

    <f-form-item label="密码">
      <f-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
    </f-form-item>

    <f-form-item>
      <f-button type="primary" native-type="submit" block>提交表单</f-button>
    </f-form-item>
  </f-form>
</template>
```

:::

## 表单验证

进行表单验证时，需要传递给 `f-form` 组件 `model` 属性来绑定当前表单对象

`f-form-item` 需要传入 `rules` 规则和 `name` 指定属性的名字

需要注意：在表单验证的时候，name 的属性的必须的，它指定了校验 `model` 对象中的指定键值，如果你没有传递 name，则默认不检测指定项

在 `on-submit` 回调中，可结构出三个参数，分别是：当前表单是否通过验证、当前验证结果对象、事件对象

::: demo

<template #source>
{{ ruleForm2 }}
<f-form :model="ruleForm2" label-width="60px" :on-submit="handelSubmit2">
<f-form-item label="账号" name="account" :rules="[{ required: true, message: '请输入用户名' },{ min: 4, max: 12, message: '请输入 4~12 用户名' },{ regExp: /123456/, message: '必须包含 123456' }]">
<f-input v-model="ruleForm2.account" type="text" placeholder="请输入账号" />
</f-form-item>

<f-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' },{ min: 6, message: '至少输入六位数密码' }]">
<f-input v-model="ruleForm2.password" type="password" placeholder="请输入密码" />
</f-form-item>

<f-form-item>
<f-button type="primary" native-type="submit" block>提交表单</f-button>
</f-form-item>

</f-form>
</template>

```vue
<script lang="ts" setup>
  import { reactive } from 'vue'
  import { FMessage } from 'fighting-design'
  import type { FormParam } from 'fighting-design'

  const ruleForm2 = reactive({
    account: '',
    password: ''
  })

  const handelSubmit2 = ({ ok, res, evt }: FormParam): void => {
    if (!ok) return
    FMessage.primary(`ok: ${ok} res: ${res} evt: ${evt} 开始提交表单`)
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
      name="password"
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
```

:::

## Form Attributes

| 参数          | 说明                     | 类型                                 | 可选值 | 默认值 |
| ------------- | ------------------------ | ------------------------------------ | ------ | ------ |
| `label-width` | label 的宽度             | string / number                      | ——     | ——     |
| `model`       | 表单数据对象             | Object                               | ——     | ——     |
| `on-submit`   | 点击提交按钮后触发的回调 | <a href="#formsubmit">FormSubmit</a> | ——     | ——     |

## FormItem Attributes

| 参数    | 说明                 | 类型                                                                                            | 可选值 | 默认值 |
| ------- | -------------------- | ----------------------------------------------------------------------------------------------- | ------ | ------ |
| `label` | 自定义 label         | string                                                                                          | ——     | ——     |
| `name`  | 当前绑定数据对象的键 | string                                                                                          | ——     | ——     |
| `rules` | 规则                 | <a href="#formitemrulesitem">FormItemRulesItem</a> / <a href="#formitemrules">FormItemRules</a> | ——     | ——     |

## Form Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## FormItem Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  FormInstance,
  FormProps,
  FormParam,
  FormSubmit,
  FormItemInstance,
  FormItemProps,
  FormItemRulesItem,
  FormItemRules
} from 'fighting-design'
```

### FormParam

```ts
interface FormParam {
  ok: boolean
  res: Record<string, boolean | string>
  evt: SubmitEvent
}
```

### FormSubmit

```ts
FormSubmit = (params: FormParam) => void
```

### FormItemRulesItem

```ts
interface FormItemRulesItem {
  message?: string
  required?: boolean
  min?: number
  max?: number
  regExp?: RegExp
}
```

### FormItemRules

```ts
type FormItemRules = FormItemRulesItem[]
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

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

  const ruleForm2 = reactive({
    account: '',
    password: ''
  })

  const handelSubmit2 = ({ ok, res, evt }): void => {
    if (!ok) return
    FMessage.primary(`ok: ${ok} res: ${res} evt: ${evt} 开始提交表单`)
  }
</script>
