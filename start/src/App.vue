<template>
<<<<<<< HEAD
  <div class="home-banner">
    <f-carousel :data="sliders">
      <template #body="{ row }">
        <img :src="row.url" alt="" />
      </template>
    </f-carousel>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    name: 'HomeBanner',
    setup() {
      const sliders = ref([
        {
          url: 'https://picsum.photos/200/300'
        },
        {
          url: 'https://picsum.photos/200/300'
        },
        {
          url: 'https://picsum.photos/200/300'
        }
      ])
      return { sliders }
    }
  }
=======
  <f-checkbox-group v-model="option4" border size="large">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <f-checkbox-group v-model="option4" border>
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>

  <f-checkbox-group v-model="option4" border size="small">
    <f-checkbox label="选项一" />
    <f-checkbox label="选项二" />
    <f-checkbox label="选项三" />
  </f-checkbox-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const option4 = ref([])
>>>>>>> 92e60848925d51c8c70da68f94b2048c6dc69649
</script>
<style lang="css">
  body {
    margin: 0;
    padding: 0;
  }
</style>
<style scoped lang="scss"></style>
