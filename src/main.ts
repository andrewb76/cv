import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
import i18n from "./i18n";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const pinia = createPinia();

const app = createApp(App);
console.log(">>>>>1", process.env);
console.log(">>>>>1", process.env.SENTRY_DSN);
console.log(">>>>>2", process.env.VUE_APP_SENTRY_DSN);
Sentry.init({
  app,
  dsn: process.env.VUE_APP_SENTRY_DSN,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "butov.online", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(i18n).use(router).use(pinia).mount("#app");
