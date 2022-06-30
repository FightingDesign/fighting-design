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

    <div class="f-captcha-move">
      <div ref="captchaItem" class="f-captcha-item">滑动</div>
    </div>
  </div>
</template>

<script lang="ts" setup name="FCaptcha">
  import { Props, Emits } from './captcha'
  import { ref, onMounted } from 'vue'
  import type { Ref } from 'vue'

  defineProps(Props)
  defineEmits(Emits)

  const range: Ref<number> = ref<number>(0)
  const captchaItem: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  const onInput = () => {
    return {
      left: ((320 - 60) * range.value) / 100 + 'px'
    }
  }

  onMounted(() => {
    const node = document.querySelector('.f-captcha-item') as HTMLDialogElement

    node.addEventListener('mousedown', (evt: MouseEvent) => {
      const dis = evt.clientX - node.offsetLeft

      document.onmousemove = (evt: MouseEvent): void => {
        if (evt.clientX - dis >= 0 && evt.clientX - dis <= 260) {
          node.style.left = evt.clientX - dis + 'px'
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    })
  })
</script>
