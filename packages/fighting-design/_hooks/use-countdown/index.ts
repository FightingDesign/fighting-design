import type { timingCallbackProps } from './interface'

export const useCountdown = (
  target: string | number,
  timingCallback: (date: timingCallbackProps) => void,
  endCallback: (currentTime: number) => void
): Object => {
  const end = new Date(target).getTime()
  const Interval = (): void => {
    const currentTimestamp = new Date().getTime()
    /**
     *
     * @param time 时间戳计算的数字值
     * @returns 处理后的 时间
     */
    const processTimer = (time: number): string | number => {
      const timer = parseInt(String(time))
      return timer < 10 ? '0' + timer : timer
    }
    /**
     *  定时器结束
     */
    if (currentTimestamp >= end) {
      clearInterval(time)
      endCallback && endCallback(currentTimestamp)
      return
    }
    /**
     * 两个日期对象，相差的毫秒数
     */
    const terval = (end - currentTimestamp) / 1000
    /**
     * 计算出 倒计时时间
     */
    const date: timingCallbackProps = {
      day: processTimer(terval / 60 / 60 / 24),
      hour: processTimer((terval / 60 / 60) % 24),
      minute: processTimer((terval / 60) % 60),
      second: processTimer(terval % 60)
    }

    timingCallback(date)
  }
  const time = setInterval(Interval, 1000)
  return {}
}
