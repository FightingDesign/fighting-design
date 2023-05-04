import { ref, computed, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { isBrowser } from '../../_utils'
import type { ComputedRef } from 'vue'

export interface UseCountDownOptions {
  time: number
  millisecond?: boolean
  onFinish?: () => void
}

/**
 * useCountDown hook 返回值中currentTime的类型
 *
 * @param { number } total 剩余总时间（单位毫秒）
 * @param { number } days 剩余天数
 * @param { number } hours 剩余小时数
 * @param { number } minutes 剩余分钟数
 * @param { number } seconds 剩余秒钟数
 * @param { number } milliseconds 剩余毫秒钟数
 */
export interface CurrentTime {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

/**
 * useCountDown hook 返回值类型接口
 *
 * @param { Function } start 开始计时
 * @param { number } days 剩余天数
 * @param { number } hours 剩余小时数
 * @param { number } minutes 剩余分钟数
 * @param { number } seconds 剩余秒钟数
 * @param { number } milliseconds 剩余毫秒钟数
 */
export interface UseCountDownReturn {
  start: () => void
  pause: () => void
  reset: (time: number) => void
  current: ComputedRef<CurrentTime>
}

const raf = (fn: FrameRequestCallback): number => {
  return isBrowser ? window.requestAnimationFrame(fn) : -1
}

const cancelRaf = (id: number): void => {
  if (isBrowser) {
    window.cancelAnimationFrame(id)
  }
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 *  将剩余时间转成CurrentTime类型
 *
 * @param { number } time 时间（单位毫秒）
 * @returns { CurrentTime }
 */

const parseTime = (time: number): CurrentTime => {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

/**
 *
 * @param { number } time1 时间（单位毫秒）
 * @param { number } time2 时间（单位毫秒）
 * @returns
 */
const isSameSecond = (time1: number, time2: number): boolean => {
  return Math.floor(time1 / SECOND) === Math.floor(time2 / SECOND)
}

/**
 * 给定倒计时，伴随时间流逝，计算剩余时间
 *
 * @param { UseCountDownOptions } options 配置项
 * @returns { UseCountDownReturn }
 */
export const useCountDown = (options: UseCountDownOptions): UseCountDownReturn => {
  let rafId: number
  let endTime: number
  let isCounting: boolean
  let deactivated: boolean

  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))

  const getCurrentRemain = (): number => Math.max(endTime - performance.now(), 0)

  const setRemain = (value: number): void => {
    remain.value = value

    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }

  const tick = (): void => {
    // 非浏览器环境，时间不走
    if (!isBrowser) {
      return
    }

    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const start = (): void => {
    if (!isCounting) {
      endTime = performance.now() + remain.value
      isCounting = true
      tick()
    }
  }

  const reset = (totalTime: number = options.time): void => {
    pause()
    remain.value = totalTime
  }

  const pause = (): void => {
    isCounting = false
    cancelRaf(rafId)
  }

  // 毫秒级渲染
  const microTick = (): void => {
    rafId = raf(() => {
      if (isCounting) {
        setRemain(getCurrentRemain())

        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }

  // 秒级渲染
  const macroTick = (): void => {
    rafId = raf(() => {
      if (isCounting) {
        const remainRemain = getCurrentRemain()

        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }

  // 即将卸载时，暂停倒计时
  onBeforeUnmount(pause)

  // keep-alive下 继续倒计时
  onActivated(() => {
    if (deactivated) {
      isCounting = true
      deactivated = false
      tick()
    }
  })

  // keep-alive下 暂停倒计时
  onDeactivated(() => {
    if (isCounting) {
      pause()
      deactivated = true
    }
  })

  return {
    start,
    pause,
    reset,
    current
  }
}
