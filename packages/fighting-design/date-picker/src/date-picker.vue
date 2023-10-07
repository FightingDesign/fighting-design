<script lang="ts" setup>
  import { Props } from './props'
  import { ref } from 'vue'
  import { FInput } from '../../input'
  import { FTrigger } from '../../trigger'
  import { FCalendar } from '../../calendar'
  import { addZero, warning, isFunction } from '../../_utils'
  import { FIconCalendar } from '../../_svg'
  import type { TriggerInstance } from '../../trigger'

  defineOptions({ name: 'FDatePicker' })

  const prop = defineProps(Props)
  const dateModelValue = defineModel<string>('date', {
    default: '',
    type: String
  })

  /** 传递给日历组件的当前时间 */
  const date = new Date()

  /** trigger 组件实例 */
  const triggerInstance = ref<TriggerInstance>()

  let setDateFun: Function | undefined

  /**
   * 选取时间
   *
   * 通过点击日历上的时间进行选取
   *
   * @param { number } year 年份
   * @param { number } month 月份
   * @param { number } date 日期
   */
  const changeDate = (year: number, month: number, date: number): void => {
    /**
     * 格式化规则
     *
     * 字符串中必须包含 YYYY 或者 MM 或者 DD
     */
    const formatRule = RegExp(/([Y]{4})|([M]{2})|([D]{2})/)

    /** 如果存在格式化配置项 */
    if (!formatRule.test(prop.format)) {
      /** 在非标准格式下提示警告错误 */
      /** format 不是一个标准格式，将使用默认格式 */
      warning(
        'f-date-picker',
        '`format` is not a standard format, default format will be used'
      )

      setDateFun = (): void => {
        /** 将绑定值设置为格式化后的日期 */
        // keyword.value = formatDate
        dateModelValue.value = `${year}/${prop.addZero ? addZero(month) : month}/${
          prop.addZero ? addZero(date) : date
        }`
      }
      return
    }

    /** 格式化映射对象 */
    const checkDate = {
      YYYY: year,
      MM: prop.addZero ? addZero(month) : month,
      DD: prop.addZero ? addZero(date) : date
    }

    /** 需要格式化的时间格式 */
    let formatDate: string = prop.format

    for (const key in checkDate) {
      /**
       * @see String.prototype.replace() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
       * @see String.prototype.replace https://caniuse.com/?search=String.prototype.replace
       */
      formatDate = formatDate.replace(
        key,
        checkDate[key as keyof typeof checkDate].toString()
      )
    }

    setDateFun = (): void => {
      /** 将绑定值设置为格式化后的日期 */
      dateModelValue.value = formatDate
    }
  }

  /**
   * 点击确定或者取消按钮
   *
   * @param { Object } evt 事件对象
   * @param { boolean } target 是否为确认
   */
  const onConfirm = (evt: MouseEvent, target: boolean): void => {
    const instance = triggerInstance.value as TriggerInstance
    instance.close(evt)

    if (target && isFunction(setDateFun)) {
      setDateFun()
    }
  }
</script>

<template>
  <div class="f-date-picker">
    <f-trigger ref="triggerInstance" trigger="click" :disabled="disabled">
      <!-- 输入框 -->
      <f-input
        v-model="dateModelValue"
        autocomplete="off"
        readonly
        :disabled="disabled"
        :placeholder="placeholder || '请选择日期'"
        :clear="clear"
        :size="size"
        :after-icon="FIconCalendar"
      />

      <!-- 
        主要内容插入
        插入的是 dropdown 的 content 插槽
        将日期组件插入其中
      -->
      <template #content>
        <div class="f-date-picker__content">
          <f-calendar
            v-model:date="date"
            :day-cell-height="42"
            :week-cell-height="42"
            :on-change="changeDate"
          />

          <!-- 操作栏 -->
          <div class="f-date-picker__option">
            <f-button size="mini" @click="onConfirm($event, false)">取消</f-button>
            <f-button type="primary" size="mini" @click="onConfirm($event, true)">
              确定
            </f-button>
          </div>
        </div>
      </template>
    </f-trigger>
  </div>
</template>
