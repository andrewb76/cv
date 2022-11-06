import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CVView from "../views/CVView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "cv",
    component: CVView,
    meta: { title: "Andrew Butov. JS Fullstack Dev CV page" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
