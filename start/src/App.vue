<template>
  <f-container>
    <f-header height="50px">Header</f-header>
    <f-container>
      <f-aside width="200px">Aside</f-aside>
      <f-container>
        <f-main>Main</f-main>
        <f-footer height="80px">Footer</f-footer>
      </f-container>
    </f-container>
  </f-container>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
  .f-container {
    color: #ffffff;
  }
  .f-header {
    background: #0f59a4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .f-main {
    height: 88vh;
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .f-aside {
    background: #eea2a4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .f-footer {
    background: #0f59a4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
