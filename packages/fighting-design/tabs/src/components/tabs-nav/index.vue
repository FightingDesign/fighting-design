<script lang="ts" setup name="FTabsNav">
  import { Emits, Props } from './props'
  import type { TabsNavPropsType } from './interface'
  import { isString } from '../../../../_utils'
import { TabsPaneName } from '../../interface';
import { ComponentInternalInstance, computed, CSSProperties, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';

  const prop: TabsNavPropsType = defineProps(Props)

  const emit = defineEmits(Emits)
  const instance:ComponentInternalInstance = getCurrentInstance()

  function clickNavItem(name: TabsPaneName, index: number) {
    emit('setCurrentName', name)
  }

  const classList = computed(() => {
    const { type, position } = prop
    return [
      `f-tabs-nav__type_${type}`,
      `f-tabs-nav__type_${type}_${position}`
    ]
  })

  /**
   * 仅针对line模式下的，活动线条的样式
   */
  const activeLineStyle = ref<CSSProperties>({})

  const currentIndex = computed(() => Math.max(prop.navs.findIndex(e => e.name === prop.currentName), 0))
  
  watch([currentIndex, () => prop.position, () => prop.type], updateActiveLineStyle)

  async function updateActiveLineStyle() {
    await nextTick()
    if (!prop.navs.length || prop.type !== 'line') return
    const { position } = prop
    const activeStyle:CSSProperties = {}
    const children = instance.subTree.el.querySelectorAll('.f-tabs-nav--item') as HTMLElement[]
    
    if (!children.length) return
    const nextItem = children[currentIndex.value]

    const parent = nextItem.parentElement
    const nextItemStyle = window.getComputedStyle(nextItem)
    if (position === 'top' || position === 'bottom') {
      activeStyle.width = nextItem.clientWidth - Number.parseFloat(nextItemStyle.paddingLeft) - Number.parseFloat(nextItemStyle.paddingRight) + 'px'
      activeStyle.transform = `translateX(${nextItem.offsetLeft - parent.offsetLeft + Number.parseFloat(nextItemStyle.paddingLeft)}px)`
    } else {
      activeStyle.height = nextItem.clientHeight - Number.parseFloat(nextItemStyle.paddingTop) - Number.parseFloat(nextItemStyle.paddingBottom) + 'px'
      activeStyle.transform = `translateY(${nextItem.offsetTop - parent.offsetTop + Number.parseFloat(nextItemStyle.paddingTop)}px)`
    }
    activeLineStyle.value = activeStyle

  }

  onMounted((): void => {
    updateActiveLineStyle()
  })

</script>

<template>
  <div class="f-tabs-nav" :class="classList">
    <div class="f-tabs-nav--items">
      <div class="f-tabs-nav--item"
        :class="[{
          'f-tabs-nav--item__active': item.name === prop.currentName
        }]"
        v-for="item, i in prop.navs"
        :key="item.name"
        @click="clickNavItem(item.name, i)"
      >
        <span v-if="isString(item.label)">{{item.label}}</span>
        <component :is="item.label" v-else></component>
      </div>
    </div>
    <template  v-if="prop.type === 'line'">
      <div class="f-tabs-nav--line">
        <div class="f-tabs-nav--line__active" :style="activeLineStyle"></div>
      </div>
    </template>
  </div>
</template>
