import { version } from './package.json'
import FButton from '@fighting-design/components/button'

const components: object[] = [
  FButton
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
  FButton
}
