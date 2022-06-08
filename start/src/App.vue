<template>
  <f-container>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
  </f-container>
  <br />
  <f-container>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
    <f-footer>Footer</f-footer>
  </f-container>
  <br />
  <f-container>
    <f-aside width="200px">Aside</f-aside>
    <f-main>Main</f-main>
  </f-container>
  <br />
  <f-container>
    <f-header>Header</f-header>
    <f-container>
      <f-aside width="200px">Aside</f-aside>
      <f-main>Main</f-main>
    </f-container>
  </f-container>
  <br />
  <f-container>
    <f-header>Header</f-header>
    <f-container>
      <f-aside width="200px">Aside</f-aside>
      <f-container>
        <f-main>Main</f-main>
        <f-footer>Footer</f-footer>
      </f-container>
    </f-container>
  </f-container>
  <br />
  <f-container>
    <f-aside width="200px">Aside</f-aside>
    <f-container>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
    </f-container>
  </f-container>
  <br />
  <f-container>
    <f-aside width="200px">Aside</f-aside>
    <f-container>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
      <f-footer>Footer</f-footer>
    </f-container>
  </f-container>
</template>

<style scoped>
  .f-header,
  .f-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .f-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .f-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .f-container {
    margin-bottom: 40px;
  }

  .f-container:nth-child(5) .f-aside,
  .f-container:nth-child(6) .f-aside {
    line-height: 260px;
  }

  .f-container:nth-child(7) .f-aside {
    line-height: 320px;
  }
</style>
