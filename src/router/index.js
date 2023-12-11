import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "首頁",
      component: HomeView,
    },
    {
      path: "/about",
      name: "關於我們",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/support",
      name: "服務項目",
      component: () => import("../views/SupportView.vue"),
    },
    {
      path: "/media",
      name: "團隊作品",
      component: () => import("../views/MediaView.vue"),
    },
    {
      path: "/comms",
      name: "相關資訊",
      component: () => import("../views/CommsView.vue"),
    },
  ],
});

export default router;
