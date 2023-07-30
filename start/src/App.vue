<script lang="ts" setup>
  import { ref } from 'vue'

  let tabIndex = 2

  const list = ref([
    { label: '第一个', content: '内容 1', name: '1' },
    { label: '第二个', content: '内容 2', name: '2' }
  ])

  const onEdit = (action: 'remove' | 'add', name: string, index: number): void => {
    switch (action) {
      case 'add':
        {
          const newTabName = `${++tabIndex}`
          list.value.push({
            label: '新的' + newTabName,
            content: '新的标签页' + newTabName,
            name: newTabName
          })
        }
        break
      case 'remove':
        list.value.splice(index, 1)
        break
    }
  }
</script>

<template>
  <f-tabs edit-status type="card" :on-edit="onEdit">
    <f-tabs-item
      v-for="(item, index) in list"
      :key="index"
      :label="item.label"
      :name="item.name"
    >
      {{ item.content }}
    </f-tabs-item>
  </f-tabs>
</template>
