<template>
  <f-badge value="999" :max="100" color="skyblue">
    <f-button @click="onClick">default</f-button>
    <f-drawer
      :title="'我是一个title'"
      appendToBody
      lockScroll
      :modal="false"
      direction="left"
      v-model:visible="onOff"
    >
      这是第一层的内容
      <button @click="onOff2 = !onOff2">开启</button>

      <f-drawer
        :title="'我是二个title'"
        appendToBody
        direction="top"
        v-model:visible="onOff2"
      >
        这是第一层的内容
      </f-drawer>
    </f-drawer>
  </f-badge>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-button type="primary" @click="show = true"> click me </f-button>
  <f-dialog height="400px" v-model:visible="show"> </f-dialog>
  <f-progress percentage="3" linear height="16px"></f-progress>
</template>

<script setup>
  import { ref } from 'vue'

  const onOff = ref(false)
  const onOff2 = ref(false)

  const onClick = () => {
    onOff.value = !onOff.value
  }
</script>

<style scoped>
  .f-tooltip {
    margin-left: 120px;
  }
</style>
