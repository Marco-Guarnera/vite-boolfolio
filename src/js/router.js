import { createWebHistory, createRouter } from "vue-router";

import AppHomepage from "../pages/AppHomepage.vue";

const routes = [
    { path: "/", component: AppHomepage, name: "homepage" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;