<script lang="ts" setup name="FTabsNav">
  import { Emits, Props } from './props'
  import type { TabsNavPropsType } from './interface'
  import { isString } from '../../../../_utils'
import { TabsPaneName } from '../../interface';

  const prop: TabsNavPropsType = defineProps(Props)

  const emit = defineEmits(Emits)

  function clickNavItem(name: TabsPaneName) {
    emit('setCurrentName', name)
  }
</script>

<template>
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup -->
  <div class="f-tabs-nav">
    <div class="f-tabs-nav--items">
      <div v-for="item in prop.navs" :key="item.name" @click="clickNavItem(item.name)">
        <span v-if="isString(item.label)">{{item.label}}</span>
        <component :is="item.label"></component>
      </div>
    </div>
    <div class="f-tabs-nav--line"></div>
  </div>
</template>
