<script setup lang="ts">
  import { FNotification } from 'fighting-design'
  import { reactive } from 'vue'
  const styles = reactive({ color: 'var(--vp-c-brand)' })
  const animationEnd = (time: number): void => {
    console.log(time)
    FNotification({
      title: '这是一条关于f-number-animate 组件的通知 ',
      message: '执行时间 :' + time
    })
  }
</script>
<template>
  <div class="f-number-animate-test">
    <div>基本使用 <f-number-animate :number="10000" :styles="styles" /></div>
    <div>
      locale-string 使用
      <f-number-animate :number="15000" :approximate-time="3000" locale-string :styles="styles" />
    </div>
    <div>
      animationEnd 使用
      <f-number-animate
        :number="20000"
        :approximate-time="4000"
        locale-string
        :animation-end="animationEnd"
        :styles="styles"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
  .f-number-animate-test {
    display: flex;
    div {
      text-align: center;
      flex: 1;
    }
  }
</style>
