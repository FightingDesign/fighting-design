<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(50)

  const show = ref(true)

  // setTimeout(() => {
  //   show.value = false
  // }, 2000)
</script>

<template>
  <!-- <div style="width: 500px; padding-left:400px;"> -->
  <div class="admin">
    <h2>{{ value1 }}</h2>
    <f-slider v-if="show" v-model="value1" :min="0" :max="100" />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    padding: 40px;
  }

  .admin {
    margin-left: 60px;
    padding-left: 60px;
    border: 1px solid red;
    width: 60%;
  }
</style>
