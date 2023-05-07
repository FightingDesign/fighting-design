<script lang="ts" setup>
  const open = () => {
    console.log('open')
  }
</script>

<template>
  <div style="width: 500px; height: 2500px; background-color: red" @click.stop="open">
    <!-- <f-back-top>返回顶部</f-back-top> -->
    <f-dropdown>
      <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />

      <template #content>
        <f-dropdown-item>猕猴桃</f-dropdown-item>
        <f-dropdown-item>哈密瓜</f-dropdown-item>
        <f-dropdown-item>火龙果</f-dropdown-item>
        <f-dropdown-item>柠檬</f-dropdown-item>
      </template>
    </f-dropdown>

    <f-trigger trigger="hover">
      <f-button type="primary">hover 触发</f-button>

      <template #content>
        <f-empty content="在这里，后续提供更多服务" />
      </template>
    </f-trigger>
  </div>
</template>
