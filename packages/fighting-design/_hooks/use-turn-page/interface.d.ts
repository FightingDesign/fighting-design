import type { Ref } from 'vue'

export interface UseTurnPageReturn {
  jumpCurrent: Ref<string>
  selectChange: (newValue: SelectModelValue) => void
  handelChange: (newCurrent: number, evt: MouseEvent) => void
  handleInput: () => void
  handelClick: (evt: MouseEvent) => void
}
