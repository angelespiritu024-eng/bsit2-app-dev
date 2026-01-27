import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((NuxtApp) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  NuxtApp.vueApp.use(vuetify)
})