<script lang="ts" setup name="Waterfall">
  import { onMounted, ref, reactive, onUnmounted, watch, nextTick } from 'vue'

  import { Props, Emits } from './waterfall'
  import type { waterfallRowType as rt } from './interface'

  const prop = defineProps(Props)
  let cols: Number = prop.cols as Number
  const emit = defineEmits(Emits)
  const waterfall = ref()
  const data = reactive([]) as rt[]
  const containerHeight = ref('auto') //容器高度
  const uuid = (): string => Math.random().toString(16).substring(2)

  watch(
    () => prop.list.length,
    (newVal) => {
      if (newVal) {
        setTimeout(() => {
          init()
        }, 0)
      }
    }
  )

  const preload = async (data: rt[]): Promise => {
    return Promise.all(
      data.map((item) => {
        return new Promise((resolve: Function) => {
          let img = new Image()
          img.src = item?.src || ''
          img.onload = (): void => {
            resolve()
          }
          img.onerror = (): void => {
            resolve()
          }
        })
      })
    )
  }

  const init = (): void => {
    const containerWidth = waterfall.value.clientWidth

    if (prop.minWidth) {
      cols = Math.floor(containerWidth / prop.minWidth)
    }
    const itemWidth = containerWidth / Number(cols) + 'px'
    // console.log(itemWidth, cols, 'minWIdth')
    data.length = 0
    data.push(
      ...prop.list.map((o: rt) => ({
        src: o.src,
        _uuid: uuid(),
        _order: 0,
        _width: itemWidth,
        _minWidth: prop.minWidth + 'px',
        ...o
      }))
    )

    nextTick(async () => {
      await preload(data)
      const boxs = waterfall.value.querySelectorAll('.f-waterfall-box')
      let hs = Object.values(boxs).map((o, index) => ({
        height: o.clientHeight,
        index
      }))
      const columns = Array(cols)
        .fill(0)
        .map(() => [])
      hs = hs.sort((o1, o2) => o2.height - o1.height)

      hs.forEach((o: rt): void => {
        // 找出高度最小的一列
        const minCol: rt[] = columns.reduce((res, col) => {
          if (
            res.reduce((pre, cur: rt) => pre + (cur?.height || 0), 0) <
            col.reduce((pre, cur: rt) => pre + (cur?.height || 0), 0)
          ) {
            return res
          }
          return col
        }, columns[0])

        minCol.push({ ...o })
      })

      // 最高的一列
      const maxCol = columns.reduce((res, col) => {
        if (
          res.reduce((pre, cur: rt) => pre + (cur?.height || 0), 0) >
          col.reduce((pre, cur: rt) => pre + (cur?.height || 0), 0)
        ) {
          return res
        }
        return col
      }, columns[0])

      containerHeight.value =
        maxCol.reduce((pre, cur: rt) => pre + Number(cur.height), 0) + 'px'

      const result: rt[] = columns.flat(1)
      // <rt[]>
      result.reverse().forEach((row: rt, index) => {
        const item: rt = data[row?.index || 0]
        item._order = index
      })
    })
  }

  let times: NodeJS.Timer | null = null
  const handleResize = (): void => {
    if (times) {
      clearTimeout(times)
    }
    times = setTimeout(() => {
      init()
    }, 50)
  }

  onMounted(async () => {
    window.onresize = handleResize
    init()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  interface target {
    clientHeight: number
    scrollTop: number
    scrollHeight: number
  }

  interface dom {
    target: target
  }

  const handleScroll = (e: dom): void => {
    const clientHeight = e.target.clientHeight
    const scrollTop = Math.ceil(e.target.scrollTop)
    const scrollHeight = e.target.scrollHeight
    if (clientHeight + scrollTop === scrollHeight) {
      emit('scroll-end')
    }
  }
</script>

<template>
  <div
    ref="waterfall"
    class="f-waterfall"
    :style="{ height: containerHeight }"
    @scroll="handleScroll"
  >
    <div
      v-for="(item, index) in data"
      :key="`waterfall_${index}`"
      class="f-waterfall-box"
      :style="{
        order: item._order,
        minWidth: item._minWidth,
        width: item._width,
        marginBottom: prop.rowGap,
        marginRight: prop.colGap
      }"
    >
      <slot name="default" :row="item">
        <img :src="item.src" />
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scope>
  .f-waterfall {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    overflow: hidden auto;

    .f-waterfall-box {
      height: auto;
      display: flex;
      img {
        height: auto;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
