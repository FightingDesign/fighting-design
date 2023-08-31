<script lang="ts" setup>
  import { ref } from 'vue'

  const activeName = ref()

  let arr = ref([
    { name: 1, label: '1' },
    { name: 2, label: '2' },
    { name: 3, label: '3' },
    { name: 4, label: '4' },
    { name: 5, label: '5' },
    { name: 6, label: '6' },
    { name: 7, label: '7' },
    { name: 8, label: '8' }
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
    console.log(41, arr.value)
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

  <div class="box1">
    <f-tabs v-model="activeName" editable :handle-tab-close="handleTabClose">
      <f-tabs-item v-for="i in arr" :key="i.name" :name="i.name" :label="i.name">
        {{ i.name }}
      </f-tabs-item>
    </f-tabs>
  </div>

  <!--  <div style="width: 600px; border: solid 1px #eeeeee">
    <f-tabs editable :handle-tab-close="handleTabClose">
      <f-tabs-item v-for="i in arr" :key="i.name" :name="i.name" :label="i.name">
        {{ i.name }}
      </f-tabs-item>
    </f-tabs>
  </div>-->
</template>

<style>
  .box1 {
    border: solid 1px green;
    margin-bottom: 20px;
    width: 300px;
  }
</style>
