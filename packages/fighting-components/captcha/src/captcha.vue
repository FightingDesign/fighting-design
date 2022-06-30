<template>
  <div class="f-captcha">
    <div class="f-captcha-verify-box">
      <img class="f-captcha-verify" :src="verifySrc" />

      <img
        class="f-captcha-jigsaw"
        src="./prey-item.png"
        :style="captchaStyleList"
      />
    </div>

    <div class="f-captcha-move">
      <div ref="captchaItem" class="f-captcha-item">
        <i :class="['f-icon', moveIcon || 'f-icon-double-arro-right']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="FCaptcha">
  import { Props, Emits } from './captcha'
  import { ref, onMounted, computed } from 'vue'
  import type { Ref } from 'vue'
  import type { handleInputReturnInterface } from './interface'

  defineProps(Props)
  defineEmits(Emits)

  const range: Ref<number> = ref<number>(0)
  const captchaItem: Ref<HTMLDivElement> = ref<HTMLDivElement>(
    null as unknown as HTMLDivElement
  )

  const captchaStyleList = computed((): handleInputReturnInterface => {
    return {
      left: (260 * range.value) / 100 + 'px'
    } as const
  })

  onMounted(() => {
    const node: HTMLDivElement = document.querySelector(
      '.f-captcha-item'
    ) as HTMLDivElement

    node.addEventListener('mousedown', (evt: MouseEvent): void => {
      const dis: number = evt.clientX - node.offsetLeft

      document.onmousemove = (evt: MouseEvent): void => {
        if (evt.clientX - dis >= 0 && evt.clientX - dis <= 260) {
          range.value = Math.floor((evt.clientX - dis) / 2.6)
          node.style.left = evt.clientX - dis + 'px'
        }
      }

      document.onmouseup = (): void => {
        document.onmousemove = null
      }
    })
  })
</script>
