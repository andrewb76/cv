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

if (process.env.VUE_APP_ENVIRONMENT !== 'development') {
  Sentry.init({
    app,
    release: `${process.env.VUE_APP_NAME}@${process.env.VUE_APP_VERSION}`,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', /^\//]
      })
    ],
    environment: process.env.VUE_APP_ENVIRONMENT,
    debug: process.env.VUE_APP_ENVIRONMENT  !==  'production',

    // tracesSampleRate: 1.0
    tracesSampleRate: process.env.VUE_APP_ENVIRONMENT === 'production' ? 0.2 : 1,
    tracingOptions: {
      trackComponents: true,
    },
    // logErrors: process.env.VUE_APP_ENVIRONMENT === 'production' ? false : true,
    logErrors: true,
    attachProps: true,
    attachStacktrace: true,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
  })
}

app
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(Hotjar, {
    id: HOTJAR_ID
  })
  .mount('#app')
