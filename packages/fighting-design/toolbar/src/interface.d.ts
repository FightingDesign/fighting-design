export type { ToolbarProps } from './props'

export interface ToolbarClickParams {
  evt: MouseEvent
  index: string | undefined
}

export interface ToolbarClick {
  (target: ToolbarClickParams): void
}
