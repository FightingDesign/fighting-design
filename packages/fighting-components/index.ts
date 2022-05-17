// export * from './button'
// export * from './icon'
// export * from './button-group'


import type { App } from 'vue'
import { FButton } from './button'
import { FIcon } from './icon'
import { FButtonGroup } from './button-group'


// const components = {
//   FButton,
//   FIcon,
//   FButtonGroup
// }

// const install = (app: any) => {
//   Object.entries(components).forEach(([key, value]) => {
//     app.component(key, value)
//   })
// }

// export {
//   FButton,
//   FIcon,
//   FButtonGroup
// }

// export default {
//   install,
//   ...components
// }


const components = [
  FButton,
  FButtonGroup,
  FIcon
] as const

const install = (app: App) => {
  components.forEach((component: any) => {
    app.use(component)
  })
}

const fightingDesign = {
  install
} as const

export {
  FButton,
  FButtonGroup,
  FIcon
}

export default fightingDesign
