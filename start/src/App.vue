<template>
  <f-tag type="primary" size="large">大标签</f-tag>
  <f-tag type="primary" size="middle">中等标签</f-tag>
  <f-tag type="primary" size="small">小标签</f-tag>
  <f-tag type="primary" size="mini">超小标签</f-tag>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const checkAll = ref(false)
  const indeterminate = ref(false)
  const checkedOptions = ref<string[]>([])
  const optionList = ref(['红buff', '蓝buff', '大龙', '小龙'])

  const onCheckboxChange = (e: boolean): void => {
    checkedOptions.value = e ? optionList.value : []
    indeterminate.value = false
  }

  const onGroupChange = (val: string[]): void => {
    const halfStatus = !!(val.length && val.length < optionList.value.length)
    if (val.length === optionList.value.length) {
      checkAll.value = true
    }
    indeterminate.value = halfStatus
  }
</script>
