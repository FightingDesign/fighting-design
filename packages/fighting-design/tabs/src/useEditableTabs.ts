/**
 * UseButtonReturn 返回值类型接口
 *
 * @param { Function } handleTabClose 关闭tab
 */
import type { Ref, ComputedRef } from 'vue'
import { reactive, ref, watch, nextTick } from 'vue'
import { sleep } from '../../_utils'

interface useEditableTabsVariables {
  isCanMove: boolean
  moveCount: number
  moveOnceWidth: number
}

interface useEditableTabsReturn {
  variables: useEditableTabsVariables
  tabRef: Ref<HTMLDivElement | undefined>
  tabWrapperRef: Ref<HTMLDivElement | undefined>
  judgeMove: () => void
  handleMove: (type: 'prev' | 'next') => void
}

const useEditableTabs = (navs: ComputedRef): useEditableTabsReturn => {
  // 一些变量
  const variables = reactive({
    isCanMove: false,
    moveCount: 0, // 移动计数
    maxMoveCount: 0, // 最大可以移动的次数
    moveOnceWidth: 140, // 每次移动距离, 最后计算为容器的33%
    maxMoveWidth: 100 // 计算出最多可以移动多远
  })
  // dom对象
  const tabRef = ref<HTMLDivElement | undefined>() // 实际容器大小
  const tabWrapperRef = ref<HTMLDivElement | undefined>() // 实际容器大小
  /**
   * 判断是否需要移动
   */
  const judgeMove = (): void => {
    if (!tabRef.value || !tabWrapperRef.value) {
      return
    }
    const tabWidth = tabRef.value.offsetWidth // 当前tabs区域宽度
    const tabWrapperWidth = tabWrapperRef.value?.offsetWidth // 容器区域
    // 每次移动的距离
    variables.moveOnceWidth = tabWrapperWidth * 0.33 // 设置移动距离
    // 最多可以移动距离 = 实际宽度-容器宽度, 26:column-gap, 40: icon 宽度
    variables.maxMoveWidth = tabWidth - tabWrapperWidth + 26 + 40
    // 最多可以移动的次数
    variables.maxMoveCount =
      Math.floor(variables.maxMoveWidth / variables.moveOnceWidth) + 1
    // 判断是否需要移动
    variables.isCanMove = !!(tabWrapperWidth && tabWidth > tabWrapperWidth)
    // 如果没有值，移动标记置为0
    if (tabWidth === 0 || !variables.isCanMove) {
      variables.moveCount = 0
      translateX()
    }
  }

  /**
   * 响应移动
   */
  const handleMove = (type: 'prev' | 'next'): void => {
    if (type === 'prev') {
      variables.moveCount = Math.max(variables.moveCount - 1, 0)
    } else if (type === 'next') {
      variables.moveCount = Math.min(variables.moveCount + 1, variables.maxMoveCount)
    }
    translateX()
  }
  /**
   * 移动操作
   */
  const translateX = (): void => {
    if (!tabRef.value) {
      return
    }
    tabRef.value.style.transform = `translateX(-${
      variables.moveCount * variables.moveOnceWidth
    }px)`
  }

  /**
   * 让选中的项定位在tabWrapper中
   */
  const setPosition = async (): Promise<boolean | undefined> => {
    if (!tabWrapperRef.value) {
      return false
    }
    const activeTab = tabWrapperRef.value.querySelector('.f-tabs__nav-active')
    if (!activeTab || !variables.isCanMove || variables.moveCount < 0) {
      return false
    }

    const tabWrapperWidth = tabWrapperRef.value.offsetWidth - 20 // 容器区域
    // 当前选中项的位置
    const activePos =
      parseInt(String(activeTab.getBoundingClientRect().x)) -
      parseInt(String(tabWrapperRef.value.getBoundingClientRect().x))
    const activeMidPos = activeTab.clientWidth / 2 + activePos
    // 判断当前选项(中心位置)在不在可视区域内， 如果不在，进行定位
    if (activePos >= 0 && activeMidPos < tabWrapperWidth) {
      return false
    } else {
      if (activePos < 0) {
        // 左移
        variables.moveCount--
      } else if (activeMidPos >= tabWrapperWidth) {
        // 右移
        variables.moveCount++
      } else {
        return false
      }
      // judgeMove()
      translateX()
      await sleep(100)
      await setPosition()
    }
  }

  watch(navs, () => {
    nextTick(() => {
      judgeMove()
      setPosition()
    })
  })

  return {
    variables,
    tabRef,
    tabWrapperRef,
    judgeMove,
    handleMove
  }
}
export { useEditableTabs }
