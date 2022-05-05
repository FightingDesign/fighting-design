import { version } from './package.json'
import { FButton } from '@fighting-design/components'
import { FIcon } from '@fighting-design/components'
import { FButtonGroup } from '@fighting-design/components'

const components: object[] = [
  FButton,
  FButtonGroup,
  FIcon
]

const install = (app: any) => {
  components.forEach((component: object) => {
    app.use(component)
  })
}

const fightingDesign = {
  version,
  install
}

export {
  FButton,
  FButtonGroup,
  FIcon
}

export default fightingDesign
