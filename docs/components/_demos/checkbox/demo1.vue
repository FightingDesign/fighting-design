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
    checkAll.value = val.length === optionList.value.length
    indeterminate.value = halfStatus
  }
</script>

<template>
  <div>
    <f-checkbox
      v-model="checkAll"
      label="全都要"
      :indeterminate="indeterminate"
      :change="onCheckboxChange"
    />
  </div>

  <f-checkbox-group v-model="checkedOptions" :change="onGroupChange">
    <f-checkbox v-for="(item, index) in optionList" :key="index" :label="item" />
  </f-checkbox-group>
</template>
