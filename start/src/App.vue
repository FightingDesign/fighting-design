<script lang="ts" setup>
import { ref } from 'vue';

const goBack = () => {
  console.log('go back')
}

const switchValue = ref ( false );

</script>

<template>
  <f-page-header title="标题" @back="goBack" />
  <f-switch v-model="switchValue"></f-switch>
</template>