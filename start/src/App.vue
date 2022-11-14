<script lang="ts" setup>
  import { ref } from 'vue'

  const position = ref('top')
  const type = ref('card')
  const align = ref('left')
  const tab = ref(0)

  const list = ref([
    {label: '第一个', content: '哈哈哈哈'},
    {label: '第二个', content: '哈哈哈哈a'},
  ])

  function edit(name: string) {
    console.log('当前点击的时', name)
  }
</script>

<template>
  <div style="padding: 20px">
    {{tab}}
  <f-card>
    <f-tabs :position="position" editStatus :type="type" v-model="tab" @edit="edit">
      <f-tabs-pane :label="item.label" v-for="item in list">{{item.content}}</f-tabs-pane>
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
      <f-radio-group v-model="align">
        <f-radio label="left">left</f-radio>
        <f-radio label="center">center</f-radio>
        <f-radio label="right">right</f-radio>
      </f-radio-group>
    </p>
  </f-card>
</div>
 
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>