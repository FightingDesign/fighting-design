<script lang="ts" setup name="FTree">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconPlusVue, FIconMinus } from '../../_svg'
  import { treeAddLevel, treeToFlat } from '../../_utils'
  import type { TreeData, TreeDataItem } from './interface'

  const prop = defineProps(Props)

  const addId = (arr, parentId = '') => {
    arr.forEach((item, i) => {
      if (item.children && item.children.length) {
        item.id = Number(`${parentId}${i + 1}`)
        addId(item.children, Number(`${parentId}${i + 1}`))
      } else {
        item.id = Number(`${parentId}${i + 1}`)
      }
    })

    return arr
  }

  const addParentId = arr => {
    console.log(arr)
    arr.forEach(item => {
      let p = item.id

      if (item.children && item.children.length) {
        item.children.forEach(z => {
          z.parentId = p

          if (z.children && z.children.length) {
            addParentId(item.children)
          }
        })
      }
    })

    return arr
  }

  /**
   * 树形数据
   */
  const treeData = computed((): TreeData => {
    // console.log(addId(prop.data))
    return treeToFlat(treeAddLevel(addParentId(addId(prop.data))))
    // console.log(addParentId(addId(prop.data)))

    // return []
  })

  // console.log(treeData.value)

  /**
   * 点击展开或关闭
   *
   * @param item 每一项
   */
  const handleClick = (item: TreeDataItem, index): void => {
    console.log(item, index)

    // 如果有孩子，则将孩子全部隐藏
    if (item.children && item.children.length) {
      item.children.forEach((chi: TreeDataItem): void => {
        chi.show = !chi.show
        console.log(chi.show)
      })
    }
  }
</script>

<template>
  <div class="f-tree">
    <div v-for="(item, index) in treeData" :key="index" class="f-tree__data">
      <div
        v-show="item.show"
        class="f-tree__label"
        :style="{ paddingLeft: 25 * (item.level - 1) + 'px' }"
        @click="handleClick(item, index)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
  <!-- <div class="f-tree">
    <transition-group name="f-tree-animation">
      <div v-for="(item, index) in treeData" v-show="item.show" :key="index" class="f-tree__data">
        <div class="f-tree__label" @click="handleClick(item)">
          <f-svg-icon
            v-if="item.children && item.children.length"
            :size="14"
            :icon="item.children[0].show ? FIconMinus : FIconPlusVue"
          />

          <div class="f-tree-Label-text">{{ item.label }} ---- {{ item.level }}</div>
        </div>

        <template v-if="item.children && item.children.length">
          <f-tree :data="item.children" />
        </template>
      </div>
    </transition-group>
  </div> -->
</template>
