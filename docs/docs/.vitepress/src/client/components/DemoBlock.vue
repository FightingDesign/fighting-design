<template>
  <div class="demo-block" :class="[customClass ? customClass : '']">
    <div class="source">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoBlock',
  props: {
    customClass: String
  }
})
</script>

<style scoped>
.demo-block {
  margin: 10px 0;
}
.demo-block .source {
  border: solid 1px var(--demoblock-border);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
}
</style>
