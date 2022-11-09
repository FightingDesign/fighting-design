<script lang="ts" setup>
  import { ref } from 'vue'

  const position = ref('top')

</script>

<template>
  <div style="padding: 20px">

  <f-card>
    <f-tabs :position="position" style="margin-bottom: 50px;">
      <f-tabs-pane name="home" label="首页">哈哈哈</f-tabs-pane>
      <f-tabs-pane label="很长很长的一个标签">Config</f-tabs-pane>
      <f-tabs-pane label="Jinx">Role</f-tabs-pane>
      <f-tabs-pane label="ThisIsSparta">Task</f-tabs-pane>
      <f-tabs-pane name="about">
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
  </f-card>
</div>
 
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>