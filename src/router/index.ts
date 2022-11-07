import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CVView from "../views/CVView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "cv",
    component: CVView,
    meta: { title: "Andrew Butov. JS Fullstack Dev CV page" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: import("@/views/PageNotFoundView.vue"),
    meta: { title: "Andrew Butov. JS Fullstack Dev 404 page" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
