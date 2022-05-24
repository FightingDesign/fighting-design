<template>
  <div
    :class="[
      'f-image',
      {
        'f-image-block': block
      }
    ]"
  >
    <img
      ref="FImageImg"
      :class="[
        'f-image-img',
        `f-image-${fit}`,
        {
          'f-image-select': select
        }
      ]"
      src=""
      :style="{ width, height }"
      :draggable="draggable"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts" setup>
import { Props } from './image'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import type {
  LazyInterface,
  loadImageInterface,
  LoadInterface,
  creationMethodInterface
} from '@fighting-design/fighting-type'

const prop = defineProps(Props)

const FImageImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
  null
)

class Lazy implements LazyInterface {
  img: HTMLImageElement
  constructor(img: HTMLImageElement) {
    this.img = img
  }
  observer(): IntersectionObserver {
    const observer: IntersectionObserver = new IntersectionObserver(
      (arr: IntersectionObserverEntry[]) => {
        if (arr[0].isIntersecting) {
          this.img.src = prop.src
          this.img.onerror = () => this.onerror()
          this.img.onload = () => this.onload()
          observer.unobserve(this.img)
        }
      },
      { rootMargin: prop.rootMargin }
    )
    return observer
  }
  createImg(): void {
    this.observer().observe(this.img)
  }
  onerror(): void {
    console.log('图片加载失败')
  }
  onload(): void {
    console.log('图片加载成功')
  }
}

class Load implements LoadInterface {
  img: HTMLImageElement
  constructor(img: HTMLImageElement) {
    this.img = img
  }
  createImg(): void {
    this.img.src = prop.src
  }
}

const creationMethod: creationMethodInterface = (
  instance: Lazy | Load
): void => {
  instance.createImg()
}

const loadImage: loadImageInterface = (): void => {
  const node: HTMLImageElement = FImageImg.value!
  if (prop.lazy) {
    return creationMethod(new Lazy(node))
  }
  creationMethod(new Load(node))
}

onMounted((): void => {
  loadImage()
})
</script>

<script lang="ts">
export default {
  name: 'FImage'
}
</script>
