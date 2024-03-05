<template>
  <f-button type="primary" @click="visible1 = true">打开</f-button>

  <f-dialog v-model:visible="visible1" title="标题文字" :on-close-end="closeEnd">
    这是一个 Dialog
    <f-select v-model="value" placeholder="请选择……" filter>
      <f-option v-for="(item, index) in data" :key="index" :value="item.id">{{
        item.name
      }}</f-option>
    </f-select>

    <f-up-load v-model:files="files" show-list multiple :on-change="change"></f-up-load>

    <template #footer>
      <f-button type="default">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
    </template>
  </f-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('')
  const visible1 = ref(false)
  const files = ref([])

  const closeEnd = () => {
    files.value = []
    console.log(files.value)
  }

  const change = file => {
    console.log(file)
  }

  const data = ref([
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
    { id: 4, name: '赵六' },
    { id: 5, name: '神器' },
    { id: 6, name: '奇迹' }
  ])
</script>
