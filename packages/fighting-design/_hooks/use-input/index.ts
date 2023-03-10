import { isNumber } from '../../_utils'
import { useRun } from '..'
import { EMIT_UPDATE } from '../../_tokens'
import type { UseInputProps, UseInputReturn, UseInputEmit } from './interface'

export * from './interface.d'

/**
 * 文本框输入的方法
 *
 * 可处理文本框输入和清空
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 组件的 props 参数
 * @param { Function } emit 回调参数
 * @returns { Object }
 */
export const useInput = (prop: UseInputProps, emit: UseInputEmit): UseInputReturn => {
  const { run } = useRun()

  /**
   * 处理文本框输入 input 事件
   *
   * @param { Object } evt 事件对象
   */
  const onInput = (evt: Event): void => {
    emit(
      EMIT_UPDATE,
      isNumber(prop.type) ? Number((evt.target as HTMLInputElement).value) : (evt.target as HTMLInputElement).value
    )

    run(prop.onInput, (evt.target as HTMLInputElement).value, evt)
  }

  /**
   * 处理文本框输入 change 事件
   *
   * @param { Object } evt 事件对象
   */
  const onChange = (evt: Event): void => {
    run(prop.onChange, (evt.target as HTMLInputElement).value, evt)
  }

  /** 清空文本框 */
  const onClear = (): void => {
    if (prop.disabled) return
    emit(EMIT_UPDATE, '')
  }

  return {
    onInput,
    onChange,
    onClear
  }
}
