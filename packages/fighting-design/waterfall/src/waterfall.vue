<script lang="ts" setup name="Waterfall">
  import { onMounted, ref, reactive, onUnmounted, watch, nextTick } from 'vue'
  import { Props, Emits } from './props'
  import type { WaterfallRowType as rt } from './interface'

  const prop = defineProps(Props)

  let cols: number = prop.cols as number
  const emit = defineEmits(Emits)
  const waterfall = ref()
  const data = reactive([]) as rt[]
  const containerHeight = ref('auto') //容器高度
  const uuid = (): string => Math.random().toString(16).substring(2)

  const columns = ref(0)
  const colWidth = ref('0px')

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

  const preload = async (data: rt[]): Promise<unknown[]> => {
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

  const init = (load = true): void => {
    let containerWidth = waterfall.value.clientWidth

    // 容器可分配宽度=容器原宽度 -（列数-1）* 列间隙
    containerWidth =
      containerWidth -
      (Math.floor(containerWidth / prop.minWidth) - 1) * parseInt(prop.colGap)

    if (prop.minWidth) {
      cols = Math.floor(containerWidth / prop.minWidth)
    }

    // 以最终的列数-1*间隙
    if (cols !== Math.floor(waterfall.value.clientWidth / prop.minWidth)) {
      containerWidth =
        waterfall.value.clientWidth - (Number(cols) - 1) * parseInt(prop.colGap)
    }
    columns.value = cols

    const itemWidth = containerWidth / Number(cols) + 'px'
    colWidth.value = itemWidth

    containerWidth = waterfall.value.clientWidth
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

    nextTick(async (): Promise<void> => {
      if (load) {
        await preload(data)
      }
      const nodes: HTMLDivElement =
        waterfall.value.querySelectorAll('.f-waterfall-box')
      let hs = Object.values(nodes).map((n: HTMLElement, index) => ({
        height: n.clientHeight,
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
      init(false)
    }, 10)
    // init(false)
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
    :class="[`f-waterfall__${prop.type}`]"
    :style="{
      '--colCount': columns,
      '--colWidth': colWidth,
      height: prop.type === 'flex' ? containerHeight : '100%',
      '--rowGap': prop.rowGap,
      'row-gap': prop.rowGap,
      'column-gap': prop.colGap
    }"
    @scroll="handleScroll"
  >
    <div
      v-for="(item, index) in data"
      :key="`waterfall_${index}`"
      class="f-waterfall-box"
      :style="{
        order: prop.type === 'flex' && item._order,
        minWidth: prop.type === 'flex' && item._minWidth,
        width: prop.type === 'flex' && item._width
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
    &__flex {
      width: 100%;
      overflow: hidden auto;
      display: flex;
      flex-flow: column wrap;
    }

    &__column {
      overflow: auto;
      column-count: var(--colCount);
      // column-width: var(--colWidth);
      .f-waterfall-box {
        width: var(--colWidth);
        margin-bottom: var(--rowGap);
      }
    }

    .f-waterfall-box {
      height: auto;
      display: flex;
    }
  }
</style>
