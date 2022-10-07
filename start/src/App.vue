<script lang="ts" setup>
  import { ref } from 'vue'
  const selected1 = ref(true)
  const selected2 = ref(false)
  const selected3 = ref(true)
  const selection = ref([])
  const selected4 = ref([])
</script>

<template>
  <div>
    <f-checkbox v-model="selected1" label="选项11" disabled></f-checkbox>
    <f-checkbox v-model="selected2" label="选项11"></f-checkbox>
    <f-checkbox v-model="selected3" label="选项11"></f-checkbox>
    <div>
      {{ selected4 }}
      <f-checkbox-group v-model="selected4">
        <f-checkbox label="选项1"></f-checkbox>
        <f-checkbox label="选项2"></f-checkbox>
        <f-checkbox label="选项3" disabled></f-checkbox>
        <f-checkbox label="选项4"></f-checkbox>
      </f-checkbox-group>
    </div>
    <div style="padding: 20px; border: 1px solid red">
      <f-checkbox-group v-model="selection" border size="large">
        <f-checkbox label="酸辣土豆丝"></f-checkbox>
        <f-checkbox label="番茄炒鸡蛋"></f-checkbox>
      </f-checkbox-group>
    </div>
    <div style="padding: 20px; border: 1px solid red">
      <f-checkbox-group v-model="selection" border>
        <f-checkbox label="酸辣土豆丝"></f-checkbox>
        <f-checkbox label="番茄炒鸡蛋"></f-checkbox>
      </f-checkbox-group>
    </div>
    <div style="padding: 20px; border: 1px solid red">
      <f-checkbox-group v-model="selection" border size="small">
        <f-checkbox label="酸辣土豆丝"></f-checkbox>
        <f-checkbox label="番茄炒鸡蛋"></f-checkbox>
      </f-checkbox-group>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
