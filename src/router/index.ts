import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/home/HomePage.vue"),
  },
  {
    path: "/resume1",
    name: "ResumeV1",
    component: () => import("../views/resume/ResumeV1.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
