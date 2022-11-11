<script lang="ts" setup>
  import { ref } from 'vue'

  const position = ref('top')
  const type = ref('segment')
  const tab = ref(2)

  const text = ref('asdd')

  const as = ref(true)

  setTimeout(() => {
    text.value = 'asdadfdbdfg'
    as.value = false
  }, 2000)
</script>

<template>
  <div style="padding: 20px">
  <!-- <f-button @click="">add</f-button> -->

  <f-card>
    <f-tabs :position="position" :type="type" v-model="tab">
      <f-tabs-pane name="home" label="首页">{{text}}</f-tabs-pane>
      <f-tabs-pane label="很长很长的一个标签" lazy>Config</f-tabs-pane>
      <f-tabs-pane label="Jinx" lazy>Role</f-tabs-pane>
      <f-tabs-pane label="ThisIsSparta" lazy>Task</f-tabs-pane>
      <f-tabs-pane label="动态节点" v-if="as">动态节点的内容</f-tabs-pane>
      <f-tabs-pane name="about" lazy>
        <template #label>你猜</template>
        哈2123哈哈
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
  </f-card>
</div>
 
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>