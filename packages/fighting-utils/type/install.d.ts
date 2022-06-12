import type { App, VNode } from 'vue'

export interface installInterface {
  (main: any, name: string): void
}

export interface mainVNodeInterface extends VNode {
  install: (app: App) => void
}
