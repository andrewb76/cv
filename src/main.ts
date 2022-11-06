import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
import i18n from "./i18n";

const pinia = createPinia();

createApp(App).use(i18n).use(router).use(pinia).mount("#app");
