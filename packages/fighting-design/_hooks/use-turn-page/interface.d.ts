import type { Ref } from 'vue'

/**
 * useTurnPage 返回值类型接口
 *
 * @param { Object } jumpCurrent 跳转默认选中的也码数
 * @param { Function } selectChange select 发生改变时触发的回调
 * @param { Function } handelChange 点击指定页面的回调
 * @param { Function } handleInput 快速跳转框确定值的行为
 * @param { Function } handelClick 点击每一项页码时执行的回调
 */
export interface UseTurnPageReturn {
  jumpCurrent: Ref<string>
  selectChange: (newValue: SelectModelValue) => void
  handelChange: (newCurrent: number, evt: MouseEvent) => void
  handleInput: () => void
  handelClick: (evt: MouseEvent) => void
}
