import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/material", component: () => import("../views/Material.vue") },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
