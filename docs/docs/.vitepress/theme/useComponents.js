// Don't remove this file, because it registers the demo components.
// import TableDemo from '../components/table/demo.vue'
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

import Demo from '../src/client/components/Demo.vue'
import DemoBlock from '../src/client/components/DemoBlock.vue'
// import DemoBlock from 

export function useComponents(app) {
  // app.component('TableDemo', TableDemo)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
