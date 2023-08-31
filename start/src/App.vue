<script lang="ts" setup>
  import { ref } from 'vue'

  const activeName = ref()

  let arr = ref([
    { name: 1, label: '1' },
    { name: 2, label: '2' },
    { name: 3, label: '3' },
    { name: 4, label: '4' }
  ])

  const handleTabAdd = (): void => {
    const addItem = {
      name: arr.value.length + 1,
      label: String(arr.value.length + 1)
    }
    arr.value.push(addItem)
    activeName.value = addItem.name
  }
  const handleTabClose = (name: string | number): void => {
    arr.value.splice(
      arr.value.findIndex(i => i.name === name),
      1
    )
  }
  const removeAll = (): void => {
    arr.value = []
  }
</script>

<template>
  <f-button size="mini" style="margin-right: 10px" @click="handleTabAdd()">
    add tab
  </f-button>
  <f-button size="mini" @click="removeAll()"> remove all tab </f-button>

  <br />
  <br />

  <div class="box1" style="width: 400px">
    <f-tabs v-model="activeName" type="card" editable :handle-tab-close="handleTabClose">
      <f-tabs-item v-for="i in arr" :key="i.name" :name="i.name" :label="i.name">
        {{ i.name }}
      </f-tabs-item>
    </f-tabs>
  </div>
</template>

<style></style>
