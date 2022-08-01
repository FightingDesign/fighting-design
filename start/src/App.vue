<template>
  <div class="f-toolbar-vague-box">
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
  </div>
</template>

<style scoped>
  .f-toolbar-vague-box {
    width: 100%;
    height: 300px;
    background: url('https://pic3.zhimg.com/80/v2-4003384451219b69e0cfe7d3432ec3e6_720w.jpg')
      no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
