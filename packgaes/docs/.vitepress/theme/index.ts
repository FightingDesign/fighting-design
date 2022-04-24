import { VPTheme } from '@vue/theme'
import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'
import './code.scss'

export default Object.assign({}, VPTheme, {
  enhanceApp({ app }) {
    app.use(tyhUi)
  }
})
