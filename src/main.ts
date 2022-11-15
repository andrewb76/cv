import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import Hotjar from 'vue-hotjar'
import i18n from './i18n'
import { config } from '@/config'

const HOTJAR_ID = config.services.hotjar.id

const pinia = createPinia()

const app = createApp(App)
Sentry.init({
  app,
  dsn: process.env.VUE_APP_SENTRY_DSN,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'butov.online', /^\//]
    })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

app
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(Hotjar, {
    id: HOTJAR_ID
  })
  .mount('#app')
