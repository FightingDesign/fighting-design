import { onMounted, nextTick, ref, computed } from 'vue'
import type { MessageProps } from '../interface'
import type { Ref, ComponentInternalInstance, CSSProperties } from 'vue'
import { useMessage, instances ,seed} from '.'

// const { getSiblingOffset } = useMessage()

export const useOffset = (
  el: Ref<HTMLDivElement>,
  prop: MessageProps,
  instance: ComponentInternalInstance
) => {

  /** 元素的高度 */
  const elHeight = ref<number>(0)

  /** 判断方位 */
  // const isPosition = computed((): boolean =>
  //   // prop.placement.includes(component === 'message' ? 'top' : 'right')
  //   prop.placement.includes('top')
  // )

  /** 计算组件之间偏移量 */
  const siblingOffset = computed((): number => {
    // console.log(instance.uid, getSiblingOffset(prop.placement, instance.uid, !isPosition.value))
    // return getSiblingOffset(prop.placement, instance.uid)
    console.log(instances[prop.placement])

    // return instances[prop.placement][seed][0]
    return 1
    // return instances[prop.placement]?.findIndex(item=> {
    //   return item === instance
    // })
  })

  /** 计算偏移量 */
  const offset = computed((): number => {
    return (elHeight.value + prop.offset) * siblingOffset.value
  })

  onMounted(() => {
    nextTick(() => {
      elHeight.value = el.value.offsetHeight
      // elHeight.value = el.value ? el.value.getBoundingClientRect().height : 0
    })
  })

  /** 位置偏移量样式列表 */
  const offsetStyle = computed((): CSSProperties => {
    /** 样式对象 */
    const styles: CSSProperties = {}

    if (prop.placement.includes('bottom')) {
      styles.bottom = offset.value + 'px'
    } else {
      styles.top = offset.value + 'px'
    }

    return styles
  })
  // console.log(offset.value)

  // nextTick(() => {
  // console.log(el ? el.value.getBoundingClientRect().height : 0)
  // })

  return { offsetStyle }

}
