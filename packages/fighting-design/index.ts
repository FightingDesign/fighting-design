import { version } from './package.json'
import { FButton } from '@fighting-design/components'
import { FIcon } from '@fighting-design/components'
import { FButtonGroup } from '@fighting-design/components'

const components = [
  FButton,
  FButtonGroup,
  FIcon
] as const

const install = (app: any) => {
  components.forEach((component: object) => {
    app.use(component)
  })
}

const fightingDesign = {
  version,
  install
} as const

export {
  FButton,
  FButtonGroup,
  FIcon
}

export default fightingDesign
