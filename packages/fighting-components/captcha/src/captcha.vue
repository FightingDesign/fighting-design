<template>
  <div class="f-captcha">
    <div class="f-captcha-verify-box">
      <img class="f-captcha-verify" src="./prey.png" alt="" />
      <img
        class="f-captcha-jigsaw"
        src="./prey-item.png"
        :style="onInput()"
        alt=""
      />
    </div>

    <input v-model="range" type="range" @input="onInput" />
  </div>
</template>

<script lang="ts" setup name="FCaptcha">
  import { Props, Emits } from './captcha'
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  defineProps(Props)
  defineEmits(Emits)

  const range: Ref<number> = ref<number>(0)

  const onInput = () => {
    return {
      left: ((320 - 60) * range.value) / 100 + 'px'
    }
  }
</script>
