import type { App } from 'vue'

export const install = (main: any, name: string): void => {
  main.install = (app: App) => {
    app.component(name, main)
  }
}
