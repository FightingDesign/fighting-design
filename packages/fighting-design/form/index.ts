import Form from './src/form.vue'

import { install } from '../_utils'

export const FForm = install(Form)

export type FormInstance = InstanceType<typeof Form>

export * from './src/interface.d'

export default Form
