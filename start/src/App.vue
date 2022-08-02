<script lang="ts" setup>
  const listImg = [
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png',
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a728be8afd5.png'
  ]
</script>

<template>
  <f-toolbar round text-color="#fff" background="rgba(0,0,0,0.3)" vague>
    <f-tooltip content="上边的提示信息" position="top">
      <f-toolbar-item> 信息 </f-toolbar-item>
    </f-tooltip>
    <f-toolbar-item>
      <f-icon size="30px" icon="f-icon-default-template" />
    </f-toolbar-item>
    <f-toolbar-item>
      <f-icon size="30px" icon="f-icon-Customermanagement" />
    </f-toolbar-item>
    <f-toolbar-item>操作</f-toolbar-item>
    <f-toolbar-item>激活</f-toolbar-item>
  </f-toolbar>

  <f-image
    width="200px"
    :previewZIndex="0.213"
    src="https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273b49ecf.png"
    :preview-list="listImg"
  />

  <f-breadcrumb separator="/">
    <f-breadcrumb-item :to="{ path: '/' }">首页</f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>

  <f-novel-coronavirus></f-novel-coronavirus>
</template>

<style scoped></style>
