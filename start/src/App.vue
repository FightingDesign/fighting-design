<script lang="ts" setup></script>

<template>
  <f-avatar fit="fill" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="contain" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="cover" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="none" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="scale-down" src="https://tianyuhao.cn/images/auto/4.jpg" />

  <f-avatar :size="85" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="large" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="middle" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="small" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="mini" src="https://tianyuhao.cn/images/auto/my.jpg" />

  <f-text background="red" color="#fff">普通文字</f-text>
  <f-text type="primary">主要文字</f-text>
  <f-text type="success">成功文字</f-text>
  <f-text type="danger">危险文字</f-text>
  <f-text type="warning">警告文字</f-text>

  <f-tag>默认</f-tag>
  <f-tag close type="primary" color="red" background="black">普通</f-tag>
  <f-tag close type="warning">警告</f-tag>
  <f-tag close type="success">成功</f-tag>
  <f-tag close type="danger">失败</f-tag>

  <f-tag close line type="default">默认</f-tag>
  <f-tag close line type="primary">普通</f-tag>
  <f-tag close line type="warning">警告</f-tag>
  <f-tag close line type="success">成功</f-tag>
  <f-tag close line type="danger">失败</f-tag>

  <f-tag type="primary" size="large">标签</f-tag>
  <f-tag type="primary" size="middle">标签</f-tag>
  <f-tag type="primary" size="small">标签</f-tag>
  <f-tag type="primary" size="mini">标签</f-tag>

  <f-tag block type="default">默认</f-tag>
  <f-tag block type="primary">普通</f-tag>
  <f-tag block type="warning">警告</f-tag>
  <f-tag block type="success">成功</f-tag>
  <f-tag block type="danger">失败</f-tag>

  <f-list size="large">
    <f-list-item>这是大号尺寸列表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>
  </f-list>

  <f-list size="middle">
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
  </f-list>

  <f-list size="small">
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
  </f-list>

  <f-list size="mini">
    <f-list-item>这是迷你尺寸列表</f-list-item>
    <f-list-item>这是迷你尺寸列表</f-list-item>
  </f-list>

  <f-link href="" type="default">默认链接</f-link>
  <f-link href="" type="primary">主要链接</f-link>
  <f-link href="" type="success">成功链接</f-link>
  <f-link href="" type="danger">危险链接</f-link>
  <f-link href="" type="warning">警告链接</f-link>

  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>

  <f-box width="200px" height="200px" padding="30px" background="skyblue">hello</f-box>

  <f-badge value="11" background="blue" color="red">
    <f-button>default</f-button>
  </f-badge>
  <f-badge value="12" type="primary">
    <f-button>primary</f-button>
  </f-badge>
  <f-badge value="13" type="success">
    <f-button>success</f-button>
  </f-badge>
  <f-badge value="14" type="warning">
    <f-button>warning</f-button>
  </f-badge>

  <h1>1</h1>

  <f-back-top :z-index="4444" :right="20">返回顶部</f-back-top>

  <f-aside width="70px">Aside1</f-aside>
</template>

<style lang="scss" scoped></style>
