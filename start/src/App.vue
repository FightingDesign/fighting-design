<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const beforeEnter = name => {
    switch (name) {
      case 'hobby':
        return new Promise<boolean>(resolve => {
          FMessage.warning('稍等一下~')
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      case 'age':
        FMessage.danger('这个不能说')
        return false
      default:
        return true
    }
  }
</script>

<template>
  <f-tabs :on-before-enter="beforeEnter">
    <f-tabs-pane label="个人信息" name="name">
      <p>小芳，女</p>
    </f-tabs-pane>
    <f-tabs-pane label="爱好(等一秒)" name="hobby">
      <p>疯狂星期四，V我50~</p>
    </f-tabs-pane>
    <f-tabs-pane label="年龄" name="age"> </f-tabs-pane>
  </f-tabs>
</template>
