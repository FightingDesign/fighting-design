<script lang="ts" setup>
  import { ref } from 'vue'

  const position = ref('top')
  const type = ref('card')
  const align = ref('left')
  const tab = ref(2)

  const text = ref('asdd')

  const list = ref([
    {label: '第一个', content: '哈哈哈哈'}
  ])

  for(let i = 0; i < 15; i++) {
    list.value.push({label: `第${i}个hhh`, content: '哈哈哈哈' + i})
  }
  const as = ref(true)

  setTimeout(() => {
    text.value = 'asdadfdbdfg'
    as.value = false
  }, 2000)

  function beforeEnter(name: string | number) {
    console.log(name)
    if (name === 'about') {
      console.log('禁止通行')
      return false
    }
    return true
  }

</script>

<template>
  <div style="padding: 20px">
    {{tab}}
  <f-card>
    <f-tabs :position="position" :type="type" :align="align" v-model="tab">
      <f-tabs-pane :label="item.label" v-for="item in list">{{item.content}}</f-tabs-pane>
    </f-tabs>
  </f-card>

  <f-card>
    <f-tabs :beforeEnter="beforeEnter">
      <f-tabs-pane name="home" label="home">homeC</f-tabs-pane>
      <f-tabs-pane name="about" label="about">aboutC</f-tabs-pane>
      <f-tabs-pane label="cav">NavC</f-tabs-pane>
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