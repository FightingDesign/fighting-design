import { version } from './package.json'
import FButton from '@fighting-design/components/button'
import FIcon from '@fighting-design/components/icon'

const components: object[] = [
  FButton,
  FIcon
]

const install = (app: any) => {
  components.forEach((component: object) => {
    app.use(component)
  })
}

const fightingDesign: object = {
  version,
  install
}

export default fightingDesign

export {
  FButton,
  FIcon
}
