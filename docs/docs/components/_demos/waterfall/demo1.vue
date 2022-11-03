<script lang="ts" setup>
  import { ref } from 'vue'
  const handleEnd = (): void => {
    console.log('handleEnd')
    data.value.push({
      src: 'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      name: 'test'
    })
  }

  const data = ref(
    [
      'https://film-grab.com/wp-content/uploads/2022/07/The-Adjuster-006.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Live-and-Let-Die-061.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/After-Yang026.jpg',
      'https://film-grab.com/wp-content/uploads/2022/07/The-Worst-Person-in-the-World-001.jpg',
      'https://film-grab.com/wp-content/uploads/2020/10/Zeroville-025.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Bigger-Than-Life-029.jpg',
      'https://film-grab.com/wp-content/uploads/2022/04/Diamonds-are-Forever-060.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Prisoners-of-Ghostland-002.jpg',
      'https://film-grab.com/wp-content/uploads/2022/02/Dune-2021-022.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/Apollo101_2036.jpg',
      'https://film-grab.com/wp-content/uploads/2022/05/InTheEarth035.jpg'
    ].map((el) => {
      return {
        src: el,
        name: el.substring(49)
      }
    })
  )
</script>

<template>
  <f-waterfall
    wrap-height="300px"
    type="column"
    :list="data"
    @scroll-end="handleEnd"
  >
    <template #default="{ row }">
      <div style="height: auto; width: 100%; display: flex" class="pic">
        <img :src="row.src" style="height: auto; width: 100%" />

        <div class="pic-name">{{ row.name }}</div>
      </div>
    </template>
  </f-waterfall>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .pic {
    overflow: hidden;
    transition: all 0.6s;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 4s;
      transform: translateY(-100%);
    }

    &:hover {
      &:before {
        transform: translateY(0%);
      }

      .pic-name {
        color: #bbb;
        transform: translateY(0);
      }
    }
  }

  .pic-name {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: transparent;
    transform: translateY(100%);
    transition: all 1s;
  }
</style>
