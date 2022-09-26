<script lang="ts" setup></script>

<template>
  <f-avatar src="https://tiany1uhao.cn/images/auto/my.jpg" />
  <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar fit="fill" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="contain" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="cover" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar fit="none" src="https://tianyuhao.cn/images/auto/4.jpg" />
  <f-avatar
    fit="scale-down"
    src="https://tianyuhao.cn/images/auto/4.jpg"
    background="red"
  />

  <f-avatar :size="85" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="large" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="middle" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="small" src="https://tianyuhao.cn/images/auto/my.jpg" />
  <f-avatar size="mini" src="https://tianyuhao.cn/images/auto/my.jpg" />

  <f-avatar
    size="large"
    icon="f-icon-bussiness-man"
    background="skyblue"
    font-size="55px"
  />
  <f-avatar
    size="middle"
    icon="f-icon-atm-away"
    icon-size="30px"
    icon-color="orange"
    round
  />
  <f-avatar size="small" icon="f-icon-Customermanagement" icon-size="25px" />
  <f-avatar size="mini" icon="f-icon-account" />
</template>

<style scoped></style>
