<script lang="ts" setup>
  import { ref } from 'vue'

  const position = ref('top')
  const type = ref('card')
  const justifyContent = ref('flex-start')
  const tab = ref(0)

  const radio1 = ref('1')

  const list = ref([
    { label: '第一个', content: '哈哈哈哈', name: '1' },
    { label: '第二个', content: '哈哈哈哈a', name: '2' }
  ])

  // for (let i = 0; i < 5; i++) {
  //   list.value.push(
  //     {label: `第${i}个`, content: '哈哈哈哈a' + i, name: i + ''},
  //   )
  // }
  let tabIndex = 2
  function edit (action: 'remove' | 'add', name: string, i: number) {
    switch (action) {
      case 'add':
        const newTabName = `${++tabIndex}`
        list.value.push({
          label: '新的' + newTabName,
          content: '新的标签页' + newTabName,
          name: newTabName
        })
        break
      case 'remove':
        list.value.splice(i, 1)
        break
    }
  }
</script>

<template>
  <f-radio-group v-model="radio1">
    <f-radio label="1">备选项1</f-radio>
    <f-radio label="2">备选项2</f-radio>
    <f-radio label="3">备选项3</f-radio>
  </f-radio-group>
  <div style="padding: 20px">
    <f-card>
      <f-tabs
        v-model="tab"
        :position="position"
        :justify-content="justifyContent"
        edit-status
        :type="type"
        @edit="edit"
      >
        <f-tabs-pane
          v-for="(item, i) in list"
          :name="item.name"
          :label="item.label"
        >
          {{ item.content }}
        </f-tabs-pane>
      </f-tabs>
    </f-card>

    <f-card>
      <p>
        <span>方向：</span>
        <f-radio-group v-model="position">
          <f-radio label="top">top</f-radio>
          <f-radio label="left">left</f-radio>
          <f-radio label="bottom">bottom</f-radio>
          <f-radio label="right">right</f-radio>
        </f-radio-group>
      </p>
      <p>
        <span>风格：</span>
        <f-radio-group v-model="type">
          <f-radio label="line">line</f-radio>
          <f-radio label="card">card</f-radio>
          <f-radio label="segment">segment</f-radio>
        </f-radio-group>
      </p>
      <p>
        <span>对齐：</span>
        <f-radio-group v-model="justifyContent">
          <f-radio label="flex-start">flex-start</f-radio>
          <f-radio label="center">center</f-radio>
          <f-radio label="flex-end">flex-end</f-radio>
          <f-radio label="space-between">space-between</f-radio>
          <f-radio label="space-around">space-around</f-radio>
          <f-radio label="space-evenly">space-evenly</f-radio>
        </f-radio-group>
      </p>
    </f-card>
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
