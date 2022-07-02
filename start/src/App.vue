<template>
  <f-tag v-show="isShow1" close @on-close="isShow1 = false" type="info">
    信息
  </f-tag>
  <f-tag v-show="isShow2" close @on-close="isShow2 = false" type="primary">
    普通
  </f-tag>
  <f-tag v-show="isShow3" close @on-close="isShow3 = false" type="warning">
    警告
  </f-tag>
  <f-tag v-show="isShow4" close @on-close="isShow4 = false" type="success">
    成功
  </f-tag>
  <f-tag v-show="isShow5" close @on-close="isShow5 = false" type="danger">
    失败
  </f-tag>
  <f-dialog text="content" title="world"> </f-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>
