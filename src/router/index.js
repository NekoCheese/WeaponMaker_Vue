import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";

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
    {
      path: "/:catchAll(.*)",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 在每次路由切換前將滾動位置重置到頁面的最上方
  window.scrollTo(0, 0);
  next();
});

export default router;
