<script lang="ts" setup>
  const date = new Date('2101-12-7')
</script>

<template>
  <f-calendar v-model:date="date" lunar />

  <f-list>
    <template #header>
      <f-calendar v-model:date="date" lunar />
      <div>111</div>
      <div>111</div>
      <div>111</div>
    </template>

    <template #footer>
      <div>111</div>
      <div>111</div>
      <div>111</div>
    </template>

    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>

  <!-- <f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">
    <template #source> click me </template>

    click me
    <p><em>content</em></p>
  </f-sticky-card> -->
  <!-- <f-sticky-card :open="false" close-text="展开代码" open-text="折叠代码">
    <template #source>
      <f-button disabled type="default">默认按钮</f-button>
      <f-button disabled type="primary">主要按钮</f-button>
      <f-button disabled type="success">成功按钮</f-button>
      <f-button disabled type="danger">危险按钮</f-button>
      <f-button disabled type="warning">警告按钮</f-button>

      <br />

      <f-button loading type="default">默认按钮</f-button>
      <f-button loading loading-icon="f-icon-loading1" type="primary">
        主要按钮
      </f-button>
      <f-button loading loading-icon="f-icon-loading2" type="success">
        成功按钮
      </f-button>
      <f-button loading loading-icon="f-icon-loading3" type="danger">
        危险按钮
      </f-button>
      <f-button loading loading-icon="f-icon-loading4" type="warning">
        警告按钮
      </f-button>
    </template>

    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
    <h1>1212</h1>
  </f-sticky-card> -->
</template>

<style scoped></style>
