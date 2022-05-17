import MeButton from './MeButton' // 按钮
import MeIcon from './MeIcon' // 图标

const components = {
  MeButton,
  MeIcon
}

const install = (app: any) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export { MeButton, MeIcon }

export default {
  install,
  ...components
}
