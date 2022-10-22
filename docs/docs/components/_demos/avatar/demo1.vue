<template>
  <f-space spacing="mini">
    <div class="avatar-block">
      <code>fill</code>
      <f-avatar fit="fill" src="https://tianyuhao.cn/images/auto/4.jpg" />
    </div>
    <div class="avatar-block">
      <code>contain</code>
      <f-avatar fit="contain" src="https://tianyuhao.cn/images/auto/4.jpg" />
    </div>
    <div class="avatar-block">
      <code>cover</code>
      <f-avatar fit="cover" src="https://tianyuhao.cn/images/auto/4.jpg" />
    </div>
    <div class="avatar-block">
      <code>none</code>
      <f-avatar fit="none" src="https://tianyuhao.cn/images/auto/4.jpg" />
    </div>
    <div class="avatar-block">
      <code>scale-down</code>
      <f-avatar fit="scale-down" src="https://tianyuhao.cn/images/auto/4.jpg" />
    </div>
  </f-space>
</template>

<style scoped>
.f-avatar {
  margin: 5px;
}
.avatar-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
