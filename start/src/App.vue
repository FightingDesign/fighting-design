<template>
<f-tag color="#ff0200">
  <f-icon size="15px" icon="f-icon-close" />
  浅色模式
</f-tag>
<f-tag size="small" type="warning" block :hit="false">深色模式</f-tag>
  

<f-container>
    <f-header>Header</f-header>
    <f-main padding="20px">Main</f-main>
  </f-container>
  <f-button>121</f-button>
</template>

<style scoped>
  .f-header {
    background: skyblue;
  }
  .f-main {
    background: orange;
  }
</style>
