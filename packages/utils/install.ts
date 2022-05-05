import type { App } from 'vue'

export const install: Function = (main: any, name: string): void => {
  main.install = (app: App) => {
    app.component(name, main)
  }
}
