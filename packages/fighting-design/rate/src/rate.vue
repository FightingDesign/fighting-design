<script lang="ts" setup name="FRate">
import { Props, Emits } from './rate'
import { computed, onMounted, reactive, ref, watch, nextTick } from 'vue'
import { sizeChange } from '../../_utils'
import { FIcon } from '../../icon'
const prop = defineProps(Props)
const emit = defineEmits(Emits)
const hoverIndex = ref(prop.modelValue)

const handleClick = (i: number) => {
  if (prop.readonly) return
  emit('update:modelValue', i)
  emit('change', i)

}
const handleMouseenter = (i: number) => {
  if (prop.readonly) return
  hoverIndex.value = i
}
const handleMouseleave = (i: number) => {
  if (prop.readonly) return
  hoverIndex.value = prop.modelValue
}
const handleDblclick = (i: number) => {
  if (!prop.doubleClear) return
  if (i != 1) return
  handleClick(0)
}
watch(() => prop.modelValue, () => { hoverIndex.value = prop.modelValue })
</script>

<template>
  <div class="f-rate-container">
    <div class="f-rate-row">
      <template v-for="i in max">
        <div class="f-rate-item" @dblclick.native="handleDblclick(i)" @mouseleave="handleMouseleave(i)" :class="{
          'f-rate-full':hoverIndex >= i,
          'f-rate-half':hoverIndex===i-.5,
        }">
          <div class="f-rate-left" @mouseenter="handleMouseenter(half?i -.5:i)" @click="handleClick(half?i -.5:i)">
          </div>
          <div class="f-rate-right" @mouseenter="handleMouseenter(i)" @click="handleClick(i+1)"></div>
          <div class="f-rate-item-bottom">
            <f-icon :size="sizeChange(size)" :color="invalidColor" icon="f-icon-collection" />
          </div>
          <div class="f-rate-item-top">
            <f-icon :size="sizeChange(size)" :color="effectColor" icon="f-icon-collection-fill" />
          </div>

        </div>
      </template>
    </div>
    <div class="f-rate-text" v-if="textShow" :style="{color:textColor,fontSize:sizeChange(textSize)}">{{textArr[hoverIndex-1]}}</div>

  </div>

</template>
